import React from 'react';
import './App.module.scss';
import Header from "components/Header";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Header />
      
      </BrowserRouter>
    </div>
  );
}

export default App;
