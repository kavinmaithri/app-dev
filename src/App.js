// App.js
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './components/HomePage/HomePage';
import GetStarted from './components/GetStarted/GetStarted';
import SignIn from './components/SignIn/SignIn';
import Dashboard from './components/Dashboard/Dashborad';
import ManagerPage from './components/ManagerPage/ManagerPage';
import { UserProvider } from './components/Context/UserContext';
import AuthForm from './components/AuthForm/AuthForm';
import ProfileForm from './components/ManagerPage/ProfileForm';
import Events from './components/Dashboard/Events';
import Bookings from './components/Dashboard/Booking';
import { MantineProvider } from '@mantine/core';
import CreateShipment from './components/Dashboard/CreateShipment';
function App() {
  const location = useLocation();
  // const hideNavbarPaths = ['/dashboard'];

  // const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);

  return (
    <UserProvider>
      <div>
        {/* {!shouldHideNavbar && <Navbar />} */}
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/getStarted" element={<GetStarted />} /> */}
          <Route path="/getStarted" element={<AuthForm isSignUp={true} />} />
          <Route path="/manager" element={<ManagerPage />} />
          <Route path="/profile" element={<ProfileForm />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/events" element={<Events />} />
          <Route path="/book" element={<Bookings />} />
          <Route path="/ship" element={<CreateShipment />} />

        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;
