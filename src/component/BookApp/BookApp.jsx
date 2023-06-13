import React from "react";
import './bookapp.css'
import woman from './woman-doctor.jpg'
import lawyer from './lawyer.jpg'
import developer from './developer.avif'
const BookApp =()=>{
   
    return (
        <div className="parent">

    <div className="book-app">
        <img src= {woman} alt="" className="woman_doc"></img></div>
        <div className="law">
        <img src={lawyer} alt="" className="lawyer_pic"></img>
        </div>
        <div className="dev">
        <img src={developer} alt="" className="dev_pic"></img>
        </div>

    
    </div>
    );
}

export default BookApp