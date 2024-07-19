import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";


const Certification = () => {

    const [Certicationform, setCerticationform] = useState([]);
    useEffect(() =>{
        loadCerticationform();
    },[]);

    const {id} = useParams();
    const loadCerticationform = async () =>{
        const result = await axios.get('localhost:8081/api/v1/register/id1');
        setCerticationform(result.data);
    }
    const deleteCerticationform= async (id) => {
        await axios.delete("localhost:8081/api/v1/register/id1")
        loadCerticationform();
    };
    
    return (
    <div>
      <h1>MY CURRICULUM VITAE (CV)</h1>
      <div>
         <h2>PERSONAL PARTICULARS/DETAILS</h2>
      </div>
      <ol>
        <li>First Name: {Certicationform.FirstName}</li>
        <li>Middle Name: {Certicationform.SecondName}</li>
        <li>Sur Name: {Certicationform.LastName}</li>
        <li>Nationality: {Certicationform.Nationality}</li>
        <li>Date Of Birth: {Certicationform.dob}</li>
        <li>Gender: {Certicationform.sex}</li>
        <li>address; {Certicationform.address}</li>
        <li>Email: {Certicationform.email}</li>
        <li>Password: {Certicationform.Password}</li>
      </ol>
      
      <div>
        <h2>EDUCATIONAL BACKGROUND</h2>
        <ul>
        <li>{Certicationform.PrimaryName}</li>
        <li>{Certicationform.PStartingYear}</li>
        <li>{Certicationform.SEndingYear}</li>
        </ul>
        <ul>
        <li>{Certicationform.SecondaryName}</li>
        <li>{Certicationform.SStartingYear}</li>
        <li>{Certicationform.SEndingYear}</li>
        </ul>
        <ul>
        <li>{Certicationform.InstituteName}</li>
        <li>{Certicationform.IStartingYear}</li>
        <li>{Certicationform.IEndingYear}</li>
        </ul><br/>
        
        <h2>WORK EXPERIENCE</h2>
        <ol>
        <li>{Certicationform.OrganisationName}</li>
        <li>{Certicationform.OStartingYear}</li>
        <li>{Certicationform.OEndingYear}</li>
        <li>{Certicationform.PositionName}</li>
        </ol>

        <h2>SKILLS</h2>
        <ul>
          <li>{Certicationform.Professionalskills}</li>
          </ul>

          <h2>HOBBIES</h2>
        <ul>
          <li>{Certicationform.Hobbies}</li>
          </ul>

          <h2>REFEREES</h2>
        <ul>
          <li>{Certicationform.Referencesdetails}</li>
        </ul>
        
      </div>
      <button onClick ={() =>deleteCerticationform(Certicationform.id)}>
        Delete
      </button>
    </div>

    
  );
};


export default Certification;