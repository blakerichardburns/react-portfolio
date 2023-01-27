function Project({project}) {
    return (
        <div className="text-center">
      <img
        alt={project.name}
        className="img-fluid"
        src={require(`../assets/${project.image}`)}
        style={{ margin: '0 auto' }}
      />
      <h3>Description: {project.description}</h3>
      <h3>Deployed Link: {project.deployedLink}</h3>
      <h3>Repository: {project.gitHub}</h3>
    </div>
    )
}

export default Project;