import React, { useState } from 'react';
import '../css/LoginScreen.css';

const LoginScreen: React.FC = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: handle the actual login logic, e.g., call an API endpoint
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h1>Welcome back</h1>
        <p>Please enter your details to sign in</p>

        <label className="parameter-text" htmlFor="email">Email address</label>
        <input
          id="email"
          type="email"
          placeholder="employee@java.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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

        <div className="forgot-password">
          <a href="/forgot-password">Forgot password?</a>
        </div>

        <button type="submit">Sign in</button>

        <div className="signup-link">
          <p>
            Don&apos;t have an account? <a href="/signup">Sign up</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginScreen;