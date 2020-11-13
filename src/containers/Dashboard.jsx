import React from "react"
import {Row, Col} from 'antd'
import {Card} from '../components/Card'
import registration from '../icons/registration.png'
import book from '../icons/reading-book.png'
import accounting from '../icons/accounting.png'
import id from '../icons/id.png'
import survey from '../icons/survey.png'

const cards = [
   {
      title:"Registration",
      description:"Registration status, Course catalog,  and Add/Drop classes",
      icon:registration
   },
   {
      title:"Student Records",
      description:"Student schedule, Holds, Grades, Transcripts, Graduate Application",
      icon: book
   },
   {
      title:"Student Accounts",
      description:"View your account summaries, statement/payment history and tax information",
      icon: accounting
   },
   {
      title:"Preferred First Name Option",
      description:"Add/Change/Delete preferred first name",
      icon: id
   },
   {
      title:"Teaching Effectivness Survey",
      description:"",
      icon: survey
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