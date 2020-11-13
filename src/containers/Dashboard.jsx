import React from "react"
import {Row, Col} from 'antd'
import {Card} from '../components/Card'

const cards = [
   {
      title:"Registration",
      description:"Check your registration status, class schedule and add or drop classes",
      icon:""
   },
   {
      title:"Student Records",
      description:"View your holds, grades and transcripts",
      icon:""
   },
   {
      title:"Student Accounts",
      description:"View your account summaries, statement/payment history and tax information",
      icon:""
   },
   {
      title:"Preferred First Name Option",
      description:"Add/Change/Delete preferred first name",
      icon:""
   },
   {
      title:"Teaching Effectivness Survey",
      description:"",
      icon:""
   },
]

export const Dashboard = () => {
   return(
      <div>
         <Row justify="center">
            {cards.map((card, i) => {
               return (
                  <Col className="gutter-row" span={8} key={i}>
                     <Card
                        title={card.title}
                        description={card.description}
                        icon={card.icon}
                     />
                  </Col>
               )
            })}
         </Row>
         
      </div>
   )
}