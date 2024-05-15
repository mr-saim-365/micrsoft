import React from "react";
import Navbar from "./Navbar";
import Links from "./Links";
import Home from "./Home";
import { BrowserRouter, Routes , Route } from "react-router-dom";



const App = () => {
    return (
        <>
           <BrowserRouter>
            <Navbar/>
             <Routes>
                <Route path="/" element = {<Home/>} />
             </Routes>         
            <Links/>      
           </BrowserRouter>
         
        </>
    )

}

export default App;