import React from "react";
import { Link } from "react-router-dom";

const Leducation = () =>{
    return(
        <div className="ELEVEL">
             <h1>Please Select The Maximum Level Of Education You Have Reached</h1>
    <fieldset>
        <legend>Your Highest level Of Education Is:</legend>
           <div className="elevel1">
           <p>Certificate level of education</p>

           <Link to="/certificate">
             <button type="Submit">certificate</button>
            </Link>           
            
           </div>
           
           <div className="eleve1">
           <p>Deploma level of Education</p>
           <Link to="/Diploma">
             <button type="Submit">Diploma</button>
            </Link> 

            </div>
            
            <div className="elevel1">
            <p>Degree level of Education</p>
            <Link to="/Degree">
             <button type="Submit">Degree</button>
            </Link>
            </div>

        </fieldset>
        </div>
    )
}
export default Leducation;