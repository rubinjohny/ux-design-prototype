import React from 'react'
import {Link} from 'react-router-dom'

export const Card = ({ title, description, icon, routeTo}) => {

   return(
      <div className="card-container">
         
         <div className="card">
            <Link to={`/${routeTo}`}>
               <div className="card-top-section">
                  <img src={icon} width="60%" height="60%" style={{objectFit:"contain"}} />
               </div>

               <div className="card-bottom-section">
                  <div className="card-bottom-text">
                     <span className="card-bottom-title" style={{ alignSelf: description ? "flex-end":"center"}}>{title}</span>
                  </div>
                  {description && <div className="card-bottom-text" style={{flex: 1.5}}>
                     <span className="card-bottom-description">{description}</span>
                  </div>}
               </div>
            </Link>

         </div>
      </div>
   )
}