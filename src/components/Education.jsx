import { useState } from "react";

const EducationData =() => {
  const [isEditing , setIsEditing] = useState();
  const [educationList , setEducationList] = useState([]);

  const handleInputChange = (index , event) => {
    const {name , value} = event.target;
    const updateEducationList = educationList.map((edu, i) =>
    i === index ? {...edu, [name]: value } : edu);
    setEducationList(updateEducationList);
  };

  const handleAddEducation = () => {
    setEducationList([...educationList, {
      degree :'',
      institution : '',
      yearjoin : '',
      yearcomplete: '',
    }]);
    setIsEditing(educationList.length);
  };

  const handleEdit = (index) => {
    setIsEditing(index);
  };

  const handleSave = (index) => {
    setIsEditing(null);
  };

  const handleDelete = (index) => {
    const updateEducationList = educationList.filter((_, i) => i !== index);
    setEducationList(updateEducationList);
  };

  return (
    <div className="edu">
      <h2>Education Details</h2>
      <button type="button" onClick={handleAddEducation}>Add Education</button>
      {educationList.map((edu ,index) => (
        <div key={index} style={{marginTop : '20px'}}>
          <form>
            <div>
              <label>Degree :</label>
              {isEditing === index ? (
                <input type="text"
                name="degree"
                value={edu.degree}
                onChange={(event) => handleInputChange(index , event)}
                />
              ):(
                <span>{edu.degree}</span>
              )}
            </div>
            <div>
              <label>Institution :</label>
              {isEditing === index ? (
                <input type="text"
                name="institution"
                value={edu.institution}
                onChange={(event) => handleInputChange(index , event)}
                />
              ):(
                <span>{edu.institution}</span>
              )}
            </div>
            <div>
              <label>Join Year :</label>
              {isEditing === index ? (
                <input type="month"
                name="yearjoin"
                value={edu.yeatjoin}
                onChange={(event) => handleInputChange(index , event)}
                />
              ):(
                <span>{edu.yearjoin}</span>
              )}
            </div>
            <div>
              <label>Year Complete :</label>
              {isEditing === index ? (
                <input type="month"
                name="yearcomplete"
                value={edu.yearcomplete}
                onChange={(event) => handleInputChange(index , event)}
                />
              ):(
                <span>{edu.yearcomplete}</span>
              )}
            </div>
            {isEditing === index ? (
              <button type="button"  onClick={() => handleSave(index)}>Save</button>
            ):(
              <button type="button" onClick={() => handleEdit(index)}>Edit</button>
            )}
            <button type="button" onClick={() => handleDelete(index)}>Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
};
export default EducationData;