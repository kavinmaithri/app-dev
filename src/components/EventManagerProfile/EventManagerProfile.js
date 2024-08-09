import React from 'react';
import './EventManagerProfile.css';

const EventManagerProfile = ({ manager }) => {
  return (
    <div className="profile-card">
      <h3>{manager.name}</h3>
      <p>Location: {manager.location}</p>
      <p>Expertise: {manager.expertise}</p>
      <button>View Profile</button>
      <button>Send Booking Request</button>
    </div>
  );
};

export default EventManagerProfile;
