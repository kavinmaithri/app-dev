import React from 'react';
import './NavHead.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../src/components/actions/authActions';

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch(signOut());
  };

  return (
    <nav>
      <Link to="/" className='logo'>
        <img src="./logo.png" alt="logo" className='toggle-icon' />
      </Link>
      <ul>
        {!isLoggedIn && (
          <li>
            <NavLink to="/getStarted" className={({ isActive }) => (isActive ? 'active' : '')}>Get Started!</NavLink>
          </li>
        )}
        <li className="dropdown">
          <NavLink to="/contactus" className={({ isActive }) => (isActive ? 'active' : '')}>Contact Us</NavLink>
          <div className="dropdown-content">
            <>
              <p>Contact Us</p>
              <p>Email: contact@planningpod.com</p>
              <p>Phone: (123) 456-7890</p>
              <p>Address: 1234 Event St, City, State</p>
            </>
          </div>
        </li>
        <li className="dropdown">
          <NavLink to="/sign-in" className={({ isActive }) => (isActive ? 'active' : '')}>
            <AccountCircleIcon />
          </NavLink>
          <div className="dropdown-content">
            {isLoggedIn ? (
              <>
                <NavLink to="/profile" className={({ isActive }) => (isActive ? 'active' : '')}>Profile</NavLink>
                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} onClick={handleLogout}>Logout</NavLink>
              </>
            ) : (
              <>
                <NavLink to="/sign-in" className={({ isActive }) => (isActive ? 'active' : '')}>Login</NavLink>
              </>
            )}
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
