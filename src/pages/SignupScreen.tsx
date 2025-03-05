import React, { useState } from 'react';
import '../css/LoginScreen.css';
import { Link } from 'react-router-dom';

const SignupScreen: React.FC = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: handle the actual login logic, e.g., call an API endpoint
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h1>Welcome rando!</h1>
        <p>Enter your details to register</p>

        <label className="parameter-text" htmlFor="fullname">Email address</label>
        <input
          id="email"
          type="email"
          placeholder="employee@java.com"
          value={email}
          onChange={(e) => setFullname(e.target.value)}
          required
        />

        <label className="parameter-text" htmlFor="email">Name</label>
        <input
          id="fullname"
          type="fullname"
          placeholder="John Doe"
          value={fullname}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="parameter-text" htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="phone"
          placeholder="81 1736 1451"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <label className="parameter-text" htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Register</button>

        <div className="signup-link">
          <p>
            Already have an account? <Link to="/">Log in</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignupScreen;