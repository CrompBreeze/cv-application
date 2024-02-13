
import '../styles/info.css'

export default function Info({ onclick })
{
    return (
        <div className="info">
            <h1>Contact Details</h1>
            <label>Name</label>
            <input onChange={onclick} id='name'/>
            <label>Email ID</label>
            <input onChange={onclick} id='mail'/>
            <label>Phone Number</label>
            <input onChange={onclick} id='phnumber'/>
        </div>
    );

}

