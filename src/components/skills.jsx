import { useState } from 'react';
import '../styles/skills.css'


export default function Skills({ handleSkill, skills, updateSkills }) {
    const [skill,setSkill] = useState('')
    function handleEdit() {
        setSkill(skills[skills.length-1])
        updateSkills()
    }
    return (
    <div className="skills">
        <h1>Skills</h1>
        <form id='ski' onSubmit={handleSkill}>
          <input id='skill' value={skill} required/>
          <button>Add</button>
          <button type='button' onClick={handleEdit}>Edit</button>
        </form>
    </div>
    );

}