

import React, {useState} from "react";

import './itemwrapper.css'
import MessagePage from "../MessagePage/MessagePage";
import { useNavigate } from "react-router-dom";

import Appointment from "../../pages/AppointmentPage/Appointment";
const ItemWrapper =(props)=>{
   
    
  
    
    const navigate = useNavigate()
    const style = {
        backgroundColor:props.item.backgroundColor
    }

    const [flag , setFlag] = useState(false)
    const buttonHandler = ()=>{
        setFlag(true)
    }
    const appointmentHandler =()=>{
      
       navigate('/message')
    }
    return(
        <div className="item_wrapper" style={style}>
        {flag && <MessagePage/>}
        <h2 className="id_">{props.item.id}</h2>
        <h2 className="doc_name">{props.item.name}</h2>
        <h2 className="doc_speciality">{props.item.speciality}</h2>
        <button className="message_btn" onClick={buttonHandler}>Message</button>
        <button className="appointment_btn" onClick={appointmentHandler}>Book an appointment</button>
    </div>
    );
}
export default ItemWrapper