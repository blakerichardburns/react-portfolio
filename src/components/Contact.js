import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorAlert, setErrorAlert] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setErrorAlert(
        `All fields are required...`
      );
      return;
    }
    if (!validateEmail(email)) {
      setErrorAlert('Are you sure that\'s a valid email address?');
      return;
    }
    alert(`Thanks for reaching out,${name}! I shall be in touch.`);

    setName('');
    setEmail('');
    setMessage('');
    setErrorAlert('');
  };

  return (
    <div class="contact">
      <h1>Contact Me</h1>
      <form>
        <div class="form-group">
          <label>Name:</label>
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="Please enter your name..."
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label>Email:</label>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Please enter your email address..."
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label>Message:</label>
          <textarea
            name="message"
            onChange={handleInputChange}
            type="text"
            value={message}
            placeholder="What would you like to say to me?"
            class="form-control"
          ></textarea>
        </div>
        <button type="submit" onClick={handleFormSubmit} class="btn btn-primary" id="submit-button">
          Submit
        </button>
      </form>
      {errorAlert && (
        <div>
          <p id="form-error">{errorAlert}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;