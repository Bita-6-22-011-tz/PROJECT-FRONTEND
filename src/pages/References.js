import { Axios } from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const References = () => {

   const[References, setReferences] = useState("");
    
  
  
    const references = {References}
  
  
    const AddReferences= async (e) =>{
        e.preventDefault();
        await Axios.post('localhost:8081/api/api/cvwork/register/get',references);
    };
    
    
  
    return(
        <div className="ref">
            <fieldset>
            <legend>Referees</legend>
            <h1>You Should Enter Referees Details</h1>
            <form action="myForm" onsubmit="return validateForm()">
                <div class="text3">
                <label for="Name">References details: </label>
                <textarea name="textarea1" id="text3" cols="30" rows="10" placeholder="Enter Your Your Referees Details Vertically"  value={References} onChange={(e)=>setReferences(e.target.value)}></textarea>
        
                </div>
                <button type="Submit" onClick={AddReferences}>Submit</button><br/>
                <br/>
                <Link to="/Certification">
              <button type="Submit">result</button>
            </Link>
                
            </form>
         </fieldset>
        </div>
    )
}

export default References;
