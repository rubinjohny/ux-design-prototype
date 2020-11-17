import React from 'react'
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
} from "react-router-dom";
import {Dashboard} from '../containers/Dashboard'
import {Registration} from '../containers/Registration'
import { UnderConstruction} from '../containers/UnderConstruction'

export const Routes = () => {

   return(
      <Switch>
         <Route exact path="/">
            <Dashboard />
         </Route>
         <Route path="/registration">
            <Registration />
         </Route>
         {/* <Route path="/dashboard">
            <Dashboard />
         </Route> */}

         <Route path="*">
            <UnderConstruction />
         </Route>
      </Switch>
   )
}