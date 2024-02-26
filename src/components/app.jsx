import React from 'react'
import { useState } from 'react'
import Info from './info.jsx'
import Education from './education.jsx'
import Experience from './experience.jsx'
import Viewer from './viewer.jsx'
import Skills from './skills.jsx'
import '../styles/app.css'



export default function App()
{
   const [info,setInfo] = useState({name:'Vishal K',mail:'xyz@gmail.com',phnumber:'232322223232'});
   const [education,setEducation] = useState([{name:'IIITDM',milestone:'Bachelors degree',years:'2019-2024'}]);
   const [experience,setExperience] = useState([{name:'IIITDM',role:'student',years:'2019-2024'}]);
   const [skills,setSkills] = useState(['expert culinary']);

   function updateInfo(e) {
      setInfo({...info,[e.target.id]:e.target.value})
      console.log(info)
  }
  function handleAddEdu(e) {
   e.preventDefault()
   setEducation([...education,
       {
           name:e.target.name.value,
           milestone:e.target.milestone.value,
           years:e.target.years.value
       }])
   }
   function addSkills(e) {
    e.preventDefault()
    setSkills([...skills,e.target.skill.value])
   }
   function handleAddExp(e) {
    e.preventDefault()
    setExperience([...experience,
        {
            name:e.target.name.value,
            role:e.target.role.value,
            years:e.target.years.value
        }])
    }
    function editEdu() {
      setEducation(education.filter((element,index) => index !== education.length-1))
    }
    function editExp() {
      setExperience(experience.filter((element,index) => index !== experience.length-1))
    }
   function editSkills() {
    setSkills(skills.filter((element,index) => index !== skills.length-1))
   } 
   return (
      <>
      <div className='editor'>
        
        <Info onclick={updateInfo}/>
        <Education handleAdd={handleAddEdu} education={education} updateEdu={editEdu}/>
        <Skills handleSkill={addSkills} skills={skills} updateSkills={editSkills} />
        <Experience handleAdd={handleAddExp} experience={experience} updateExp={editExp} />
      </div>
      <div className='viewer'>
        <Viewer info={info} education={education} experience={experience} skills={skills}/>
      </div>
      </>
   ) 
}

