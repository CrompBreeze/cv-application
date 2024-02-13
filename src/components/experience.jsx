import { useState } from 'react';
import '../styles/experience.css'

function Experience({ handleAdd, updateExp, experience })
{
    const [name,setName] = useState('');
    const [role,setRole] = useState('');
    const [years,setYears] = useState('');
    function handleEdit() {
        const last = experience.length-1;
        setName(experience[last].name)
        setRole(experience[last].role)
        setYears(experience[last].years)
        updateExp()
    }
    return (
        <div className="experience">
            <h1>Experience</h1>
            <form id='exp' onSubmit={handleAdd}>
                <label htmlFor="name">Company Name</label>
                <input id='name' value={name} onChange={(e) => setName(e.target.value)} required/>
                <label htmlFor="role">Role</label>
                <input id='role' value={role} onChange={(e) => setRole(e.target.value)} required/>
                <label htmlFor="years">Years</label>
                <input id='years' value={years} onChange={(e) => setYears(e.target.value)} required/>
                <button>Add</button>
                <button type='button' onClick={handleEdit}>Edit</button>
            </form>
        </div>
    );

}

export default Experience