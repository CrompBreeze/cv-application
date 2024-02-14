import { useState } from 'react';
import '../styles/skills.css'


export default function Skills({ handleSkill, skills, updateSkills }) {
    const [skill,setSkill] = useState('')
    const [isOpen,setIsOpen] = useState(false);
    function handleClick()
    {
        setIsOpen(!isOpen)
    }
    function handleEdit() {
        setSkill(skills[skills.length-1])
        updateSkills()
    }
    return (
    <div className="skills">
        <p onClick={handleClick}>Skills</p>
        {isOpen && 
        <form id='ski' onSubmit={handleSkill}>
          <input id='skill' value={skill} required/>
          <div style={{display:'flex',gap: '10px', marginTop:'10px'}}>
          <button>Add</button>
          <button type='button' onClick={handleEdit}>Edit</button>
          </div>
        </form>
        } 
    </div>
    );

}