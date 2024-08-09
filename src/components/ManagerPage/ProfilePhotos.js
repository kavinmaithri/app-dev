import React, { useState } from 'react';
import { MDBRow, MDBCol, MDBCardImage, MDBCardText } from 'mdb-react-ui-kit';
import './ProfilePhotos.css';

const ProfilePhotos = () => {
  const [photos, setPhotos] = useState([
    "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp",
    "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp",
    "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp",
    "https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
  ]);
  const [showAll, setShowAll] = useState(false);

  const handleUpload = (event) => {
    const files = event.target.files;
    const newPhotos = [...photos];
    for (let i = 0; i < files.length; i++) {
      if (newPhotos.length < 50) {
        newPhotos.push(URL.createObjectURL(files[i]));
      } else {
        alert("You can only upload up to 50 pictures.");
        break;
      }
    }
    setPhotos(newPhotos);
  };

  const handleEdit = (index) => {
    const newPhotos = [...photos];
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.onchange = (event) => {
      newPhotos[index] = URL.createObjectURL(event.target.files[0]);
      setPhotos(newPhotos);
    };
    fileInput.click();
  };

  const visiblePhotos = showAll ? photos : photos.slice(0, 4);

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <MDBCardText className="lead fw-normal mb-0">Recent photos</MDBCardText>
        <MDBCardText className="mb-0">
          <a href="#!" className="text-muted" onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Show less' : 'Show all'}
          </a>
        </MDBCardText>
      </div>
      <div className="photo-grid">
        {visiblePhotos.map((photo, index) => (
          <div className="photo-item" key={index}>
            <MDBCardImage src={photo} alt={`image ${index + 1}`} className="w-100 rounded-3" />
            <button onClick={() => handleEdit(index)} className="btn btn-secondary mt-2">Edit</button>
          </div>
        ))}
      </div>
      <input type="file" multiple accept="image/*" onChange={handleUpload} className="mt-3" />
      <button className="btn btn-primary mt-2">Upload</button>
    </div>
  );
};

export default ProfilePhotos;
