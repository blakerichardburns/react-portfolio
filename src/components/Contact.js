export default function Contact() {
  return (
    <div class="contact">
      <h1>Contact Me</h1>
      <form>
        <div class="form-group">
          <label>Name:</label>
          <input
            class="form-control"
            placeholder="Please enter your name..."
            required
          />
        </div>
        <div class="form-group">
          <label>Email:</label>
          <input
            type="email"
            class="form-control"
            placeholder="Please enter your email address..."
            required
          />
        </div>
        <div class="form-group">
          <label>Message:</label>
          <textarea
            class="form-control"
            placeholder="What would you like to say to me?"
            required
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary" id="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}
