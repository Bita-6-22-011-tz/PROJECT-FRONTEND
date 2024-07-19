import { Axios } from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Degree = () =>{
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
    const[UniversityName, setUniversityName]  = useState("");
    const[UStaringYear, setUStaringYear]  = useState("");
    const[UEndingYear, setUEndingYear]  = useState("");
    const[UCourseName, setUCourseName]  = useState("");
  
  
  
    const Degree = {PrimaryName, PStartingYear,PEndingYear,SecondaryName,SStartingYear, SEndingYear, InstuteName, IStaringYear, IEndingYear,CCourseName,DiplomaName,DStaringYear,DEndingYear,DCourseName,UniversityName,UStaringYear,UEndingYear,UCourseName}
  
  
    const AddDegree = async (e) =>{
        e.preventDefault();
        await Axios.post('localhost:8081/api/v1/cvDetail/get',Degree);
    };
    
   
    return(
        <div className="digform">
            <fieldset>
        <h1>For Degree level Enter your information clearly</h1>
        <form>
          <div>
            <h2>This Require Name Of Primary School And Duration</h2>
          </div>
          <div>
            <label for="Name">Primary School Name: </label>
            <input type="text" name="Primary Name"  placeholder="Enter the name of the primary school" required  value={PrimaryName} onChange={(e)=>setPrimaryName(e.target.value)}/>
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
            <input type="text" name="Secondary Name"  placeholder="Enter the name of the Secondary school" requiredvalue={SecondaryName} onChange={(e)=>setSecondaryName(e.target.value)}/>
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
          <input type="number" name="end_year"  placeholder="Enter Ending year of the Collage school" required  value={DEndingYear} onChange={(e)=>setDEndingYear(e.target.value)}/>
          <span class="error" id="nameError"></span>
        </div>

        <div>
            <label for="Name">Course Name: </label>
            <input type="text" name="course_name"  placeholder="Enter the name of the Course Name " required value={DCourseName} onChange={(e)=>setDCourseName(e.target.value)}/>
            <span class="error" id="nameError"></span>
        </div>

          <div>

    <h2>This Require Name Of University And Duration</h2>
    </div>

        <div>
            <label for="Name">University Name: </label>
            <input type="text" name="University Name"  placeholder="Enter the name of the University name" required value={UniversityName} onChange={(e)=>setUniversityName(e.target.value)}/>
            <span class="error" id="nameError"></span>
        </div>

        <div>
            <label for="Name">Starting Year: </label>
            <input type="number" name="start_year" placeholder="Enter starting year of the University school" required value={UStaringYear} onChange={(e)=>setUStaringYear(e.target.value)}/>
            <span class="error" id="nameError"></span>
        </div>

        <div>
            <label for="Name">Ending Year: </label>
            <input type="number" name="end_year" placeholder="Enter Ending year of the University school" required value={UEndingYear} onChange={(e)=>setUEndingYear(e.target.value)}/>
            <span class="error" id="nameError"></span>
        </div>

        <div>
            <label for="Name">Course Name: </label>
            <input type="text" name="course_name"  placeholder="Enter the Course Name " required value={UCourseName} onChange={(e)=>setUCourseName(e.target.value)}/>
            <span class="error" id="nameError"></span>
        </div>
    <Link to='/skills'>
        <button type="Submit"onClick={AddDegree}>Next</button>
        </Link>

    </form>
    
    </fieldset>
        </div>
     )
    }
export default Degree;