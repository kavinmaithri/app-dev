import React, { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { NavLink, useNavigate } from 'react-router-dom';
import validator from 'validator';
import UserContext from '../Context/UserContext';
import './GetStarted.css';

const GetStarted = () => {
  const { registerUser } = useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState('organizer'); // New state for role
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    validateName(newName);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    validateEmail(newEmail);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    validateConfirmPassword(newConfirmPassword);
  };

  const validateName = (value) => {
    if (value.trim() !== '') {
      setNameError('');
    } else {
      setNameError('Name is required');
    }
  };

  const validateEmail = (value) => {
    if (value === '') {
      setEmailError('Fill the Email-ID');
      return;
    }
    if (validator.isEmail(value)) {
      setEmailError('');
    } else {
      setEmailError('Invalid email address');
    }
  };

  const validatePassword = (value) => {
    if (value === '') {
      setPasswordError('Fill the Password');
      return;
    }
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setPasswordError('');
    } else {
      setPasswordError('Password should be strong');
    }
  };

  const validateConfirmPassword = (value) => {
    if (value === '') {
      setConfirmPasswordError('Fill the Password');
      return;
    }
    if (value === password) {
      setConfirmPasswordError('');
    } else {
      setConfirmPasswordError('Passwords do not match');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    validateName(name);
    validateEmail(email);
    validatePassword(password);
    validateConfirmPassword(confirmPassword);

    if (!nameError && !emailError && !passwordError && !confirmPasswordError) {
      try {
        // Check if email is already registered
        const emailCheckResponse = await fetch(`http://localhost:3001/users?email=${email}`);
        const existingUsers = await emailCheckResponse.json();

        if (existingUsers.length > 0) {
          setEmailError('Email is already registered');
          return;
        }

        // Proceed with registration if email is unique
        const newUser = { id: '', name, email, password, role };
        const response = await fetch('http://localhost:3001/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newUser),
        });

        if (response.ok) {
          registerUser(newUser);
          navigate('/login');
        } else {
          console.error('Failed to register user');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <div className='BBB'>
      <form className="regForm" onSubmit={handleSubmit}>
        <p className='regPara'>All-in-one event management software to plan and run in-person, virtual, and hybrid events with greater efficiency and impact.</p>
        
        {/* Role Selection */}
        <FormControl component="fieldset">
          <InputLabel htmlFor="role">Role</InputLabel>
          <select id="role" value={role} onChange={handleRoleChange}>
            <option value="organizer">Organizer</option>
            <option value="manager">Manager</option>
          </select>
        </FormControl>
        <br />

        <TextField
          type="name"
          label="Name"
          inputProps={{
            sx: {
              color: 'black',
              paddingLeft: '15px',
              fontSize: '15px',
              width: '400px',
            },
          }}
          InputLabelProps={{
            sx: {
              textTransform: 'capitalize',
            },
          }}
          id="filled-basic"
          variant="outlined"
          placeholder="Enter Your Name"
          onChange={handleNameChange}
        />
        <div style={{ color: 'red' }}>{nameError}</div>
        <br />
        <TextField
          type="email"
          label="Email"
          inputProps={{
            sx: {
              color: 'black',
              paddingLeft: '15px',
              fontSize: '15px',
              width: '400px',
            },
          }}
          InputLabelProps={{
            sx: {
              textTransform: 'capitalize',
            },
          }}
          id="filled-basic"
          variant="outlined"
          onChange={handleEmailChange}
        />
        <div style={{ color: 'red' }}>{emailError}</div>
        <pre></pre>
        <FormControl sx={{ m: 1, width: '410px' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            onChange={handlePasswordChange}
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
        <FormControl sx={{ m: 1, width: '410px' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            onChange={handleConfirmPasswordChange}
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
            label="Confirm Password"
          />
        </FormControl>
        <div style={{ color: 'red' }}>{confirmPasswordError}</div>
        <br />
        <button type="submit" className="regBtn">Register</button>
        <p className='regPara'>Already a member? <NavLink to="/sign-in">Sign In</NavLink></p>
      </form>
    </div>
  );
};

export default GetStarted;
