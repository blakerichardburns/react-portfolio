import { useState } from 'react';
import resume from '../assets/placeholder-resume.pdf';

export default function Resume() {

  const [showPdf, setShowPdf] = useState(false)
  const handleClick = () => {
    setShowPdf(!showPdf)
  }
  
  return (
  <div>
    <h1>Résumé / CV</h1>
    <a href='#resume.pdf' onClick={handleClick}>
      <button>Click here to toggle downloadable resume</button>
    </a>
    <div>
      {!showPdf&&(
      <div>
      <h2>Proficiencies</h2>
      <ul>
        <li>HTML</li>
        <li>Cascading Style Sheets</li>
        <li>JavaScript</li>
        <li>JQuery</li>
        <li>Bootstrap</li>
        <li>Node.js</li>
        <li>Object-Oriented Programming</li>
        <li>Express.js</li>
        <li>SQL</li>
        <li>Object-Relational Mapping</li>
        <li>Model-View-Controller</li>
        <li>Mongo DB & Mongoose</li>
        <li>Progressive Web Applications</li>
        <li>React</li>
        <li>MERN</li>
      </ul>
    </div>
      )}
      {showPdf&&(
        <div className='w-100'>
          <object width='100%' height='600' data={resume} type='application/pdf' />
          </div>
      )}
    </div>
    </div>
  );
}
