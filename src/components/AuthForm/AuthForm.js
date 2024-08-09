// AuthForm.js
import React, { useState } from 'react';
import { TextField, Button, IconButton, OutlinedInput, InputLabel, InputAdornment, FormControl, Select, MenuItem } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { NavLink, useNavigate } from 'react-router-dom';
import validator from 'validator';
import './AuthForm.css';

const AuthForm = ({ isSignUp }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('event-manager'); // Default role
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignUp && password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    
    const newUser = { username, email, password, role };

    if (isSignUp) {
      try {
        const response = await fetch('http://localhost:8080/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newUser),
        });
        if (response.ok) {
          alert('User registered successfully');
          navigate(role === 'event-manager' ? '/manager' : '/dashboard'); // Redirect based on role
        } else {
          alert('Failed to register user');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      // Add sign-in logic here
    }
  };

  return (
    <div className="auth-form">
      <div className="form-container">
        <div className="image-section">
          {/* <img src="E:\selenium-soft\App-dev\crystal\public\back.jpg" alt="background" /> */}
        </div>
        <form className="form-section" onSubmit={handleSubmit}>
          <div className="form-header">
            <h2>{isSignUp ? 'Event Manager Registration' : 'Sign In'}</h2>
            <NavLink to={isSignUp ? '/sign-in' : '/sign-up'}>
              {isSignUp ? 'Sign In' : 'Event Manager Registration'}
            </NavLink>
          </div>
          {isSignUp && (
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          )}
          <FormControl variant="outlined" fullWidth margin="normal">
            <InputLabel id="role-label">Role</InputLabel>
            <Select
              labelId="role-label"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              label="Role"
            >
              <MenuItem value="event-manager">Event Manager</MenuItem>
              <MenuItem value="event-organizer">Event Organizer</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="E-Mail"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormControl variant="outlined" fullWidth margin="normal">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          {isSignUp && (
            <TextField
              label="Confirm Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          )}
          <Button variant="contained" color="primary" type="submit" fullWidth>
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
