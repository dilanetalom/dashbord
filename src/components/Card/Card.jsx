import React, { useState } from 'react'
import './Card.css'
import {motion, AnimateSharedLayout } from 'framer-motion'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaTimes } from 'react-icons/fa';
import Chart from 'react-apexcharts' 



function Card(props) {
  const [expanded, setExpanded] = useState(false)
  return (
    <div className='Card'>
      <AnimateSharedLayout>
        {
          expanded ? (
            <ExpandedCard param={props} setExpanded={()=>setExpanded(false)}></ExpandedCard>
          ) :
            <CompactCard param={props} setExpanded={()=>setExpanded(true)}/>
        }
      </AnimateSharedLayout>
    </div>
  ) 
}

// Compact Card
function CompactCard({ param, setExpanded }) {
  console.log(param.value);
  const Png = param.png;
  return ( 
  
    <motion.div 
    className="CompactCard"
    style={ {
      background : param.color.backGround,
      boxShadow : param.color.boxShadow
    }}
    onClick={setExpanded}
    layoutId='expandableCard'
    >
      <div className="radialBar">
          <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}`+ '%'}
          />
          <span>{param.title}</span>
      </div>
      <div className="detail">
            <Png/>
            <span>${param.value}</span>
            <span>Last 24 hours</span>
      </div>
    </motion.div>
   
  ); 
}

// expanded card

function ExpandedCard({param, setExpanded}){
  const data = {
    options:{
      chart: {
        type:'area',
         height:'auto',
      },
      dropShadow:{
        enabled:false,
        enabledOnSeries:undefined,
        top:0,
        left:0,
        blur:3, 
        color:"#000",
        opacity:0.35,
      },

      fill: {
          colors:["#fff"],
          type:"gradient",
      },
      dataLabels:{
        enabled:false,
      },
      stroke:{
        curve:"smooth",
        colors: ["white"],
      },
      tooltip:{
       x: {
        format: "dd/MM/yy HH:mm",
       }
      },
      grid: {
       show:true,
       },
       xaxis: {
       type:"datetime",
       categories:[
        "2018-09-19t00:00:00.000Z",
        "2018-09-19t01:30:00.000Z",
        "2018-09-19t02:30:00.000Z",
        "2018-09-19t03:30:00.000Z",
        "2018-09-19t04:30:00.000Z",
        "2018-09-19t05:30:00.000Z",
        "2018-09-19t06:30:00.000Z",
       ]
        }
    }
  }
  return(
    <motion.div className='ExpandedCard'
    style={{background:param.color.backGround,
      boxShadow:param.color.boxShadow
    }}
    layoutId='expandableCard'
    >
     <div  style={{alignSelf: 'flex-end', cursor:'pointer', color:'white'}}>
      <FaTimes onClick={setExpanded} 
     
      />
     </div>
     <span>  {param.title}</span>
     <div className='chartContainer'>
        <Chart series={param.series} type='area' options={data.options}/>
     </div>
     <span>last 24 hours</span>
    </motion.div>
  )
}

export default Card