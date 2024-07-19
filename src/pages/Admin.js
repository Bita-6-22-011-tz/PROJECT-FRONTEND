import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";


const Admin = () => {

    const [Registerinfo, setRegisterinfo] = useState([]);
    useEffect(() =>{
        loadRegisterinfo();
    },[]);

    const {id} = useParams();
    const loadRegisterinfo = async () =>{
        const result = await axios.get('localhost:8080/api/v1/register/id1');
        setRegisterinfo(result.data);
    }
    const deleteRegisterinfo = async (id) => {
        await axios.delete("localhost:8080/api/v1/register/id1")
        loadRegisterinfo();
    };
    
  return (
    <div>
      <div className='admin1'id="second1">
        <table className='tableAdmin'>
          <thead>
            <tr>
              <td scope="col">Id</td>
              <td scope="col">Name</td>
              <td scope="col">Email</td>
              <td scope="col">Nationality</td>
            </tr>
          </thead>
          <tbody>
            {Registerinfo.map((Registerinfo,index) =>(
              <tr key={Registerinfo.id}>
              <th scope="row">
                {index + 1}
                </th>
                <td>{Registerinfo.FirstName}</td>
                <td>{Registerinfo.email}</td>
                <td>{Registerinfo.Nationality}</td>

                <td>
                  <button
                    onClick ={() =>deleteRegisterinfo(Registerinfo.id)}>
                      Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Admin;