import React, { useState } from 'react';
import './ProfileForm.css'; // Ensure the CSS file is correctly imported

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthday: '',
    gender: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    number: ''
  });

  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
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
      <h2>General information</h2>
      <form>
        <div className="form-grid">
          <div>
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div>
            <label>Birthday</label>
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
          <div>
            <label>Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              disabled={!isEditing}
            >
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <h2>Address</h2>
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
            <label>Number</label>
            <input
              type="text"
              name="number"
              value={formData.number}
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
          <div>
            <label>Select state</label>
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

        <button type="button" onClick={isEditing ? handleSave : handleEdit}>
          {isEditing ? 'Save All' : 'Edit All'}
        </button>
      </form>
    </div>
  );
};

export default ProfileForm;
