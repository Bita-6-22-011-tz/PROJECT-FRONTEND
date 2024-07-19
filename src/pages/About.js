import React from 'react';
import { Link } from "react-router-dom";


const About = () => {
  return (
    <div className="about-container">
      <div className='heading'>
      <h1>About Us</h1>
      </div>
      <div className='paraA'>
      <p>Welcome to CV Creation, your premier resource for creating exceptional curriculum vitae (CVs) that help you stand out in a competitive job market. Our mission is to empower educated individuals like you to showcase their skills, experience, and achievements in a clear, concise, and compelling manner.</p>
      </div>
      <div className='heading'>
      <h2>Our Story</h2>
      </div>
      <div className='paraA'>
      <p>We understand the importance of a well-crafted CV in today's fast-paced job market. That's why we're dedicated to providing you with the tools, expertise, and guidance you need to create a CV that truly represents your professional brand. Our team of experts has years of experience in CV creation, and we're passionate about helping you achieve your career goals.</p>
      </div>
      <div className='heading'>
      <h2>What Sets Us Apart</h2>
      </div>
      <ul>
        <li><strong>Personalized attention</strong>: We take the time to understand your career aspirations, skills, and experience to craft a CV that truly reflects your professional brand.</li>
        <li><strong>Expert knowledge</strong>: Our team of experts stays up-to-date with the latest CV trends, best practices, and industry requirements to ensure your CV meets the highest standards.</li>
        <li><strong>Customized solutions</strong>: We offer a range of CV creation services to cater to your specific needs, from entry-level to executive-level professionals.</li>
      </ul>
      <div className='heading'>
      <h2>Our Goal</h2>
      </div>
      <div className='paraA'>
      <p>Our goal is simple: to help you create a CV that opens doors to new opportunities, increases your visibility, and accelerates your career growth. We're dedicated to providing you with the best possible CV creation experience, and we're confident that our expertise will help you achieve your career aspirations.</p>
      </div>
        <button className="get-started-btn"><Link to="/Leducation">
        <a href="Leducation">Get Started</a>
        </Link>
    </button>
    
    </div>
  );
};

export default About;