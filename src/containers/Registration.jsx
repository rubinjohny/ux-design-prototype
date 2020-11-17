import React from 'react'
import {Row, Col} from 'antd'
import {Link} from 'react-router-dom'
import { SubHeader } from '../components/SubHeader'

const options = [
   {
      label:"Register for Classes",
      to:"register-for-classes"
   },
   {
      label:"Drop/Add Classes",
      to:"drop-add-classes"
   },
   {
      label:"Course Catalog/Schedules",
      to:"catalog-schedules"
   },
   {
      label:"Change Class Options",
      to:"class-options"
   },
   {
      label:"Registration Status & Advisor Information",
      to:"status-adviser"
   },
   {
      label:"Buy Textbooks Online",
      to:"textbooks"
   },
]

const breadcrumb = [
   {
      label:"Dashboard",
      to:""
   },
   {
      label: "Registration",
      to: "registration"
   },
]

export const Registration = props => {
   return (
      <>
         <SubHeader title="Registration" breadcrumb={breadcrumb} />

         <div style={{display:"flex", justifyContent:"center" }}>
            <Row className="grey-section">
               {options.map((option,i) => (
                     <Col key={i} span={12} style={{ padding: 10 }}>
                        <Link to={`/${option.to}`}>
                           <div className="secondary-card-innercontainer">
                              <span style={{ fontSize: 16, color:"black" }}>{option.label}</span>
                           </div>
                        </Link>
                     </Col>
                  )
               )}
            </Row>
         </div>
      </>
   )
}