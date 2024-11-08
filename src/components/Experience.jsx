import { useState } from "react";

const ExperienceData = () => {
    const [experienceList , setExperienceList] = useState([]);
    const [isEditing , setIsEditing] = useState();

    const handleInputChange = (index ,event) => {
        const {name ,value} = event.target;
        const updateExperienceList = experienceList.map((exp ,i) =>
        i === index ? {...exp, [name] : value} : exp);
        setExperienceList(updateExperienceList);
    };

    const handleAddExperience = () => {
        setExperienceList([
            ...experienceList,
            {
                company:'',position:'',startDate:'',endDate:'',
            },
        ]);
        setIsEditing(experienceList.length);
    };

    const handleEdit = (index) => {
        setIsEditing(index);
    };

    const handleSave = (index) => {
        setIsEditing(null);
    };

    const handleDelete = (index) => {
        const updateExperienceList = experienceList.filter((_, i) => i !== index);
        setExperienceList(updateExperienceList);
    };

    return(
        <div className="exp">
            <h2>Experience Details</h2>
            <button type="button" onClick={handleAddExperience}>Add Experience</button>
            {experienceList.map((exp, index) => (
                <div key={index} style={{marginTop: '20px'}}>
                    <form>
                        <div>
                            <label>Company :</label>
                            {isEditing === index ? (
                                <input type="text"
                                name="company"
                                value={exp.company}
                                onChange={(event) => handleInputChange(index , event)}
                                />
                            ):(
                                <span>{exp.company}</span>
                            )}
                        </div>
                        <div>
                            <label>Position :</label>
                            {isEditing === index ? (
                                <input type="text"
                                name="position"
                                value={exp.position}
                                onChange={(event) => handleInputChange(index , event)}
                                />
                            ):(
                                <span>{exp.position}</span>
                            )}
                        </div>
                        <div>
                            <label>Start Date :</label>
                            {isEditing === index ? (
                                <input type="month"
                                name="startDate"
                                value={exp.startDate}
                                onChange={(event) => handleInputChange(index , event)}
                                />
                            ):(
                                <span>{exp.startDate}</span>
                            )}
                        </div>
                        <div>
                            <label>End Date:</label>
                            {isEditing === index ? (
                                <input type="month"
                                name="endDate"
                                value={exp.endDate}
                                onChange={(event) => handleInputChange(index , event)}
                                />
                            ):(
                                <span>{exp.endDate}</span>
                            )}
                        </div>
                        {isEditing === index ? (
                            <button type="button" onClick={() => handleSave(index)}>Save</button>
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
export default ExperienceData;