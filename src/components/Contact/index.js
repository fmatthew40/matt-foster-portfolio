
import React, { useState } from 'react';
import { emailValidation } from '../../utils/helpers';

function Contact() {
    const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({[e.target.name]: e.target.value});
      console.log('Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = emailValidation(e.target.value);
      if (!isValid) {
        setErrorMessage('invalid Email!');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} required.`);
      } else {
        setErrorMessage('');
      }
    }
  };

  return (
    <section>
      <h1 className="">Contact me</h1>
      <form id="contact" onSubmit={handleSubmit}>
        <div className="">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email Address:</label>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="8" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit Form</button>
      </form>
    </section>
  );
}

export default Contact;