import React from 'react'
import './CustomerReview.css'
import Chart from 'react-apexcharts'


function CustomerReview() {


    const data = {
        series:[
            {
            name:"Review",
            data:[10, 50, 30, 90, 40, 120, 100, ]
            },
        ],
        options:{
            chart:{
                type:"area",
                height:"auto",
            },
            fill:{
                colors:["#fff"],
                type:"gradient",
            },
            dataLabels:{
                enabled:false,
            },
            straoke:{
                curve:"smooth",
                colors:["#ff929f"],
            
            },
            tooltip:{
                x: {
                   format:"dd/MM/yy HH:mm", 
                },
            },
            grid:{
                show:false,
            },
            xaxis:{
                type:"datetime",
                categories:[
                    "2018-09-19T00:00:00.000z",
                    "2018-09-19T00:30:00.000z",
                    "2018-09-19T00:30:00.000z",
                    "2018-09-19T00:30:00.000z",
                    "2018-09-19T00:30:00.000z",
                    "2018-09-19T00:30:00.000z",
                ],
            },
            yaxis:{
                show:false
            },
            toolbar:{
                show:false
            }
        }
    }
  return (
    <div className='CustomerReview'>
         <Chart 
         series={data.series} options={data.options} type='area'
         />
    </div>
  )
}

export default CustomerReview