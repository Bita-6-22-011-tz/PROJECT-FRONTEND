import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Certificate = () => {
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



  const certificate = {PrimaryName, PStartingYear,PEndingYear,SecondaryName,SStartingYear, SEndingYear, InstuteName, IStaringYear, IEndingYear,CCourseName}


  const Addcertificate = async (e) =>{
      e.preventDefault();
      await axios.post('localhost:8081/api/v1/cvDetail/get',certificate);
  };
  
  return (
    <div className="certificate-container">
      <fieldset className="certificate-fieldset">
        <h1 className="certificate-title">For Certificate level Enter your information clearly</h1>
        <form className="certificate-form">
          <div className="primary-school-section">
            <h2 className="section-title">This Require Name Of Primary School And Duration</h2>
            <div className="input-group">
              <label className="input-label" for="primary-school-name">Primary School Name: </label>
              <input className="input-field" type="text" name="primary-school-name"  placeholder="Enter the name of the primary school" required value={PrimaryName} onChange={(e)=>setPrimaryName(e.target.value)}/>
              <span className="error-message" id="primary-school-name-error"></span>
            </div>
            <div className="input-group">
              <label className="input-label" for="primary-school-start-year">Starting Year: </label>
              <input className="input-field" type="number" name="primary-school-start-year"  placeholder="Enter starting year of the primary school" required value={PStartingYear} onChange={(e)=>setPStartingYear(e.target.value)}/>
              <span className="error-message" id="primary-school-start-year-error"></span>
            </div>
            <div className="input-group">
              <label className="input-label" for="primary-school-end-year">Ending Year: </label>
              <input className="input-field" type="number" name="primary-school-end-year"  placeholder="Enter Ending year of the primary school" required value={PEndingYear} onChange={(e)=>setPEndingYear(e.target.value)} />
              <span className="error-message" id="primary-school-end-year-error"></span>
            </div>
          </div>
          <div className="secondary-school-section">
            <h2 className="section-title">This Require Name Of Secondary School And Duration </h2>
            <div className="input-group">
              <label className="input-label" for="secondary-school-name">Secondary School Name: </label>
              <input className="input-field" type="text" name="secondary-school-name"  placeholder="Enter the name of the Secondary school" required value={SecondaryName} onChange={(e)=>setSecondaryName(e.target.value)}/>
              <span className="error-message" id="secondary-school-name-error"></span>
            </div>
            <div className="input-group">
              <label className="input-label" for="secondary-school-start-year">Starting Year: </label>
              <input className="input-field" type="number" name="secondary-school-start-year"  placeholder="Enter starting year of the Secondary school" required value={SStartingYear} onChange={(e)=>setSStartingYear(e.target.value)}/>
              <span className="error-message" id="secondary-school-start-year-error"></span>
            </div>
            <div className="input-group">
              <label className="input-label" for="secondary-school-end-year">Ending Year: </label>
              <input className="input-field" type="number" name="secondary-school-end-year"  placeholder="Enter Ending year of the Secondary school" required value={SEndingYear} onChange={(e)=>setSEndingYear(e.target.value)}/>
              <span className="error-message" id="secondary-school-end-year-error"></span>
            </div>
          </div>
          <div className="institution-section">
            <h2 className="section-title">This Require Name Of Certificate Institution/Collage And Duration</h2>
            <div className="input-group">
              <label className="input-label" for="institution-name">Institution Name: </label>
              <input className="input-field" type="text" name="institution-name"  placeholder="Enter the name of the Collage school" required value={InstuteName} onChange={(e)=>setIstituteName(e.target.value)}/>
              <span className="error-message" id="institution-name-error"></span>
            </div>
            <div className="input-group">
              <label className="input-label" for="institution-start-year">Starting Year: </label>
              <input className="input-field" type="number" name="institution-start-year"  placeholder="Enter starting year of the Collage school" required value={IStaringYear} onChange={(e)=>setIStaringYear(e.target.value)}/>
              <span className="error-message" id="institution-start-year-error"></span>
            </div>
            <div className="input-group">
              <label className="input-label" for="institution-end-year">Ending Year: </label>
              <input className="input-field" type="number" name="institution-end-year"  placeholder="Enter Ending year of the Collage school" required value={IEndingYear} onChange={(e)=>setIEndingYear(e.target.value)}/>
              <span className="error-message" id="institution-end-year-error"></span>
            </div>
            <div className="input-group">
              <label className="input-label" for="course-name">Course Name: </label>
              <input className="input-field" type="text" name="course-name"  placeholder="Enter the name of the Course Name " required value={CCourseName} onChange={(e)=>setCCourseName(e.target.value)}/>
              <span className="error-message" id="course-name-error"></span>
            </div>
          </div>
          <div className="button-group">
          <button className="next-button" type="Submit" onClick={Addcertificate}>submit</button><br/>
            <br/>
            <Link to='/Skills'>
              <button className="next-button" type="Submit" >Next</button>
            </Link>
          </div>
        </form>
      </fieldset>
    </div>
  );
};

export default Certificate;