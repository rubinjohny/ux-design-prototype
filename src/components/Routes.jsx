import React from 'react'
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
} from "react-router-dom";
import {Dashboard} from '../containers/Dashboard'

export const Routes = () => {

   return(
      <Switch>
         <Route exact path="/">
            <Dashboard />
         </Route>
         <Route path="/about">
            <span>about</span>
         </Route>
         <Route path="/dashboard">
            <Dashboard />
         </Route>
      </Switch>
   )
}