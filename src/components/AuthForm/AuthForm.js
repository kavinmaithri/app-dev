import React, { useState } from 'react';
import { TextField, Button, IconButton, OutlinedInput, InputLabel, InputAdornment, FormControl, Select, MenuItem } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { NavLink, useNavigate } from 'react-router-dom';
import './AuthForm.css';
import axios from 'axios';

const AuthForm = () => {
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

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    const newUser = { username, email, password, role };

    try {
      const response = await axios.post('http://localhost:8000/register/', newUser, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 201) {
        alert('User registered successfully');
        navigate('/sign-in');
      } else {
        alert('Failed to register user');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while registering');
    }
  };

  return (
    <div className='form-cont'>
      <div className="auth-form">
        <div className="form-container">
          <div className="image-section">
            {/* <img src="E:\selenium-soft\App-dev\crystal\public\back.jpg" alt="background" /> */}
          </div>
          <form className="form-section" onSubmit={handleSubmit}>
            <div className="form-header">
              <h2>Registration</h2>
              <NavLink to="/sign-in">
                Already have an account? Sign In
              </NavLink>
            </div>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
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
            <TextField
              label="Confirm Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Sign Up
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
