function Project({ project }) {
  return (
    <div className="text-center w-50 project">
      <h2>Project: <span id="project-name">{project.name}</span></h2>
      <a href={project.deployedLink} target="_blank" rel="noreferrer">
        <img
          class='project-screenshot'
          alt={project.name}
          src={require(`../assets/${project.image}`)}
        />
      </a>
      <p >{project.description}</p>
      <button><a href={project.deployedLink} target="_blank" rel="noreferrer">Deployed Link</a></button>
      <button><a href={project.repository} target="_blank" rel="noreferrer">Code Repository </a></button>
    </div>
  );
}

export default Project;
