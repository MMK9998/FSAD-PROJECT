import { useState } from 'react';
import './loginPage.css'; // Import the CSS file

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you would normally make an API call to authenticate
      // For example: await loginUser(formData);
      
      console.log('Login submitted:', formData);
      // Redirect user or update app state upon successful login
      
    } catch (err) {
      setError('Invalid username or password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1 className="login-title">
            Welcome to <span className="brand-primary">Cine</span>Booker
          </h1>
          <p className="login-subtitle">Sign in to your account</p>
        </div>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              id="username"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="form-input"
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-input"
              placeholder="••••••••"
              required
            />
          </div>
          
          <div className="forgot-password">
            <a href="#forgot-password">
              Forgot password?
            </a>
          </div>

          <div className="remember-me">
            <input
              id="rememberMe"
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="checkbox-input"
            />
            <label htmlFor="rememberMe" className="checkbox-label">
              Remember me
            </label>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="submit-button"
          >
            {isLoading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>

        <div className="signup-section">
          <p className="signup-text">Don't have an account?</p>
          <a href="#register" className="signup-link">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;