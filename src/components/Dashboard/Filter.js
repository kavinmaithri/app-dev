import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Filter = () => {
  const [roles, setRoles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/api/roles/')
      .then((response) => response.json())
      .then((data) => setRoles(data));
  }, []);

  const filteredRoles = roles.filter((role) =>
    role.role?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    role.companyName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    String(role.experience)?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={containerStyle}>
      
      <Link to="/company" style={companyButtonStyle}>Company</Link>

      
      <Link to="/application-status"> 
        <img
          src="https://static.thenounproject.com/png/3592817-200.png"
          alt="Right Logo"
          style={rightLogoStyle}
        />
      </Link>
      
      
      <h2>Job Page</h2>
      <input
        type="text"
        placeholder="Search by Role, Company, or Experience"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={searchBarStyle}
      />
      <div style={rolesContainerStyle}>
        {filteredRoles.map((role) => (
          <div key={role.id} style={roleBoxStyle}>
            {role.imageURL && <img src={role.imageURL} alt={role.role} style={imageStyle} />}
            <p><strong>Role:</strong> {role.role}</p>
            <p><strong>Company Name:</strong> {role.companyName}</p>
            <p><strong>Location:</strong> {role.location}</p>
            <p><strong>Skills:</strong> {role.skills}</p>
            <p><strong>Years of Experience:</strong> {role.experience}</p>
            <p><strong>Salary:</strong> {role.salary}</p>
            <Link to={/apply/${role.id}} style={applyButtonStyle}>Apply</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const containerStyle = {
  padding: '20px',
  margin: '0',
  minHeight: '100vh',
  backgroundImage: 'url(https://media.istockphoto.com/id/1341107435/vector/abstract-cover-design-with-light-blue-gradient-and-thin-lines-a3.jpg?s=612x612&w=0&k=20&c=xQGg2wVY_-w72OhvbwQkbDgRLuahQ3DKrg0iaCv3eW8=)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative', 
};

const searchBarStyle = {
  padding: '10px',
  margin: '20px 0',
  width: '100%',
  maxWidth: '500px',
  borderRadius: '8px',
  border: '2px solid #4caf50',
  fontSize: '1rem',
};

const rolesContainerStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '20px',
  width: '100%',
  maxWidth: '1200px',
};

const roleBoxStyle = {
  backgroundColor: '#fff',
  padding: '10px',
  borderRadius: '8px',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  maxHeight: '200px',
  marginBottom: '10px',
  borderRadius: '4px',
};

const applyButtonStyle = {
  display: 'block',
  marginTop: '10px',
  backgroundColor: '#4caf50',
  color: 'white',
  padding: '10px',
  border: 'none',
  borderRadius: '4px',
  textAlign: 'center',
  textDecoration: 'none',
};

const rightLogoStyle = {
  position: 'absolute',
  top: '20px',
  right: '20px',
  width: '70px', 
  height: 'auto',
};

const companyButtonStyle = {
  position: 'absolute',
  top: '20px',
  left: '20px',
  padding: '10px 20px', 
  backgroundColor: '#4caf50',
  color: 'white',
  textDecoration: 'none',
  borderRadius: '4px',
  fontSize: '1rem',
  textAlign: 'center',
  fontWeight: 'bold',
};

export default Filter;