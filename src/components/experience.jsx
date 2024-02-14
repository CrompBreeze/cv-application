import { useState } from 'react';
import '../styles/experience.css'

function Experience({ handleAdd, updateExp, experience })
{
    const [name,setName] = useState('');
    const [role,setRole] = useState('');
    const [years,setYears] = useState('');
    const [isOpen,setIsOpen] = useState(false);
    function handleClick()
    {
        setIsOpen(!isOpen)
    }
    function handleEdit() {
        const last = experience.length-1;
        setName(experience[last].name)
        setRole(experience[last].role)
        setYears(experience[last].years)
        updateExp()
    }
    return (
        <div className="experience">
            <p onClick={handleClick}>Experience</p>
            {isOpen &&
            <form id='exp' onSubmit={handleAdd}>
                <label htmlFor="name">Company Name</label>
                <input id='name' value={name} onChange={(e) => setName(e.target.value)} required/>
                <label htmlFor="role">Role</label>
                <input id='role' value={role} onChange={(e) => setRole(e.target.value)} required/>
                <label htmlFor="years">Years</label>
                <input id='years' value={years} onChange={(e) => setYears(e.target.value)} required/>
                <div style={{display:'flex',gap: '10px', marginTop:'10px'}}>
                <button>Add</button>
                <button type='button' onClick={handleEdit}>Edit</button>
                </div>
            </form>
            }
        </div>
    );

}

export default Experience