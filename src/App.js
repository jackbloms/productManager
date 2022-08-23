// import logo from './logo.svg';
import React, {useState} from 'react'
import './App.css';
import Container from './components/Container';
import IndividualView from './Views/IndividualView'
import {Routes, Route} from 'react-router-dom'
// import Container2 from './components/Container2';
import UpdateForm2 from './components/UpdateForm2';
// import axios from 'axios';
// import Form from './components/Form';
// import Main from './Views/Main';


function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Container/>}/>
        <Route path="/products/:id" element={<IndividualView/>}/>
        <Route path="/products/edit/:id" element={<UpdateForm2/>}></Route>
        {/* <Route path="/products/delete/:id"></Route> */}
      </Routes>

    </div>
  );
}

export default App;
