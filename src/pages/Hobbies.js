import { Axios } from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Hobbies = () => {

   const[Hobbies, setHobbies] = useState("");
    
  
  
    const hobbies = {Hobbies}
  
  
    const AddHobbies = async (e) =>{
        e.preventDefault();
        await Axios.post('localhost:8081/api/api/cvwork/register/get',hobbies);
    };
    
    
  
  return (

    <div className="Hobbies1">
      <fieldset>
        <h1>For Hobbies & Interest Enter your information clearly</h1>
        <form action="myForm" onsubmit="return validateForm()">
          <h2>You can write Hobbies & Interest that you like</h2>
          <div class="text2">
            <label for="Name">Hobbies & Interest: </label>
            <textarea name="textarea1" id="text2" cols="30" rows="10" placeholder="Enter Your Hobbies & Interest" value={Hobbies} onChange={(e)=>setHobbies(e.target.value)}/>
          </div>

          <div>
          <button type="Submit" onClick={AddHobbies}>submit</button><br/>
          <br/>
            <Link to="/ReferenceS">
            <button type="Submit" >Next</button>
            </Link>
          </div>
        </form>
      </fieldset>
    </div>
  );
};

export default Hobbies;