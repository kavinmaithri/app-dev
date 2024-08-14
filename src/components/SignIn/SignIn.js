import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, IconButton, OutlinedInput, InputLabel, InputAdornment, FormControl, Select, MenuItem } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { NavLink, useNavigate } from 'react-router-dom';
import { signIn } from '../actions/authActions';
import './SignIn.css';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('event-manager'); // Default role
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userCredentials = { email, password, role };

    try {
      const response = await fetch('http://localhost:8000/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userCredentials),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Signed in successfully');
        dispatch(signIn(result)); // Dispatch user data including role to your Redux store
        navigate(result.role === 'event-manager' ? '/manager' : '/dashboard'); // Redirect based on role
      } else {
        alert('Failed to sign in. Check your credentials and try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while signing in');
    }
  };

  return (
    <div className="sign-in-form">
      <div className="form-container">
        <div className="image-section">
          {/* <img src="E:\selenium-soft\App-dev\crystal\public\back.jpg" alt="background" /> */}
        </div>
        <form className="form-section" onSubmit={handleSubmit}>
          <div className="form-header">
            <h2>Sign In</h2>
            <NavLink to="/sign-up">Don't have an account? Sign Up</NavLink>
          </div>
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
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
