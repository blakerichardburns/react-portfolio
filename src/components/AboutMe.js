const styles = {
  aboutMe: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexGrow: '2',
    padding: '8rem',
  },
  bioHead: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '40%',
  },
  img: {
    maxWidth: '30%',
    height: 'auto',
    marginLeft: '5rem',
    borderRadius: '5%',
  },
  h1: {
    padding: '2rem',
    fontSize: '5rem',
  },
  bio: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: '5rem',
    paddingRight: '5rem',
    width: '60%',
    fontSize: '1.25rem',
    borderStyle: 'solid',
    borderColor: '#ced3dc',
    borderRadius: '5%',
  },
};

export default function AboutMe() {
  return <div style={styles.aboutMe}>
    <div style={styles.bioHead}>
      <img
        alt="Blake Burns"
        className="img-fluid"
        src={require(`../assets/me-screenshot.jpeg`)}
        style={styles.img}
      />
      <h1 style={styles.h1}>The Developer</h1>
    </div>
    <div style={styles.bio}>
      <p>Blake has been coding for well over five whole months, with hours worth of experienc</p>
      <p>Before pivoting into the Hello World! of web development, he attended Indiana University, barely graduating with a degree in English Literature (for reasons lost to time), with minors in Psychology and Classical Studies.</p>
      <p>Blake taught English in Madrid, Spain for four years, before returning to the United States of America to work in the fulfillment of biopharma marketing materials.</p>
      <p>In his free time, he listens to rock and metal music, watches pretentious films and television shows, occaional golfs poorly, and follows some sports, especially college football.</p>
    </div>
  </div>;
}
