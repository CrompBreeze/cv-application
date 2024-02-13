import { useState } from 'react';
import '../styles/education.css'

export default function Education({ handleAdd, education, updateEdu })
{
    const [name,setName] = useState('');
    const [milestone,setMilestone] = useState('');
    const [years,setYears] = useState('');
    function handleEdit() {
        setName(education[education.length-1].name)
        setMilestone(education[education.length-1].milestone)
        setYears(education[education.length-1].years)
        updateEdu()
    }
    return (
        <div className="education">
            <h1>Education</h1>
            <form id='edu' onSubmit={handleAdd}>
                <label htmlFor='name'>Institute Name</label>
                <input id='name' value={name} onChange={(e) => setName(e.target.value)} required/>
                <label htmlFor='milestone'>Milestone</label>
                <input id='milestone' value={milestone} onChange={(e) => setMilestone(e.target.value)} required/>
                <label htmlFor='years'>Years</label>
                <input id='years' value={years} onChange={(e) => setYears(e.target.value)} required />
                <button>Add</button>
                <button onClick={handleEdit} type='button'>Edit</button>
            </form>
    
        </div>
    );

}

