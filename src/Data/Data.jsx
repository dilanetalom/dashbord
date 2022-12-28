import  { 
     FaHome,
     FaDog,
     FaAddressBook,
     FaAirFreshener,
     FaAccessibleIcon,
     FaAccusoft

}  from   "react-icons/fa"

import img1 from '../images/meca2.png'
import img2 from '../images/noit1.png'
import img3 from '../images/Person1.png'

// sidebar

export const SidebarData = [
    {
        icon: FaHome,
        heading: "Dashbord",
    },
    {
        icon:  FaDog,
        heading: "Dashbord",
    },
    {
        icon:  FaAddressBook,
        heading: "Dashbord",
    },
    {
        icon:  FaAirFreshener,
        heading: "Dashbord",
    },
    {
        icon:   FaAccessibleIcon,
        heading: "Dashbord",
    },

]


export const CardsData =[
    {
        title:"Sales",
        color:{
            backGround:"linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow:"0px 10px 20px 0px #0c6f5",
        },
        barValue:70,
        value:"25,970",
        png:FaAccusoft,
        series:[
            { 
                name: "Sales",
                data:[31, 40, 28, 51, 42, 109, 100],
            },
        ],
    },
    {
        title:"Revenue",
        color:{
            backGround:"linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow:"0px 10px 20px 0px #0c6f5",
        },
        barValue:80,
        value:"25,970",
        png:FaAccusoft,
        series:[
            {
                name: "Sales",
                data:[31, 40, 28, 51, 42, 109, 100],
            },
        ],
    },
    {
        title:"Sales",
        color:{
            backGround:"linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow:"0px 10px 20px 0px #0c6f5",
        },
        barValue:60,
        value:"25,970",
        png:FaAccusoft,
        series:[
            {
                name: "Sales",
                data:[31, 40, 28, 51, 42, 109, 100],
            },
        ],
    },
]


// recent update card data 
export const UpdateData = [
    {
        img:img1,
        name:"Andrew Thomas",
        noti:"has ordered Apple smart watch 2500mh battery.",
        time:"25 seconds ago",
    },
    {
        img:img2,
        name:"James Bond",
        noti:"has ordered Apple smart watch 2500mh battery.",
        time:"30 minutes ago",
    },
    {
        img:img3,
        name:"Iron Man",
        noti:"has ordered Apple smart watch 2500mh battery.",
        time:"2 seconds ago",
    },
]