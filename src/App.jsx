import { useState } from 'react'
import './App.css'
import PersonalData from './components/Personal'
import EducationData from './components/education'
import ExperienceData from './components/Experience'
import DisplayCv from './components/DisplayCV'

function App() {
  const [personalDetails, setPersonalDetails] = useState({
    name: '',
    email: '',
    mobile: '',
    dob:'',
    address:''
  });

  const [educationList, setEducationList] = useState([]);
  const [experienceList, setExperienceList] = useState([]);

  return (
    <div className="App">
      <h1>CV Maker</h1>
      <PersonalData
        personalDetails={personalDetails}
        setPersonalDetails={setPersonalDetails}
      />
      <EducationData 
        educationList={educationList}
        setEducationList={setEducationList}
      />
      <ExperienceData 
        experienceList={experienceList}
        setExperienceList={setExperienceList}
      />
      <div className='cv-form'>
      <DisplayCv
      personalDetails={personalDetails}
      educationList={educationList} 
      experienceList={experienceList}
      />
      </div>
    </div>
  );
}

export default App
