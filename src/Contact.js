
import {db, analytics} from "../src/components/firebase-config"
import { useState, useEffect, useMemo } from 'react';
import { collection, query, where, getDocs } from "firebase/firestore";
import cla35 from "../src/components/cla35.jpg"
import { Link } from "react-router-dom";
import logo from './NEMLOGO.png';

function Contact() {

  

  
    return (

        <div className="contactBG">
            <div className="invNav">  
                    <div className="invLogo2"> <img className="invLogo" src={logo} alt="logo"></img></div> 
                    <div className="logoText"> <p className="logoText"> New England Motor Cars</p> </div>

                    <div className="invLinks">
                        <div className="homeLink"> <Link className="linkText" to='/'> <h2 className="homeLink">Home</h2> </Link> </div>
                        <div  className="carsLink"> <Link className="linkText" to='/Cars'><h2 className="homeLink">Cars</h2></Link> </div>
                        <div  className="contactLink"> <Link  className="linkText" to='/Contact'> <h2 className="homeLink">Contact</h2> </Link> </div>
                    </div>
            
            </div>
            <div className="centerContact"> 

            <form>
               <h1 id="contactUs">Contact Us:</h1>
               <div className="nameC">  <input type="text" id="fname" name="fname" placeholder="Name"/> </div>
        
               <div className="nameC">  <input type="text" id="fname" name="fname" placeholder="Email"/> </div>

               <div className="messageC"> <textarea id="contactText" placeholder="Type your message here"></textarea> </div>

                <div> <img className="img-fluid logo3" src={logo} alt="logo"></img></div>
               <div> <p className="contact3">123 Berkshire ave, springfield, MA </p> <p className="contact3">(123)-456-7890</p> </div>
            </form>
                
                
            </div>
            
            
            
            
            
            
        </div>
    )


}
export default Contact

