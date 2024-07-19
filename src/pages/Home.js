import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home1-container">
        <h1>Select who you are in the system as</h1>
        <div className="home1-card home1-user-card">
        <label className="home1-label">Users</label>
        <Link to="/Leducation">
          <button className="home1-button" type="Submit">Choose</button>
        </Link>
      </div>

      <div className="home1-card home1-admin-card">
        <label className="home1-label">Admin</label>
        <Link to="/Admin">
          <button className="home1-button" type="Submit">Choose</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;