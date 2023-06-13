
import React from "react";
import Navbar from "../../component/Navbar/Navbar";
import ItemWrapper from "../../component/ItemWrapper/ItemWrapper"
import './appointment.css'

const Appointment =()=>{
    const data= [
        {
            id: 1, name:"Manisha singh", speciality:"Lawyer",
            backgroundColor:"#f2f2f2"
             
        },
        {
            id: 2, name:"Ankita Singh", speciality:"Doctor",
            backgroundColor:"#fff"
        },
        {
            id: 3, name:"Twenkle sen", speciality:"Developer",
            backgroundColor:"#f2f2f2"
            
        }
    ]
    return(
       <div className="appointment-ctn">
        <Navbar/>
        <div className="botton-sec">
            {
                data.map(item => <ItemWrapper item={item}/>)
            }
        </div>
       </div>
    );
}
export default Appointment