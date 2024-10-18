import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Signup.css';

function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulate an API call for signup
    try {
      const response = await fakeSignupApi(formData);

      // Simulate successful signup
      if (response.success) {
        navigate('/');
      } else {
        setError(response.message);
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Fake API signup function (for demo)
  const fakeSignupApi = (data) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (data.email === 'test@example.com') {
          resolve({ success: false, message: 'Email already in use.' });
        } else {
          resolve({ success: true });
        }
      }, 1000);
    });
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="signup-logo">
          <img src="/logo.svg" alt="Horizon logo" />
          <h1>Horizon</h1>
        </div>
        <h2>Sign up</h2>
        <p>Please enter your details.</p>
        {error && <p className="error-message">{error}</p>}
        <input
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Signing up...' : 'Sign up'}
        </button>
        <div className="login-link">
          Already have an account? <Link to="/">Login</Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;
