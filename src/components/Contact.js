const styles = {
  contact: {
    display: 'flex',
    flexGrow: '1',
  },
};

export default function Contact() {
  return (

  <div style={styles.contact}>
    <h1>Contact Me</h1>
    <form>
      <div>
        <label>Name:</label>
        <input></input>
      </div>
      <div>
        <label>Email:</label>
        <input></input>
      </div>
      <div>
        <label>Message:</label>
        <textarea></textarea>
      </div>
    </form>
    </div>
  
  );
}
