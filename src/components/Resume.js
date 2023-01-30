const styles = {
  resume: {
    display: 'flex',
    flexGrow: '1',
  },
};

export default function Resume() {
  return (
  <div style={styles.resume}>
    <h1>Résumé / CV</h1>
    <a href='./assets/resume-placeholder.pdf' target='_blank'>
      <button>Download</button>
    </a>
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
    </div>
  );
}
