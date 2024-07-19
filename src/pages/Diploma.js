import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Diploma = () => {
    const[PrimaryName, setPrimaryName] = useState("");
    const[PStartingYear, setPStartingYear] = useState("");
    const[PEndingYear, setPEndingYear] = useState("");
    const[SecondaryName, setSecondaryName] = useState("");
    const[SStartingYear,setSStartingYear] = useState("");
    const[SEndingYear, setSEndingYear] = useState("");
    const[InstuteName, setIstituteName] = useState("");
    const[IStaringYear, setIStaringYear] = useState("");
    const[IEndingYear, setIEndingYear]  = useState("");
    const[CCourseName, setCCourseName]  = useState("");
    const[DiplomaName, setDiplomaName]  = useState("");
    const[DStaringYear, setDStaringYear]  = useState("");
    const[DEndingYear, setDEndingYear]  = useState("");
    const[DCourseName, setDCourseName]  = useState("");


  
  
  
    const Diploma = {PrimaryName, PStartingYear,PEndingYear,SecondaryName,SStartingYear, SEndingYear, InstuteName, IStaringYear, IEndingYear,CCourseName,DiplomaName,DStaringYear,DEndingYear,DCourseName}
  
  
    const AddDiploma = async (e) =>{
        e.preventDefault();
        await axios.post("http://localhost:8081/api/v1/cvDetail/get",Diploma);
    };
    
    

  return (
    <div className="dipform">
      <fieldset>
        <h1>For Diploma level Enter your information clearly</h1>
        <form>
          <div>
            <h2>This Require Name Of Primary School And Duration</h2>
          </div>
          <div>
            <label for="Name">Primary School Name: </label>
            <input type="text" name="Primary Name"  placeholder="Enter the name of the primary school" required value={PrimaryName} onChange={(e)=>setPrimaryName(e.target.value)}/>
            <span class="error" id="nameError"></span>
          </div>
          <div>
            <label for="Name">Starting Year: </label>
            <input type="number" name="year"  placeholder="Enter starting year of the primary school" required value={PStartingYear} onChange={(e)=>setPStartingYear(e.target.value)}/>
            <span class="error" id="nameError"></span>
          </div>
          <div>
            <label for="Name">Ending Year: </label>
            <input type="number" name="year"  placeholder="Enter Ending year of the primary school" required value={PEndingYear} onChange={(e)=>setPEndingYear(e.target.value)}/>
            <span class="error" id="nameError"></span>
          </div>
          <div>
            <h2>This Require Name Of Secondary School And Duration </h2>
          </div>
          <div>
            <label for="Name">Secondary School Name: </label>
            <input type="text" name="Secondary Name"  placeholder="Enter the name of the Secondary school" required value={SecondaryName} onChange={(e)=>setSecondaryName(e.target.value)}/>
            <span class="error" id="nameError"></span>
          </div>
          <div>
            <label for="Name">Starting Year: </label>
            <input type="number" name="year" placeholder="Enter starting year of the Secondary school" required value={SStartingYear} onChange={(e)=>setSStartingYear(e.target.value)}/>
            <span class="error" id="nameError"></span>
          </div>
          <div>
            <label for="Name">Ending Year: </label>
            <input type="number" name="year"  placeholder="Enter Ending year of the Secondary school"required value={SEndingYear} onChange={(e)=>setSEndingYear(e.target.value)}/>
            <span class="error" id="nameError"></span>
          </div>
          <div>
            <h2>This Require Name Of Certificate Institution/Collage And Duration</h2>
          </div>
          <div>
            <label for="Name">Institution Name: </label>
            <input type="text" name="Institution Name" placeholder="Enter the name of the Collage school"required value={InstuteName} onChange={(e)=>setIstituteName(e.target.value)}/>
            <span class="error" id="nameError"></span>
          </div>
          <div>
            <label for="Name">Starting Year: </label>
            <input type="number" name="year"  placeholder="Enter starting year of the Collage school"required value={IStaringYear} onChange={(e)=>setIStaringYear(e.target.value)}/>
            <span class="error" id="nameError"></span>
          </div>
          <div>
            <label for="Name">Ending Year: </label>
            <input type="number" name="year"  placeholder="Enter Ending year of the Collage school"required value={IEndingYear} onChange={(e)=>setIEndingYear(e.target.value)}/>
            <span class="error" id="nameError"></span>
          </div>
          <div>
            <label for="Name">Course Name: </label>
            <input type="text" name="Primary Name"  placeholder="Enter the name of the Course Name " required value={CCourseName} onChange={(e)=>setCCourseName(e.target.value)}/>
            <span class="error" id="nameError"></span>
          </div>
          <div>
            <h2>This Require Name Of Diploma Institution/Collage And Duration</h2>

         <div>
        <label for="Name">Institution Name: </label>
        <input type="text" name="Institution Name"  placeholder="Enter the name of the Collage school" required value={DiplomaName} onChange={(e)=>setDiplomaName(e.target.value)}/>
        <span class="error" id="nameError"></span>
         </div>

         <div>
         <label for="Name">Starting Year: </label>
         <input type="number" name="start_year"  placeholder="Enter starting year of the Collage school" required value={DStaringYear} onChange={(e)=>setDStaringYear(e.target.value)}/>
         <span class="error" id="nameError"></span>
         </div>

        <div>
          <label for="Name">Ending Year: </label>
          <input type="number" name="end_year"  placeholder="Enter Ending year of the Collage school" required value={DEndingYear} onChange={(e)=>setDEndingYear(e.target.value)}/>
          <span class="error" id="nameError"></span>
        </div>

        <div>
            <label for="Name">Course Name: </label>
            <input type="text" name="course_name"  placeholder="Enter the name of the Course Name " required value={DCourseName} onChange={(e)=>setDCourseName(e.target.value)}/>
            <span class="error" id="nameError"></span>
            </div>
          <div>
          <button type="Submit"  onClick={AddDiploma}>Submit</button>
         <div>
            <Link to='/Skills'>
              <button type="Submit">Next</button>
            </Link>
            </div> 
          </div>
          </div>
        </form>   
      </fieldset>
    </div>
  );
};

export default Diploma;