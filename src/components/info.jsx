import { useState } from 'react';
import '../styles/info.css'

export default function Info({ onclick })
{
    const [isOpen,setIsOpen] = useState(false);
    function handleClick()
    {
        setIsOpen(!isOpen)
    }
    return (
        <div className="info" style={{backgroundColor:isOpen ? 'rgb(220,220,220)' : 'white'}}>
            <p onClick={handleClick}>Contact Details</p>
            {isOpen && 
            <>
            <label>Name</label>
            <input onChange={onclick} id='name'/>
            <label>Email ID</label>
            <input onChange={onclick} id='mail'/>
            <label>Phone Number</label>
            <input onChange={onclick} id='phnumber'/>
            </>
            }
        </div>
    );

}

