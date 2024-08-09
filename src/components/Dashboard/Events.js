import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Events.css'; // Ensure the CSS file is correctly imported

const Events = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthday: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: ''
  });

  const [isEditing, setIsEditing] = useState(true);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSave = () => {
    // You can add any save logic here if needed
    navigate('/book');
  };

  const statesOfIndia = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", 
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", 
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", 
    "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  return (
    <div className="profile-form">
      <h2>Event Information</h2>
      <form>
        <div className="form-grid">
          <div>
            <label>Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div>
            <label>Description</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div>
            <label>Date</label>
            <input
              type="date"
              name="birthday"
              value={formData.birthday}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div>
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
        </div>

        <h2>Location</h2>
        <div className="form-grid">
          <div>
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div>
            <label>City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div>
            <label>Select State</label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              disabled={!isEditing}
            >
              <option value="">State</option>
              {statesOfIndia.map((state) => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
          </div>
          <div>
            <label>ZIP</label>
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
        </div>

        <button type="button" onClick={handleSave}>
          Book Organizer
        </button>
      </form>
    </div>
  );
};

export default Events;
