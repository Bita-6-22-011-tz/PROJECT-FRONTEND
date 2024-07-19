import React from "react";
import { Link } from "react-router-dom";

const Forgotpassword = () => {
  return (
    <div className="forgot-password">
      <div className="forgot-password-header">
        <h1>Forgot Password</h1>
      </div>
      <div className="forgot-password-form">
        <label>Email/Username:</label>
        <input type="email" placeholder="Enter your email or username" required />
        <br />
      </div>
      <div className="reset-password-form">
        <h2>Reset Password</h2>
        <label>New Password:</label>
        <input type="password" placeholder="Enter new password" required />
        <br />
        <label>Confirm Password:</label>
        <input type="password" placeholder="Confirm new password" required />
        <div>
          <Link to='/'>
            <button type="forgot">Reset Password</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Forgotpassword;