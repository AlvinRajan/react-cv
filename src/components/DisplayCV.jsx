import React from 'react';

const DisplayCV = ({ personalDetails, educationList, experienceList }) => {
  return (
    <div className="preview">
      <h2>CV Preview</h2>
      
      <h3>Personal Details</h3>
      <p>Name: {personalDetails.name}</p>
      <p>Email: {personalDetails.email}</p>
      <p>Phone: {personalDetails.phone}</p>
      <p>Date of Birth: {personalDetails.dob}</p>
      <p>Address: {personalDetails.address}</p>

      <h3>Education</h3>
      {educationList.map((edu, index) => (
        <div key={index}>
          <p>Degree: {edu.degree}</p>
          <p>Institution: {edu.institution}</p>
          <p>Join Year: {edu.yearJoin}</p>
          <p>End Year: {edu.yearComplete}</p>
        </div>
      ))}

      <h3>Experience</h3>
      {experienceList.map((exp, index) => (
        <div key={index}>
          <p>Company: {exp.company}</p>
          <p>Position: {exp.position}</p>
          <p>Start Date: {exp.startDate}</p>
          <p>End Date: {exp.endDate}</p>
        </div>
      ))}
    </div>
  );
};

export default DisplayCV;