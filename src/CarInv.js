
import {db, analytics} from "../src/components/firebase-config"
import { useState, useEffect, useMemo } from 'react';
import { collection, query, where, getDocs } from "firebase/firestore";
import cla35 from "../src/components/cla35.jpg"
import { Link } from "react-router-dom";
import logo from './NEMLOGO.png';


function CarInv() {

  const [cars, setCars] = useState([]);
  const [price, setPrice] = useState([]);
  const [mileage, setMileage] = useState([]);
  const [year, setYear] = useState([]);
  const [error, setError] = useState([]);
  const [sortedCars, setSortedCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [v2, setV2] = useState([]);
  const [f2, setF2] = useState(0);
  useEffect(() =>{

    const getCars = async () => {
      const carsRef = collection(db, "Cars");    
      const q = query(carsRef);
      const querySnapshot = await getDocs(q);
      const carsData = querySnapshot.docs.map((doc) => ({id:doc.id, ...doc.data()}))
      setCars(carsData);

   
    }
    getCars();
    

  }, []);



const filterCars = (value) => {
  setF2(value);
  let filteredCars;
  let cars2 = cars;
  if (value === 0) {
    filteredCars = cars2.filter(obj => obj.Price >= 0);
  } else if (value === 1) {
    filteredCars = cars2.filter(obj => obj.Price <= 10000);
  } else if (value === 2) {
    filteredCars = cars2.filter(obj => obj.Price <= 15000);
  } else if (value === 3) {
    filteredCars = cars2.filter(obj => obj.Price <= 20000);
  } else if (value === 4) {
    filteredCars = cars2.filter(obj => obj.Price <= 25000);
  } else if (value === 5) {
    filteredCars = cars2.filter(obj => obj.Price <= 30000);
  } else if (value === 6) {
    filteredCars = cars2.filter(obj => obj.Price >= 30000);
  } else if (value === 7) {
    filteredCars = cars2.filter(obj => obj.Year >= 2000 && obj.Year <= 2010);
  }else if (value === 8) {
    filteredCars = cars2.filter(obj => obj.Year >= 2010 && obj.Year <= 2020);
  }else if (value === 9) {
    filteredCars = cars2.filter(obj => obj.Year >= 2020 && obj.Year <= 2023);
  }else if (value === 10) {
    filteredCars = cars2.filter(obj => obj.Mileage <=50000);
  }else if (value === 11) {
    filteredCars = cars2.filter(obj => obj.Mileage <= 100000);
  }else if (value === 12) {
    filteredCars = cars2.filter(obj => obj.Mileage <= 150000);
  }else if (value === 13) {
    filteredCars = cars2.filter(obj => obj.Fuel == "gasoline");
  }else if (value === 14) {
    filteredCars = cars2.filter(obj => obj.Fuel == "diesel");
  }else if (value === 15) {
    filteredCars = cars2.filter(obj => obj.Fuel == "electric");
  }else if (value === 50) {
  filteredCars = cars2.filter(obj => obj.Mileage <= 1000000);
}

  setFilteredCars(filteredCars);

 
}


const sortCars = (value) => {
  let sortedCars;

  // preserves the currently applied sort option so it can be called later on when the filters change
  setV2(value);

  if (!filteredCars) {
    sortedCars = [...sortedCars];
  } else {
    sortedCars = [...filteredCars];
  }

  if (value === 1) {
    sortedCars.sort((a, b) => a.Price - b.Price);
    console.log("test2");
  } else if (value === 2) {
    sortedCars.sort((a, b) => b.Price - a.Price);
  } else if (value === 3) {
    sortedCars.sort((a, b) => b.Year - a.Year);
  } else if (value === 4) {
    sortedCars.sort((a, b) => a.Year - b.Year);
  } else if (value === 5) {
    sortedCars.sort((a, b) => a.Mileage - b.Mileage);
  } else if (value === 6) {
    sortedCars.sort((a, b) => b.Mileage - a.Mileage);
  }

  setSortedCars(sortedCars);
  filterCars(f2);
};






const Display = () => {
  let carsToDisplay;

if (sortedCars.length > 0) {
  carsToDisplay = sortedCars;
} else if (filteredCars.length > 0) {
  carsToDisplay = filteredCars;
} else {
  carsToDisplay = cars;
}

  return (
    <div>
      {carsToDisplay.map((car) => (
        <div className="eachCar" key={car.id}>
          <img alt="logo" className="car2" src={car.Image}></img>
          <div className="carInfo">
            <h4 className="carModel">{car.Make} </h4>
            <p className="carModel">{car.Model + " " + car.Year}</p>
            <p className="carDesc">{car.Description + " Mileage: " + car.Mileage}</p>
            <p className="carPrice">{"$"+car.Price.toLocaleString()}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

//resort cars when the filter is updated, due to their dependencies this is necessary.
useEffect(() => {
  if(v2!=null){
    sortCars(v2);
  }
 
}, [v2, f2]);



//make another function to display mileage, price, and etc. on click;

  
  return (
 <div className="invBG">




<div class="container-fluid">
  <div class="row flex-wrap">
  <div className="col-sm-2  flex-grow-1 invNav">
    <div className="invLogo"> <img className="invLogo" src={logo} alt="logo"></img></div> 
    <div className="logoText"> <p className="logoText"> New England Motor Cars</p> </div>

    <div className="invLinks">
        <div className="homeLink"> <Link className="linkText" to='/'> <h2 className="homeLink">Home</h2> </Link> </div>
        <div  className="carsLink"> <Link className="linkText" to='/Cars'><h2 className="homeLink">Cars</h2></Link> </div>
        <div  className="contactLink"> <Link  className="linkText" to='/Contact'> <h2 className="homeLink">Contact</h2> </Link> </div>
    </div>
     </div>
  <div className="col-sm-2 sortBar flex-grow-1 dropdown">         
  <h6 className="dropdown-toggle sortBy" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Sort By: </h6>
        <div className="dropdown-menu">
          <a className="dropdown-item"  onClick={() => sortCars(1)}>Price: Low to High </a>
          <a className="dropdown-item" onClick={() => sortCars(2)} >Price: High to Low</a>
          <a className="dropdown-item" onClick={() => sortCars(3)}>Year: New to Old</a>
          <a className="dropdown-item" onClick={() => sortCars(4)}>Year: Old to New</a>
          <a className="dropdown-item" onClick={() => sortCars(5)}>Mileage: Low to High</a>
          <a className="dropdown-item" onClick={() => sortCars(6)}>Mileage: High to Low</a>
        </div>
  </div>
    <div className="col-sm-4 filter"> 
      <div className="filters-car dropdown"> 
        <h6 className="dropdown-toggle filter-drop sortBy" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Price</h6>
        <div class="dropdown-menu">
          <a class="dropdown-item" onClick={()=> filterCars(0)}> All </a>
          <a class="dropdown-item" onClick={()=> filterCars(1)}>$0 - $10,000</a>
          <a class="dropdown-item" onClick={()=> filterCars(2)}>$0 - $15,000</a>
          <a class="dropdown-item" onClick={()=> filterCars(3)}>$0 - $20,000</a>
          <a class="dropdown-item" onClick={()=> filterCars(4)}>$0 - $25,000</a>
          <a class="dropdown-item" onClick={()=> filterCars(5)}>$0 - $30,000</a>
          <a class="dropdown-item" onClick={()=> filterCars(6)}> $30,000 + </a>
        </div>
      </div>
      <div class="filters-car dropdown"> 
        <h6 class="dropdown-toggle filter-drop sortBy" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Fuel Type</h6>
        <div class="dropdown-menu">
        <a class="dropdown-item" onClick={()=> filterCars(13)}>Gasoline</a>
        <a class="dropdown-item" onClick={()=> filterCars(14)}>Diesel</a>
        <a class="dropdown-item" onClick={()=> filterCars(15)}>Electric</a>
        </div>
      </div>
      <div class="filters-car dropdown"> 
        <h6 class="dropdown-toggle filter-drop sortBy" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Year</h6>
        <div class="dropdown-menu">
          
          <a class="dropdown-item" onClick={()=> filterCars(7)}>2000 - 2010</a>
          <a class="dropdown-item" onClick={()=> filterCars(8)}>2010 - 2020</a>
          <a class="dropdown-item" onClick={()=> filterCars(9)}>2020 - 2023</a>
        </div>
      </div>

      <div class="filters-car dropdown"> 
        <h6 class="dropdown-toggle filter-drop sortBy" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Mileage</h6>
        <div class="dropdown-menu">
          <a class="dropdown-item" onClick={()=> filterCars(50)}>all</a>
          <a class="dropdown-item" onClick={()=> filterCars(10)}>Less than 50,000</a>
          <a class="dropdown-item" onClick={()=> filterCars(11)}>Less than 100,000</a>
          <a class="dropdown-item" onClick={()=> filterCars(12)}>Less than 150,000</a>
        </div>
      </div>
    </div>
    {/* <div className="col-sm-8 carsContainer flex-grow-1">{cars.map(car => <Display key={car.id} car={car}/>)} </div> */}
    <div className="col-sm-8 carsContainer flex-grow-1"> <Display />  </div>
    <div className="bottom2"></div>
  </div>
</div>


</div>
 
    
  );
}

export default CarInv;
