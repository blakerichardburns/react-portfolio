function Project({ project }) {
  return (
    <div className="text-center w-50">
      <h2>Project: <span>{project.name}</span></h2>
      <a href={project.deployedLink} target="_blank" rel="noreferrer">
        <img
          class='project-screenshot'
          alt={project.name}
          src={require(`../assets/${project.image}`)}
        />
      </a>
      <p >{project.description}</p>
      <h3 ><a href={project.deployedLink} target="_blank" rel="noreferrer">Deployed Link</a></h3>
      <h3 ><a href={project.repository} target="_blank" rel="noreferrer">Code Repository </a></h3>
    </div>
  );
}

export default Project;
