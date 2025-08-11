import React, { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import './styles/auth.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleEmailLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/');
    } catch (err) {
      console.error(err);
      setError('Failed to sign in with Google. Please try again.');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="back-arrow" onClick={() => navigate(-1)}>←</div>
        <h2>Login</h2>
        <form onSubmit={handleEmailLogin}>
          <input 
            type="email" 
            placeholder="Email" 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
          
          <div className="password-wrapper">
            <input 
              type={showPassword ? 'text' : 'password'}
              placeholder="Password" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
            />
            <span 
              className="toggle-password" 
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button type="submit">Login</button>
          {error && <p className="auth-error">{error}</p>}
        </form>

        <div className="auth-divider">
          <span>OR</span>
        </div>
        <button className="google-btn" onClick={handleGoogleSignIn}>
          <FaGoogle /> Continue with Google
        </button>
        
        <p onClick={() => navigate('/signup')} className="auth-link">
          Don't have an account? Sign up
        </p>
      </div>
    </div>
  );
}