// Context/UserContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create the context
const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the mock server
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/add');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const registerUser = async (newUser) => {
    try {
      const response = await axios.post('http://localhost:8080/add', newUser);
      setUsers([...users, response.data]);
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  const signInUser = (email, password) => {
    const foundUser = users.find((u) => u.email === email && u.password === password);
    if (foundUser) {
      setUser(foundUser);
      return true;
    } else {
      console.error('Invalid email or password');
      return false;
    }
  };

  return (
    <UserContext.Provider value={{ user, registerUser, signInUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
