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

import CarInv from "./CarInv";
import Main from "./Main"
import Contact from "./Contact";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Cars" element={<CarInv />} />
        <Route path="/" element={<Main />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
