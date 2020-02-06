import React, { useState } from 'react';
import { withFirebase } from '../../config';
import HomeButton from '../ButtonComponents/HomeButton';

function ResetPage(props) {
  const { firebase } = props;

  const [email, setEmail] = useState('');

  // When api call to firebase was successfully excuted
  const [success, setSuccess] = useState('');

  // When error occured for api call to firebase
  const [error, setError] = useState('');

  // Onchange input
  function updateForm({ target: { value } }) {
    setEmail(value);
  }

  // Send submit form(email address)
  function submitForm(event) {
    event.preventDefault();
    if (email === '') {
      setError('Please input your email address');
      setTimeout(() => {
        setError('');
      }, 2000);
      return;
    } else {
      firebase
        .doPasswordReset(email)
        .then(res => {
          setSuccess('Successfully sent reset email to your email address.');
        })
        .catch(err => {
          console.log(err.message);
          setError(err.message);
        });
      setTimeout(() => {
        setSuccess('');
        setError('');
      }, 3000);
    }
  }

  return (
    <section className="weather-container reset-container">
      <header className="reset-header">
        <h3>Reset password</h3>
        <p>Input email address to update your password</p>
      </header>

      <form onSubmit={submitForm} className="reset-form">
        <input
          type="email"
          name="email"
          value={email}
          onChange={updateForm}
          placeholder="Email Address"
          className="email-input"
        />
        <button type="submit" className="btnMine reset-btn">
          Reset Password
        </button>
      </form>
      <div className="reset-response">
        {error ? <p className="error">{error}</p> : ''}
        {success ? <p className="success">{success}</p> : ''}
      </div>
      <div className="reset-home-btn">
        <HomeButton props={props} />
      </div>
    </section>
  );
}

export default withFirebase(ResetPage);
