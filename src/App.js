import './App.css';
import { useState,useEffect } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Create from './components/Create';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';
import React from 'react';
import axios from 'axios';
import NavBar2 from './components/NavBar2';


function App() {
  const [record, setrecord] = useState([])
  const [products, setproducts] = useState([])

  //*****************Getting Campaign Details from Datbase ******************/
  const loadEmployeeDetail = async () =>
  {
    var response = fetch('http://localhost:5000/api/tasks')
        .then(function(response){
          return response.json();
        })
        .then(function(myJSON){
          setrecord(myJSON);
        })
  };
  /**********************END ***************************************************/

  //*****************Getting Product Details from Datbase ******************/
  const loadProductDetail = async () =>
  {
    var response = fetch('/api/pics')
        .then(function(response){
          return response.json();
        })
        .then(function(myJSON){
          setproducts(myJSON);
        })
  };
  /**********************END ***************************************************/
  const deleteRecord = (productId) =>
    {
      axios.delete(`/api/tasks/${productId}`)
      .then((result)=>{
        loadEmployeeDetail();
      })
      .catch(()=>{
        alert('Error in the Code');
      });
    };

  useEffect(() => {
    loadEmployeeDetail();
    loadProductDetail();
  }, []);
  
  return (
    <Router>
      <div style={{display:"flex"}}>
      <NavBar/>
      <div>
      <NavBar2/>
      <Routes>
        <Route path="/" element={<Dashboard record={record} deleteRecord={deleteRecord}/>}></Route>
        <Route path="/create" element={<Create products={products}/>}></Route>
      </Routes>
      </div>
      </div>
    </Router>
    
  );
}

export default App;
