import logo from './NEMLOGO.png';
import './App.css';
import arrow from '../src/arrow.png'
import jeep from '../src/2011-jeep.jpg'
import bg from '../src/NEBG.jpg'
import bg2 from '../src/bg2.jpg'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { collection, query, where, getDocs } from "firebase/firestore";
import {db, analytics} from "../src/components/firebase-config"
import { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Loader } from "@googlemaps/js-api-loader";

// import Home from './Home';
 import CarInv from './CarInv.js';
//import Contact from './Contact';




function Main() {

  

  
  return (



    <div className="App">
      <header>
        

      </header>
     
      <div className='logoBG'>
        
                        <div className='logo'>
                           <img src={logo} alt="logo" className='img-fluid logo'></img>
                           <div className='navbar bar'> 
                  
                  <div className='home'> <Link id="nav"> Home </Link> </div>
                  <div className='home'>  <Link id="nav" to='/Cars'>Cars </Link> </div>
                  <div className='contact'> <Link id="nav"> Contact </Link> </div>

                  
              </div>
                           
                        </div>


                      <div className='bar2'> 
                    <img alt="logo" className="logoIcon1" src="https://cdn.cdnlogo.com/logos/t/14/tesla.png"></img>
                    <img alt="logo" className="logoIcons" src="https://i.pinimg.com/originals/b1/5a/56/b15a56f470a37c225d5acb8071d0b270.png"></img>
                    <img alt="logo" className="logoIcons" src="https://purepng.com/public/uploads/large/purepng.com-lexus-car-logologocar-brand-logoscarslexus-car-logo-1701527428317c4d82.png"></img>
                    <img alt="logo" className="logoIcons" src="https://www.freepnglogos.com/uploads/toyota-logo-png/toyota-logos-brands-logotypes-0.png"></img>
                    </div>

                            
                            
                    </div>
      {/* <img className='img-fluid' src={bg2}></img>  */}


           

<Container>

      <div className='container main-container'>
                <div className="container test">
                  <div className="row navRow">
                    <div className="col-sm">

                    </div>
  
                  </div>
                </div>



            <div className='center'>
                <div className='introText'>
                    
                    <div className='mainText'>
                        <p className='subtxt2'> The number one rated dealership in massachusettes</p>
                        <p className='subtxt'><a href="#" className="link-light link2">Find a new car now!</a></p>
                
                    </div>
              
                </div>
            </div>


</div>
        
      </Container>

    <div className='bottom'> 
    
   <div className='b1'><h2 className='bottom'> New England Motor Cars</h2> </div> 
    <div className='b1'><h2 className='bottom'>720 Berkshire Ave, Springfield, MA 01109 </h2> </div>
  
    </div>
     
    </div>


    
  );
}

export default Main;