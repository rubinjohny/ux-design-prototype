import React from 'react'
import {Row, Col} from 'antd'
import { Menu, Dropdown, Button, message, Tooltip } from 'antd';
import { DownOutlined, UserOutlined, DownCircleOutlined } from '@ant-design/icons';



export const Header = () => {

   const handleMenuClick = e => {
      message.info('Click on menu item.');
      console.log('click', e);
   }
   const menu = (
      <Menu onClick={handleMenuClick}>
         <Menu.Item key="1" >
            Return to Menu
         </Menu.Item>
         <Menu.Item key="2" >
            Site map
         </Menu.Item>
         <Menu.Item key="3" >
            Help
         </Menu.Item>
         <Menu.Item key="4" >
            Exit
         </Menu.Item>
      </Menu>
   );

  

   return(
      <div className="header">
         <Row justify="space-between" style={{height:"100%"}}  >
            <Col span={6} style={{ height: "100%" }}>
               <div style={{ height: "100%" }}>
                  <img src={"../icons/logo.png"} width="100%" height="100%" resizeMode="contain" style={{marginLeft:20, padding:15}}/>
               </div>
            </Col>
            <Col span={8}>
               <div style={{ display: "flex", justifyContent: "center", height: "100%", alignItems:"center"}}>
                  <div style={{ alignItems: "center", display:"flex", paddingBottom:5, margin:10}}>
                     <span style={{color:"white", fontSize:18}}>Personal Information</span>
                  </div>
                  <div style={{ alignItems: "center", display: "flex", paddingBottom:5, margin:10 }}>
                     <span style={{ color: "white", fontSize: 18, borderBottom: "3px solid #FDBB30"}}>Student</span>
                  </div>
                  <div style={{ alignItems: "center", display: "flex", paddingBottom:5,  margin:10 }}>
                     <span style={{ color: "white", fontSize: 18, }}>Financial Aid</span>
                  </div>
               </div>
            </Col>
            <Col span={4} style={{ alignItems: "center", display: "flex", justifyContent: "center"}}>
               <div>
                  <Dropdown overlay={menu}>
                     <DownCircleOutlined style ={{color:"white", fontSize:20, float:"right"}} />
                  </Dropdown>
               </div>
            </Col>
         </Row>
         
      </div>
   )
}