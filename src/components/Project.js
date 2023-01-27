const styles = {
  project: {
    display: 'flex',
  }
}

function Project({ project }) {
  return (
    <div className="text-center" style={styles.project}>
      <img
        alt={project.name}
        className="img-fluid"
        src={require(`../assets/${project.image}`)}
        style={{ margin: "0 auto" }}
      />
      <h2>Project: {project.name}</h2>
      <h3>Description: {project.description}</h3>
      <h3>Deployed Link: {project.deployedLink}</h3>
      <h3>Code Repository: {project.repository}</h3>
    </div>
  );
}

export default Project;
