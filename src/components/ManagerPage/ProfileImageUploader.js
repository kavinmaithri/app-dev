import React, { useState } from 'react';
import { MDBBtn, MDBCardImage } from 'mdb-react-ui-kit';
import '../ManagerPage/ProfileImageUploader.css';

function ProfileImageUploader() {
  const [profileImage, setProfileImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleImageRemove = () => {
    setProfileImage(null);
    setImagePreview(null);
  };

  return (
    <div className="profile-image-uploader">
      {imagePreview ? (
        <div className="image-preview">
          <MDBCardImage src={imagePreview} alt="Profile" className="img-thumbnail" fluid />
          <MDBBtn color="danger" onClick={handleImageRemove}>
            Remove
          </MDBBtn>
        </div>
      ) : (
        <div className="upload-section" style={{marginTop:'100px'}}>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          <MDBBtn color="primary" onClick={() => document.querySelector('input[type="file"]').click()}>
            Upload
          </MDBBtn>
        </div>
      )}
    </div>
  );
}

export default ProfileImageUploader;
