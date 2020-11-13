import React from 'react'

export const Card = ({ title, description, icon}) => {

   return(
      <div style={{justifyContent:"center", display:"flex", padding:20, margin:20}}>
         
         <div className="card">
            <div style={{flex:5}}>
               <img src="" width={100} height={100} />
            </div>
            <div style={{ flex: 3, backgroundColor:"#00543C", borderBottomLeftRadius:25, borderBottomRightRadius:25}}>
               <div style={{display: "flex", flexDirection:"column", flex:1, height:"100%"}}>
                  <div style={{ flex: 1, textAlign: "center",display: "flex", justifyContent:"center"}}>
                     <span style={{ color: "white", alignSelf: "center"}}>{title}</span>
                  </div>
                  { description && <div style={{ flex: 1, textAlign: "center", display: "flex", justifyContent: "center"}}>
                     <span style={{ color: "white", alignSelf: "center" }}>{description}</span>
                  </div>}
               </div>
            </div>
         </div>
      </div>
   )
}