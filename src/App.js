import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import Picture from "./components/Picture";
import PictureData from "./components/PictureData";





function App() {

  
  
  // Fetching Data
//

  

 
  return (
    <div className="App">

      <h1>NASA Photo Of The Day 🚀 </h1>
      <Picture/>

    </div>
  );


}

export default App;
