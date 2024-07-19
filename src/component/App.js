import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import "./Login.css";
import "./Dashboard.css";
import "./Dashboard.css";
import Login from "../pages/Login";
import About from "../pages/About";
import Certificate from "../pages/Certificate";
import Contact from "../pages/Contact";
import CreateNewPassword from "../pages/CreateNewPassword";
import Dashboard from "../pages/Dashboard";
import Degree from "../pages/Degree";
import Diploma from "../pages/Diploma";
import ForgotPassword from "../pages/Forgotpassword";
import Help from "../pages/Help";
import Hobbies from "../pages/Hobbies";
import Home from "../pages/Home";
import Leducation from "../pages/Leducation";
import Register from "../pages/register";
import References from "../pages/References";
import Skills from "../pages/Skills";
import Work from "../pages/Work";
import Admin from "../pages/Admin";
import Certification from "../pages/Certification";



function App (){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/> 
            <Route path="/About" element={<About/>}/> 
            <Route path="/Certificate" element={<Certificate/>}/> 
            <Route path="/Contact" element={<Contact/>}/> 
            <Route path="/CreateNewPassword" element={<CreateNewPassword/>}/> 
            <Route path="/Dash" element={<Dashboard/>}/> 
            <Route path="/Degree" element={<Degree/>}/> 
            <Route path="/Diploma" element={<Diploma/>}/> 
            <Route path="/ForgotPassword" element={<ForgotPassword/>}/> 
            <Route path="/Help" element={<Help/>}/> 
            <Route path="/Hobbies" element={<Hobbies/>}/> 
            <Route path="/Home" element={<Home/>}/> 
            <Route path="/Leducation" element={<Leducation/>}/> 
            <Route path="/Register" element={<Register/>}/> 
            <Route path="/References" element={<References/>}/> 
            <Route path="/Skills" element={<Skills/>}/> 
            <Route path="/Work" element={<Work/>}/>  
            <Route path="/Admin" element={<Admin/>}/>    
            <Route path="/Certification" element={<Certification/>} />          
        </Routes>
        </BrowserRouter>
    )

}
export default App;