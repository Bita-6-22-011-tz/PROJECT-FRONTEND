import { Axios } from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Work = () => {

  const[OrganisationName, setOrganisationName] = useState("");
  const[StartingYear, setStartingYear] = useState("");
  const[EndingYear, setEndingYear] = useState("");
  const[PositionName, setPositionName] = useState("");
     

  const Work = {OrganisationName,StartingYear,EndingYear,PositionName}


  const AddWork = async (e) =>{
      e.preventDefault();
      await Axios.post('localhost:8081/api/api/cvwork/register/get',Work);
  };
  
  return (
    <div className="work1">
      <fieldset>
        <h1>For WORK EXPERIENCE Enter your information clearly</h1>
        <form action="myForm" onsubmit="return validateForm()">
          <h2>This Require First Name Of Organization And Duration</h2>

          <div>
            <label for="Name">Organisation Name: </label>
            <input type="text" name="Organisation Name" placeholder="Enter the name of the Organisation" required value={OrganisationName} onChange={(e)=>setOrganisationName(e.target.value)}/>
            <span class="error" id="nameError"></span>
          </div>

          <div>
            <label for="Name">Starting Year: </label>
            <input type="number" name="start_year" placeholder="Enter starting year of the Organisation" required value={StartingYear} onChange={(e)=>setStartingYear(e.target.value)}/>
            <span class="error" id="nameError"></span>
          </div>

          <div>
            <label for="Name">Ending Year: </label>
            <input type="number" name="end_year" placeholder="Enter Ending year of the primary school" required value={EndingYear} onChange={(e)=>setEndingYear(e.target.value)} />
            <span class="error" id="nameError"></span>
          </div>

          <div>
            <label for="Name">Position Name: </label>
            <input type="text" name="position_Name" placeholder="Enter your position" required value={PositionName} onChange={(e)=>setPositionName(e.target.value)} />
            <span class="error" id="nameError"></span>
          </div>

          <h2>This Require Second Name Of Organization And Duration </h2>

          <div>
            <label for="Name">Organisation Name: </label>
            <input type="text" name="Organisation_Name_2" placeholder="Enter the name of the Organisation school" required value={OrganisationName} onChange={(e)=>setOrganisationName(e.target.value)}/>
            <span class="error" id="nameError"></span>
          </div>

          <div>
            <label for="Name">Starting Year: </label>
            <input type="number" name="start_year_2" placeholder="Enter starting year of the Organisation" required value={StartingYear} onChange={(e)=>setStartingYear(e.target.value)} />
            <span class="error" id="nameError"></span>
          </div>

          <div>
            <label for="Name">Ending Year: </label>
            <input type="number" name="end_year_2" placeholder="Enter Ending year of the Organisation" required value={EndingYear} onChange={(e)=>setEndingYear(e.target.value)} />
            <span class="error" id="nameError"></span>
          </div>

          <div>
            <label for="Name">Position Name: </label>
            <input type="text" name="position_Name_2" placeholder="Enter your position" required value={PositionName} onChange={(e)=>setPositionName(e.target.value)} />
            <span class="error" id="nameError"></span>
          </div>
          <button onClick={AddWork}>submit</button> <br/>
          <br/>
          <Link to="/Hobbies">
            <button >next</button>
          </Link>

        </form>
      </fieldset>
    </div>
  );
};

export default Work;