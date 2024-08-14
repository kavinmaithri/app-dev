import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBInput,
  MDBBtn
} from 'mdb-react-ui-kit';
import './Footer.css';

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-left'>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', height:"75px" }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://crystalplanners.com/'>
          CrystalPlanners.com
        </a>
      </div>
    </MDBFooter>
  );
}
