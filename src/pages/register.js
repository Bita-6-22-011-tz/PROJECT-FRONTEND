import { Link } from "react-router-dom";
import { useState } from "react";


const Register = () =>{
    const[FirstName, setFirstName] = useState("");
    const[SecondName, setSecondName] = useState("");
    const[lastName, setlastName] = useState("");
    const[Nationality, setNationality] = useState("");
    const[dob,setdob] = useState("");
    const[Sex, setSex] = useState("");
    const[Address, setAddress] = useState("");
    const[Telephone, setTelephone] = useState("");
    const[Email, setEmail]  = useState("");
    const[Password, setPassword] = useState("");

    const Register = {FirstName,SecondName,lastName,Nationality,dob,Sex,Address,Telephone,Email,Password}

    const AddRegister = async (e) =>{
        e.preventDefault();
        fetch('http://localhost:8081/api/v1/register/get',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(Register),
        }).then(()=>{
            console.log("submited");
        });
    };


    return(
        <div className="register1">
            <div className="register2">
            <h1>WELCOME TO CV CREATION APP AND MAKE REGISTRATION TO GET AN ACCOUNT</h1>
            </div>
            <div className="register3">
                <div>
                <label>First Name:</label>
                <input type="text" placeholder="Enter your First Name" required value={FirstName} onChange={(e)=>setFirstName(e.target.value)}/>
                </div><div>
                <label>Second Name:</label>
                <input type="text" placeholder="Enter your Second Name" required value={SecondName} onChange={(e)=>setSecondName(e.target.value)}/>
                </div><div>
                <label>Last Name:</label>
                <input type="text" placeholder="Enter your lastName" required value={lastName} onChange={(e)=>setlastName(e.target.value)}/>
                </div><div>
                <label>Nationality:</label>
                <input type="text" placeholder="Enter your Nationality" required value={Nationality} onChange={(e)=>setNationality(e.target.value)}/>
                </div><div>
                <label>Date Of Birth:</label>
                <input type="text" placeholder="Enter your Date Of Birth" required value={dob} onChange={(e)=>setdob(e.target.value)}/>
                </div><div>
                <label>Sex:</label>
                <input type="text" placeholder="Enter your Sex" required value={Sex} onChange={(e)=>setSex(e.target.value)}/>
                </div>
                <div>
                <label>Address:</label>
                <input type="text" placeholder="Enter your Address" required value={Address} onChange={(e)=>setAddress(e.target.value)}/>
                </div>
                <div>
                <label>Telephone:</label>
                <input type="number" placeholder="Enter your Telephone" required value={Telephone} onChange={(e)=>setTelephone(e.target.value)}/>
                </div>
                <div>
                <label>Email/Username:</label>
                <input type="email" placeholder="Enter your Email/Username" required value={Email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div>
                <label>Password:</label>
                <input type="password" placeholder="Enter your Password" required value={Password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div>
                <label>Re-password:</label>
                <input type="password" placeholder="Enter your Re-password" required/>
                </div>
            </div>

            <div>
            <button type="Submit"  onClick={AddRegister} >submit</button> <br/>
            <br/>
            <Link to='/'>
            <button type="Submit" >Login</button>
            </Link>
            </div>
        
        </div>
    );
};
export default Register;