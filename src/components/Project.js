const styles = {
  project: {

  },
  h2: {

  },
  projectSpan: {

  },
  img: {

  },
  p: {

  },
  h3: {

  },
};

function Project({ project }) {
  return (
    <div className="text-center" style={styles.project}>
      <h2 style={styles.h2}>Project: <span style={styles.projectSpan}>{project.name}</span></h2>
      <a href={project.deployedLink} target="_blank">
        <img
          alt={project.name}
          style={styles.img}
          src={require(`../assets/${project.image}`)}
        />
      </a>
      <p style={styles.p}>{project.description}</p>
      <h3 style={styles.h3}><a href={project.deployedLink} target="_blank">Deployed Link</a></h3>
      <h3 style={styles.h3}><a href={project.repository} target="_blank">Code Repository </a></h3>
    </div>
  );
}

export default Project;
