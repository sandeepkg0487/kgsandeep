import React from "react";
import './education.scss';

const Education = () => {
  return (
    <div className="main-container">
      <div className="left-container">
        <div className="education-img-container">
           <img className="Education-img" src="./image/education.jpg" alt="education" />
        </div>
       
      </div>
      <div className="right-container">
        <h1>B.Tech in CSE</h1>
        <h3> Sahrdaya College of Engineering and Technology, Thrissur</h3>
        <h4>2018 </h4>
      </div>
    </div>
  );
};

export default Education;
