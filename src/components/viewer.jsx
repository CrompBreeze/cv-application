import '../styles/viewer.css'

function Viewer({ info, education, experience, skills })
{
    return (
        <div className='viewergrid'>
        <div className="titleviewer">
            <h1>{info.name}</h1>
            <h2>{info.mail}{' '}{info.phnumber}</h2>
        </div>
        <div className='contactviewer'>
            <h1>Contact</h1>
            <p>{info.name}</p>
            <p>{info.mail}</p>
            <p>{info.phnumber}</p>
        </div>
        <div className='eduviewer'>
            <ul>
            <h1>Education</h1>
            {education.map((x) => 
            <li>
            <p>{x.name}</p>
            <p>{x.milestone}</p>
            <p>{x.years}</p>
            </li>
            )}
            </ul>
        </div>
        <div className='expviewer'>
        <ul>
            <h1>Experience</h1>
            {experience.map((x) => 
            <li>
            <p>{x.name}</p>
            <p>{x.role}</p>
            <p>{x.years}</p>
            </li>
            )}
            </ul>            
        </div>
        <div className='skillsviewer'>
            <ul>
            <h1>Skills</h1>
            {skills.map((x) => 
            <li>
            <p>{x}</p>
            </li>
            )}
            </ul>
        </div>
        </div>
    )
     


}
export default Viewer

