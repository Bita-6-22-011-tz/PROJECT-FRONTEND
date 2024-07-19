import React from "react";
import { Link } from "react-router-dom";

const Login = () =>{
    return(
        <div>
            <h1>LOGIN TO YOUR CV CREATION ACCOUNT</h1>
    
        <div className="log1">
            <div className="form-1">
                <form action="">
                <h2>LOGIN HERE</h2>
                <div className="input-box">
                    <input type="text" placeholder="Enter Your Username" required/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Enter Your Password" required/>
                </div>
                <div className="rem-fog">
                    <label><input type="checkbox"/>Remember me? 
                    <Link to="/Forgotpassword">
                    <a href="Re-enter">Forgot Password?</a>
                    </Link>
                    </label>
                </div>
                
                <Link to="/dash">
                <div className="button1">
                <button type="Submit">Login</button>
                </div>
                </Link>

                

                <div className="register">
                    <span>Don't have an Account?</span>

                    <Link to="/register">
                         <a href="Register">Register Here</a>
                         </Link>
                </div>
                
                </form>
                
            </div>
          </div>
        </div>
    );
};

export default Login;
