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
      icon:registration,
      routeTo:"registration"
   },
   {
      title:"Student Records",
      description:"Student schedule, Holds, Grades, Transcripts, Graduate Application",
      icon: book,
      routeTo:"student-records"
   },
   {
      title:"Student Accounts",
      description:"View your account summaries, statement/payment history and tax information",
      icon: accounting,
      routeTo:"student-accounts"
   },
   {
      title:"Preferred First Name Option",
      description:"Add/Change/Delete preferred first name",
      icon: id,
      routeTo:"name-options"
   },
   {
      title:"Teaching Effectivness Survey",
      description:"",
      icon: survey,
      routeTo:"survey"
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
                        routeTo={card.routeTo}
                     />
                  </Col>
               )
            })}
         </Row>
         
      </div>
   )
}