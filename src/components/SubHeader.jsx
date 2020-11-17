import React from 'react'
import {BreadCrumb} from '../components/BreadCrumb'

export const SubHeader = ({ title, breadcrumb}) => {
   return (
      <div className="subheader">
         <div className="subheader-left">
            <BreadCrumb options={breadcrumb} />
         </div>
         <div className="subheader-center">
            <span>{title}</span>
         </div>
         <div style={{ flex: 2 }} />
      </div>
   )
}
   