import { useState } from "react";

const PersonalData = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [personalDetails, setPersonalDetails] = useState({
        name: '',
        dob: '',
        email: '',
        mobile: '',
        address: '',
    });

    const handelChange = (e) => {
        const {name, value} = e.target;
        setPersonalDetails({...personalDetails,[name]:value});
    }

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    const handelSave = () => {
        console.log('Save details :',personalDetails);
        setIsEditing(false);
    };

    return (
      <>
      <div className="person">
        <h2>Personal Details</h2>
        <form>
            <div>
                <label>Name :</label>
                {isEditing ?(
                    <input type="text"
                    name="name"
                    value={personalDetails.name}
                    onChange={handelChange}
                    />
                ):(
                    <span>{personalDetails.name}</span>
                )}
            </div>
            <div>
                <label>D o B :</label>
                {isEditing ?(
                    <input type="date"
                    name="dob"
                    value={personalDetails.dob}
                    onChange={handelChange}
                    />
                ):(
                    <span>{personalDetails.dob}</span>
                )}
            </div>
            <div>
                <label>Email :</label>
                {isEditing ?(
                    <input type="email"
                    name="email"
                    value={personalDetails.email}
                    onChange={handelChange}
                    />
                ):(
                    <span>{personalDetails.email}</span>
                )}
            </div>
            <div>
                <label>Mobile :</label>
                {isEditing ?(
                    <input type="tel"
                    name="mobile"
                    value={personalDetails.mobile}
                    onChange={handelChange}
                    />
                ):(
                    <span>{personalDetails.mobile}</span>
                )}
            </div>
            <div>
                <label>Address :</label>
                {isEditing ?(
                    <input type="text"
                    name="address"
                    value={personalDetails.address}
                    onChange={handelChange}
                    />
                ):(
                    <span>{personalDetails.address}</span>
                )}
            </div>
            <button type="button" onClick={toggleEdit}>
                {isEditing ? 'Cancel' : 'Edit'}
            </button>
            {isEditing && (
                <button type="button" onClick={handelSave}>
                Save
                </button>
            )}
        </form>
      </div>
      </>  
    );
};
export default PersonalData;