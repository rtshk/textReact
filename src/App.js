
import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import About from './component/About';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light")
  const toggleMode = () => {
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "#6c757d"
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white"
    }
  }
  return (
    <>
    <BrowserRouter>
      <Navbar title = "TextME" about = "About Us" mode = {mode} toggleMode = {toggleMode}/>
        <Routes>
          <Route exact path='/' element={<Textform mode = {mode}/>}/> 
          {/* // Example-->  <Route path="/about" element={<About />}></Route>	 */}

          <Route exact path = "/about" element = {<About mode = {mode}/>} ></Route>
          
        </Routes>
    </BrowserRouter>
    
    
    </>
  );
}

export default App;
