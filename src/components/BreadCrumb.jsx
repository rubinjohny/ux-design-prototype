import React from 'react'
import {Breadcrumb as BreadcrumbAntd} from 'antd'
import {Link} from 'react-router-dom'

export const BreadCrumb = ({options}) => {

   return(
      <BreadcrumbAntd separator={<span className="breadcrumb-text">-></span>}>
         {options.map((option, i) => {
            if(i !== options.length - 1){
               return(
                  <BreadcrumbAntd.Item key={i}>
                     <Link to={option.to}>
                        <span className="breadcrumb-text" style={{ textDecoration:"underline"}}>{option.label}</span>
                     </Link>
                  </BreadcrumbAntd.Item>
               )
            }
            else{
               return(
                  <BreadcrumbAntd.Item key={i}>
                     <span className="breadcrumb-text">{option.label}</span>
                  </BreadcrumbAntd.Item>
               )
            }
         })}
      </BreadcrumbAntd>
      
   )
}