import React, { useState } from 'react';

function EditableProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('Crystal Planners');
  const [Location, setLocation] = useState('Mumbai');
  const [Minbudget, setMinbudget]=useState('0.00');

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };


  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-info">
          {isEditing ? (
            <>
            <div style={{ flexDirection: 'column', gap:'0px' }}>
              <p>Business Name</p>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="profile-input"
              />
              <p>Location</p>
              <input
                type="text"
                value={Location}
                onChange={(e) => setLocation(e.target.value)}
                className="profile-input"
              />
              <p>Minimum budget</p>
              <input
                type="text"
                value={Minbudget}
                onChange={(e) => setMinbudget(e.target.value)}
                className="profile-input"
              />
              <button onClick={handleSaveClick} className="profile-button">Save</button>
              </div>
            </>
          ) : (
            <>
              <p><b>Business Name: {name}</b></p>
              <p>Location: {Location}</p>
              <p>Minimum Budget: {Minbudget}</p>
              <button onClick={handleEditClick} className="profile-button">Edit</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default EditableProfile;
