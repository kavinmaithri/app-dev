import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import Modal from 'react-modal';
import EventManagerProfile from '../EventManagerProfile/EventManagerProfile';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Dashboard = () => {
  const [eventDetails, setEventDetails] = useState([]);
  const [eventManagers, setEventManagers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredManagers, setFilteredManagers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch event details and manager profiles
    // Replace with actual API calls
    const fetchEventDetails = async () => {
      // Replace with API call
      setEventDetails([
        // Example data
        { id: 1, name: 'Event 1', date: '2024-08-01', location: 'Location 1' },
        { id: 2, name: 'Event 2', date: '2024-09-15', location: 'Location 2' },
      ]);
    };

    const fetchEventManagers = async () => {
      // Replace with API call
      setEventManagers([
        // Example data
        { id: 1, name: 'Manager 1', location: 'Location 1', expertise: 'Wedding' },
        { id: 2, name: 'Manager 2', location: 'Location 2', expertise: 'Corporate' },
      ]);
    };

    fetchEventDetails();
    fetchEventManagers();
  }, []);

  useEffect(() => {
    setFilteredManagers(
      eventManagers.filter(manager =>
        manager.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, eventManagers]);

  const handleEventClick = (id) => {
    navigate(`/event/${id}`);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const [modalIsOpen, setModalIsOpen] = useState({
    budget: false,
    events: false,
    location: false,
    ratings: false,
  });

  const openModal = (filter) => {
    setModalIsOpen((prev) => ({ ...prev, [filter]: true }));
  };

  const closeModal = (filter) => {
    setModalIsOpen((prev) => ({ ...prev, [filter]: false }));
  };

  return (
    <div className="dashboard">
      <div className="search-section">
        <input
          type="text"
          placeholder="Search event managers by name, location, expertise..."
          color='black'
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <Carousel showThumbs={false} autoPlay interval={3000} infiniteLoop>
        <div>
          <img src="/event_1.jpg" alt="Birthday Party" />
          <p className="legend">Wedding</p>
        </div>
        <div>
          <img src="/event_2.jpg" alt="Wedding" />
          <p className="legend">Birthday party</p>
        </div>
        <div>
          <img src="/event_3.jpg" alt="Baby Shower" />
          <p className="legend">Corporate Event</p>
        </div>
        <div>
          <img src="/event_4.jpg" alt="Corporate Event" />
          <p className="legend">Get together</p>
        </div>
      </Carousel>
      <section class="element-selector" data-element_type="section">
        <div class="container">
          <div class="column_element1">
            <div class="element-container">
              <img src="/dinner.jpg" alt="dinner"/>
            </div>
          </div>
          <div class="column_element2">
            <div class="content">
              <h2>Crystal planners are beyond your ordinary planners</h2>
              <p>We help you guys in making your events successful. Crystal planners specialize in connecting event organizers with event managers to make their event successful and happen in their budget. We specialise in the creation of extraordinary events for clients. We setup, plan, and manage every project from conception to execution.</p>
            </div>
            <div class="card">
            <div className="card-left">
        <div className="icon-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="icon"
          >
            <path
              fillRule="evenodd"
              d="M12 1.5a10.5 10.5 0 11-7.422 3.078 1.5 1.5 0 012.121 2.122 7.5 7.5 0 1010.603 10.604 1.5 1.5 0 012.122-2.122A10.48 10.48 0 0112 1.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="text-container">
          <h1>100+</h1>
          <p>Destinations</p>
        </div>
      </div>
      <div className="card-right">
        <ul>
          <li>Best Quality Services</li>
          <li>100% Satisfaction Guarantee</li>
          <li>Quality Control System</li>
          <li>Commitment to Customers</li>
          <li>Highly Professional Team</li>
        </ul>
      </div>
            </div>
          <div class="button-element" style={{maxWidth:'150px', display:"flex", justifyContent:"center", marginLeft:'250px'}}>
          <button className="events-button" style={{backgroundColor:"white",boxShadow:" 0 4px 6px rgba(0, 0, 0, 0.1)", borderRadius:'8px', color:"#333"}}onClick={() => navigate('/events')}>
            EVENTS
          </button>
          </div>
          </div>

        </div>
      </section>
      <div class="filt">
        <h2>Book event managers of your choice!</h2>
      </div>
    <div className="filter-bar">
      <div className="filters">
        <button className="filter-btn" onClick={() => openModal('budget')}>
          Budget
          <svg
            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium cityArrow mui-vubbuv"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="KeyboardArrowDownIcon"
          >
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </button>
        <Modal isOpen={modalIsOpen.budget} onRequestClose={() => closeModal('budget')}>
          <h2>Budget Options</h2>
          <button onClick={() => closeModal('budget')}>Close</button>
          {/* Add your budget options here */}
        </Modal>

        <button className="filter-btn" onClick={() => openModal('events')}>
          Events
          <svg
            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium cityArrow mui-vubbuv"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="KeyboardArrowDownIcon"
          >
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </button>
        <Modal isOpen={modalIsOpen.events} onRequestClose={() => closeModal('events')}>
          <h2>Event Options</h2>
          <button onClick={() => closeModal('events')}>Close</button>
          {/* Add your event options here */}
        </Modal>

        <button className="filter-btn" onClick={() => openModal('location')}>
          Location
          <svg
            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium cityArrow mui-vubbuv"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="KeyboardArrowDownIcon"
          >
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </button>
        <Modal isOpen={modalIsOpen.location} onRequestClose={() => closeModal('location')}>
          <h2>Location Options</h2>
          <button onClick={() => closeModal('location')}>Close</button>
          {/* Add your location options here */}
        </Modal>

        <button className="filter-btn" onClick={() => openModal('ratings')}>
          Ratings
          <svg
            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium cityArrow mui-vubbuv"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="KeyboardArrowDownIcon"
          >
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </button>
        <Modal isOpen={modalIsOpen.ratings} onRequestClose={() => closeModal('ratings')}>
          <h2>Ratings Options</h2>
          <button onClick={() => closeModal('ratings')}>Close</button>
          {/* Add your ratings options here */}
        </Modal>

        <button className="filter-btn">Shortlisted</button>
      </div>
      <button className="filter-btn filter-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L14 12.414V19a1 1 0 01-.553.894l-6 3A1 1 0 016 22V12.414L3.293 6.707A1 1 0 013 6V4z"
          />
        </svg>
        Filters
      </button>
    </div>
      <div className="event-card-container">
      <div className="event-card">
        <div className="event-card-header">
        <img src={`${process.env.PUBLIC_URL}/summa.jpg`} alt="Image 2" className="event-card-image" />
          <div className="event-card-preferred">Most Preferred
          </div>
          <button className="shortlist-btn">Shortlist</button>
        </div>
        <div className="event-card-body">
          <h3>D Cube Events</h3>
          <p>Bangalore</p>
          <div className="event-card-price">₹2,50,000</div>
          <p>Starting Price</p>
          <div className="event-card-rating">
            <span>⭐ 4.9</span>
            <span>7 Reviews</span>
          </div>
          <div className="event-card-buttons">
            <button className="enquiry-btn">Send Enquiry</button>
            <button className="contact-btn">View Contact</button>
          </div>
        </div>
      </div>
      <div className="event-card">
        <div className="event-card-header">
        <img src={`${process.env.PUBLIC_URL}/vows.jpg`} alt="Image 2" className="event-card-image" />
          <div className="event-card-preferred">Most Preferred</div>
          <button className="shortlist-btn">Shortlist</button>
        </div>
        <div className="event-card-body">
          <h3>The Phoenix Vows</h3>
          <p>Mumbai</p>
          <div className="event-card-price">₹2,50,000</div>
          <p>Starting Price</p>
          <div className="event-card-rating">
            <span>⭐ 4.9</span>
            <span>7 Reviews</span>
          </div>
          <div className="event-card-buttons">
            <button className="enquiry-btn">Send Enquiry</button>
            <button className="contact-btn">View Contact</button>
          </div>
        </div>
      </div>
      <div className="event-card">
        <div className="event-card-header">
        <img src={`${process.env.PUBLIC_URL}/vows.jpg`} alt="Image 2" className="event-card-image" />
          <div className="event-card-preferred">Most Preferred</div>
          <button className="shortlist-btn">Shortlist</button>
        </div>
        <div className="event-card-body">
          <h3>The Phoenix Vows</h3>
          <p>Mumbai</p>
          <div className="event-card-price">₹2,50,000</div>
          <p>Starting Price</p>
          <div className="event-card-rating">
            <span>⭐ 4.9</span>
            <span>7 Reviews</span>
          </div>
          <div className="event-card-buttons">
            <button className="enquiry-btn">Send Enquiry</button>
            <button className="contact-btn">View Contact</button>
          </div>
        </div>
      </div>
      <div className="event-card">
        <div className="event-card-header">
        <img src={`${process.env.PUBLIC_URL}/vows.jpg`} alt="Image 2" className="event-card-image" />
          <div className="event-card-preferred">Most Preferred</div>
          <button className="shortlist-btn">Shortlist</button>
        </div>
        <div className="event-card-body">
          <h3>The Phoenix Vows</h3>
          <p>Mumbai</p>
          <div className="event-card-price">₹2,50,000</div>
          <p>Starting Price</p>
          <div className="event-card-rating">
            <span>⭐ 4.9</span>
            <span>7 Reviews</span>
          </div>
          <div className="event-card-buttons">
            <button className="enquiry-btn">Send Enquiry</button>
            <button className="contact-btn">View Contact</button>
          </div>
        </div>
      </div>
      {/* Repeat the card structure for other events */}
      <div className="event-card">
        <div className="event-card-header">
        <img src={`${process.env.PUBLIC_URL}/wed.jpg`} alt="Image 1" className="event-card-image" />
          <div className="event-card-preferred">Most Preferred</div>
          <button className="shortlist-btn">Shortlist</button>
        </div>
        <div className="event-card-body">
          <h3>Knot planners</h3>
          <p>Mumbai</p>
          <div className="event-card-price">₹1,50,000</div>
          <p>Starting Price</p>
          <div className="event-card-rating">
            <span>⭐ 5.0</span>
            <span>25 Reviews</span>
          </div>
          <div className="event-card-buttons">
            <button className="enquiry-btn">Send Enquiry</button>
            <button className="contact-btn">View Contact</button>
          </div>
        </div>
      </div>

      <div className="event-card">
        <div className="event-card-header">
        <img src={`${process.env.PUBLIC_URL}/shower.jpg`} alt="Image 2" className="event-card-image" />
          <div className="event-card-preferred">Most Preferred</div>
          <button className="shortlist-btn">Shortlist</button>
        </div>
        <div className="event-card-body">
          <h3>Zero Degree Events</h3>
          <p>Chennai</p>
          <div className="event-card-price">₹5,00,000</div>
          <p>Starting Price</p>
          <div className="event-card-rating">
            <span>⭐ 5.0</span>
            <span>106 Reviews</span>
          </div>
          <div className="event-card-buttons">
            <button className="enquiry-btn">Send Enquiry</button>
            <button className="contact-btn">View Contact</button>
          </div>
        </div>
      </div>
    </div>

      </div>
      
  );
};

export default Dashboard;
