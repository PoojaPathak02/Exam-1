import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import Grocerie from './Component/Groceries';

function App() {
 
//  const[toggle,settoggle]=useState[""]
  return (
    <div className="App">
      
      <div className="header">
      <h1>Groceries</h1>
      <button > Get Groceries</button>
      </div>
     <Grocerie/>
    </div>
  );
}

export default App;
