import React,{useState} from "react";

import './messagepage.css'
import close from './close.png'

const MessagePage =()=>{
  const [flag , setFlag] = useState(true)
  const buttonClose =()=>{
    setFlag(false)
  } 
  
    return(
      <div className="main">
      {flag && 
        <div className="message-box">
        
       <img src={close} alt="" className="close-btn" onClick={buttonClose}></img>

      </div>}
      </div>
     
    );
}

export default MessagePage