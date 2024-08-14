import React from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCardText,
  MDBCardBody,
  MDBTypography,
  MDBBtn,
  MDBCard,
  MDBCardImage
} from 'mdb-react-ui-kit';
import { Line, Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import './ManagerPage.css';
import ProfileImageUploader from './ProfileImageUploader';
import EditableProfile from './EditableProfile';
import ProfilePhotos from './ProfilePhotos';

export default function ManagerPage() {
  const salesData = {
    labels: ['1 Aug', '2 Aug', '3 Aug', '4 Aug', '5 Aug', '6 Aug'],
    datasets: [
      {
        label: 'Sales',
        data: [17, 5, 14, 27, 30, 19],
        backgroundColor: 'rgba(0, 123, 255, 0.5)',
        borderColor: 'rgba(0, 123, 255, 1)',
        borderWidth: 1
      }
    ]
  };
  

  const salesOptions = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  const pieData = {
    labels: ['Desktop', 'Tablet', 'Mobile'],
    datasets: [
      {
        data: [63, 15, 23],
        backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
        hoverBackgroundColor: ['#36A2EB', '#FFCE56', '#FF6384']
      }
    ]
  };

  return (
    <MDBContainer fluid className="py-5 card-container">
      <MDBRow className="justify-content-center align-items-center">
        <div style={{display:'flex', color:'white'}}>
            <p style={{marginLeft:'105px'}}><b>Profile Image&nbsp;</b></p>
            <p>   (These details are visible to event organizers)</p>
            </div>
        <div style={{display:'flex', marginLeft:'105px', marginBottom:'75px'}}>
          <div className='profile' style={{height:'175px', backgroundColor:'#f8f9fa', width:'175px', borderRadius:'8px', display:'flex'}}>
            <ProfileImageUploader/>
          </div>
          <div style={{marginLeft:'25px'}}>
            <EditableProfile />
          </div>
        </div>
        <div style={{marginLeft:'100px', marginRight:'100px', marginBottom:'50px'}}>
        <ProfilePhotos/>
        </div>
        
      </MDBRow>
    </MDBContainer>
  );
}
