import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () =>{
    return(
        <div className="form"> 
        <div class="main">
        <div class="navbar">
            <div class="icon">
                <h1 class="logo">CvCreat </h1>
            </div>

            <div class="menu">
                <ul>
                    <li><a href="Home">HOME</a></li>
                    <li><a href="Help">HELP</a></li>
                    <li><a href="About">ABOUT</a></li>
                    <li><a href="Contact">CONTACT</a></li>
                    <li> <Link to="/">
                         <a href="/">LOGOUT</a>
                         </Link>
                    </li>
                </ul>
            </div>
        </div>
        
    </div>
    <header>
    <marquee behavior="top" direction="left">WELCOME TO CURRICULUM VITAE CREATION WEBSITE</marquee>
</header> 
    <h2>ATTRACTIVE CURRICULUM VITAE CREATION</h2>
    <div class="VITAE">
        FOR MORE AND BEAUTIFUL CVs<div> WERE THE BEST IN TOWN</div>
    </div>
    <div>
    <p1>don't deal with others they are just copying for us</p1></div>
    <p2>FOR GREAT JOB ACCEPTANCEJOIN US </p2> 

    
    <div>
       <h3> FOR MORE AND SUITABLE CVs CREATIONS IN THE WORLD</h3>
        </div>
        

        <Link to="/Leducation">
        <a href="start">START CREATING</a>
        </Link>
    
    </div>

    


    );
    };

export default Dashboard;
