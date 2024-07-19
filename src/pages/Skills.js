import { Axios } from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const   Skills = () =>{
    
   const[Skills, setSkills] = useState("");

  
   const skills = {Skills}
 
 
   const AddSkills = async (e) =>{
       e.preventDefault();
       await Axios.post('localhost:8081/api/api/cvwork/register/get',skills);
   };
   
    return(
        <div className="skills1">
            <fieldset>
    <h1>For professional Skills Enter your information clearly</h1>
    <form action="myForm" onsubmit="return validateForm()">
        <h2>You can write skills that you have</h2>
        <div class="text1">
        <label for="Name">PROFESSIONAL SKILLS: </label>
        <textarea name="textarea1" id="text1" cols="30" rows="10" placeholder="Enter Your Skills" value={Skills} onChange={(e)=>setSkills(e.target.value)}/>
        </div>
        <button onClick={AddSkills}>submit</button>

        <Link to="/work">
        <button>next</button>
        </Link>
        </form>
        </fieldset>
        </div>

    )
}
export default Skills;