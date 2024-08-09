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
        <MDBCol lg="11" xl="10">
          <MDBRow className="mb-4">
            <div className='stat'>
              <MDBCol md="3">
                <div className="stat-box">
                  <MDBCardText>Budget</MDBCardText>
                  <MDBCardText>$24,000</MDBCardText>
                  <MDBCardText className="text-danger">12% Since last month</MDBCardText>
                </div>
              </MDBCol>
              <MDBCol md="3">
                <div className="stat-box">
                  <MDBCardText>Total Users</MDBCardText>
                  <MDBCardText>1,600</MDBCardText>
                  <MDBCardText className="text-success">16% Since last month</MDBCardText>
                </div>
              </MDBCol>
              <MDBCol md="3">
                <div className="stat-box">
                  <MDBCardText>Tasks Progress</MDBCardText>
                  <MDBCardText>75.5%</MDBCardText>
                </div>
              </MDBCol>
              <MDBCol md="3">
                <div className="stat-box">
                  <MDBCardText>Total Profit</MDBCardText>
                  <MDBCardText>$23,200</MDBCardText>
                </div>
              </MDBCol>
            </div>
          </MDBRow>
          <MDBRow>
            <div className='chart'>
              <MDBCol md="8">
                <div className="chart-container">
                  <MDBTypography tag="h5">Latest Sales</MDBTypography>
                  <Line data={salesData} options={salesOptions} />
                </div>
              </MDBCol>
              <MDBCol md="4">
                <div className="chart-container">
                  <MDBTypography tag="h5">Users By Device</MDBTypography>
                  <Pie data={pieData} />
                </div>
              </MDBCol>
            </div>
          </MDBRow>
          <MDBRow className="mt-4">
            <div className='cb'>
              <MDBCol md="6">
                <div className="content-box">
                  <MDBTypography tag="h5">Latest Products</MDBTypography>
                  <MDBCardBody>
                    <div className="d-flex align-items-center">
                      <img
                        src="https://www.dropbox.com/static/images/logo.png"
                        alt="Dropbox"
                        className="img-thumbnail"
                      />
                      <div className="ml-3">
                        <MDBCardText>Dropbox</MDBCardText>
                        <MDBCardText className="text-muted">Updated 2 hours ago</MDBCardText>
                      </div>
                    </div>
                  </MDBCardBody>
                </div>
              </MDBCol>
              <MDBCol md="6">
                <div className="content-box">
                  <MDBTypography tag="h5">Latest Orders</MDBTypography>
                  <MDBCardBody>
                    <MDBCardText>Order Ref</MDBCardText>
                    <MDBCardText>Customer</MDBCardText>
                    <MDBCardText>Date</MDBCardText>
                    <MDBBtn outline color="dark" className="btn-edit">
                      New Entry
                    </MDBBtn>
                  </MDBCardBody>
                </div>
              </MDBCol>
            </div>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
