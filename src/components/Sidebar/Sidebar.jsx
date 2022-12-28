import React, { useState } from 'react'
import './Sidebar.css'
import logo from '../../images/logo.png'
import { SidebarData } from '../../Data/Data'
import  {FaBars, FaSignOutAlt } from "react-icons/fa"
import {motion} from 'framer-motion'



function Sidebar() {
const [selected, setSelected] = useState(0)
const[expanded, setExpanded] = useState(true)
const sidebarVariants ={
  true:{
    left:'0'
  },
  false:{
    left:'-60%'
  }
}
  return (
    <>
       <div className='bars' style={expanded?{left:'60%'}:{left:'5%'}}
       onClick={()=>setExpanded(!expanded)}
       >
        <FaBars/>
      </div>
    <motion.div className='Sidebars'
    variants={sidebarVariants}
    animate = {window.innerWidth<=768?`${expanded}`:
  ""
  }
    >
   
        <div className="log">
            <img src={logo} width={50} alt="" />
            <p>NYLSTECH DIGITAL</p>
        </div>

        {/* menu  */}

        <div className="menu">
             {
              SidebarData.map((item,index)=>{
                return(
                  <div className={selected===index? "menuItems active": "menuItems"}
                  key={index}
                  onClick={()=>setSelected(index)}
                  >
                
                   <item.icon/>
                  <span>
                    {item.heading}
                  </span>
         </div>
                )
              })
             }

             <div className="menuItems">
                   <FaSignOutAlt/>
             </div>
             
        </div>
    </motion.div>
    </>
  )
}

export default Sidebar