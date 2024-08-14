import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Events.css'; // Ensure the CSS file is correctly imported

const Events = () => {
  const [formData, setFormData] = useState({
    first_name: '', // Changed to match backend field
    last_name: '', // Changed to match backend field
    birthday: '',
    email: '', // This should be included if your backend expects it
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    user: '' // Add this field if required by the backend
  });

  const [isEditing, setIsEditing] = useState(true);
  const [error, setError] = useState(null); // Added state for handling errors
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await fetch('http://localhost:8000/events/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Event saved:', data);
        navigate('/book'); // Navigate on successful save
      } else {
        const errorData = await response.json();
        console.error('Error saving event:', errorData);
        setError('Failed to save event. Please try again.'); // Set error message
      }
    } catch (error) {
      console.error('Error saving event:', error);
      setError('Failed to save event. Please try again.'); // Set error message
    }
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
      <form onSubmit={handleSave}>
        <div className="form-grid">
          <div>
            <label>Name</label>
            <input
              type="text"
              name="first_name" // Changed to match backend field
              value={formData.first_name} // Changed to match backend field
              onChange={handleChange}
              disabled={!isEditing}
              required
            />
          </div>
          <div>
            <label>Description</label>
            <input
              type="text"
              name="last_name" // Changed to match backend field
              value={formData.last_name} // Changed to match backend field
              onChange={handleChange}
              disabled={!isEditing}
              required
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
              required
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
              required
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
              required
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
              required
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
              required
            />
          </div>
          <div>
            <label>Select State</label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              disabled={!isEditing}
              required
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
              required
            />
          </div>
        </div>

        {error && <p className="error-message">{error}</p>} {/* Display error message if present */}
        
        <button type="submit">
          Book Organizer
        </button>
      </form>
    </div>
  );
};

export default Events;
