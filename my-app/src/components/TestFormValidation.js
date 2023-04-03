/*import React, { useState } from 'react';

function TestFormValidation() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform validation
    let errors = [];

    if (name.trim() === '') {
      errors.push('Name is required');
    }

    if (email.trim() === '') {
      errors.push('Email is required');
    }

    if (password.trim() === '') {
      errors.push('Password is required');
    } else if (password.length < 6) {
      errors.push('Password must be at least 6 characters long');
    }

    if (passwordConfirm.trim() === '') {
      errors.push('Please confirm your password');
    } else if (password !== passwordConfirm) {
      errors.push('Passwords do not match');
    }

    // If there are errors, set the state and return early
    if (errors.length > 0) {
      setErrors(errors);
      return;
    }

    // If there are no errors, submit the form
    console.log('Submitting form...');
  };

  return (
    <form onSubmit={handleSubmit}>
      {errors.length > 0 && (
        <div className="errors">
          {errors.map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
      )}

      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>

      <div>
        <label htmlFor="passwordConfirm">Confirm Password:</label>
        <input
          type="password"
          id="passwordConfirm"
          value={passwordConfirm}
          onChange={(event) => setPasswordConfirm(event.target.value)}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default TestFormValidation;
*/



import React, { useState } from 'react';

function ContactForm()
{

    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (event) =>
    {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false)
        {
            event.stopPropagation();
        } else
        {
            console.log(formData);
        }
        setValidated(true);
    };

    const handleChange = (event) =>
    {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    return (
        <form noValidate validated={validated} onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                {validated && formData.name === '' && <span>Please enter your name.</span>}
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                {validated && formData.email === '' && <span>Please enter a valid email address.</span>}
            </div>

            <div>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
                {validated && formData.message === '' && <span>Please enter a message.</span>}
            </div>

            <button type="submit">Submit</button>
        </form>
    );
}

export default ContactForm;
