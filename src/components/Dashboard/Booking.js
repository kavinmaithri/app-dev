import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Assuming you have a CSS file for styling

export default function Bookings() {
    const [showEnquiryMessage, setShowEnquiryMessage] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState({
        budget: false,
        events: false,
        location: false,
        ratings: false,
    });

    const navigate = useNavigate();

    const openModal = (filter) => {
        setModalIsOpen((prev) => ({ ...prev, [filter]: true }));
    };

    const closeModal = (filter) => {
        setModalIsOpen((prev) => ({ ...prev, [filter]: false }));
    };

    const handleBookUsClick = () => {
        navigate('/ship');
    };

    const handleSendEnquiryClick = () => {
        setShowEnquiryMessage(true);
        setTimeout(() => setShowEnquiryMessage(false), 3000); // Hide message after 3 seconds
    };

    return (
        <div className="event-card-container">
            {showEnquiryMessage && (
                <div className="enquiry-message-container">
                    <p>Your enquiry has been sent!</p>
                </div>
            )}
            <div className="event-card">
                <div className="event-card-header">
                    <img src={`${process.env.PUBLIC_URL}/summa.jpg`} alt="Image 2" className="event-card-image" />
                    <div className="event-card-preferred">Most Preferred</div>
                </div>
                <div className="event-card-body">
                    <h3>D Cube Events</h3>
                    <p>Bangalore</p>
                    <div className="event-card-price">₹2,50,000</div>
                    <p>Starting Price</p>
                    <h3>Events type:</h3>
                    <p>All</p>
                    <div className="event-card-rating">
                        <span>⭐ 4.9</span>
                        <span>7 Reviews</span>
                    </div>
                    <div className="event-card-buttons">
                        <button className="enquiry-btn" onClick={handleSendEnquiryClick}>Send Enquiry</button>
                        <button className="contact-btn" onClick={handleBookUsClick}>Book us</button>
                    </div>
                </div>
            </div>
            {/* Repeat the card structure for other events */}
            <div className="event-card">
        <div className="event-card-header">
          <img src={`${process.env.PUBLIC_URL}/vows.jpg`} alt="Image 2" className="event-card-image" />
          <div className="event-card-preferred">Most Preferred</div>
         
        </div>
        <div className="event-card-body">
          <h3>The Phoenix Vows</h3>
          <p>Mumbai</p>
          <div className="event-card-price">₹2,50,000</div>
          <p>Starting Price</p>
          <h3>Events type:</h3>
          <p>Corporate</p>
          <div className="event-card-rating">
            <span>⭐ 4.9</span>
            <span>7 Reviews</span>
          </div>
          <div className="event-card-buttons">
            <button className="enquiry-btn">Send Enquiry</button>
            <button className="contact-btn">Book us</button>
          </div>
        </div>
      </div>

      {/* Repeat the card structure for other events */}
      
      <div className="event-card">
        <div className="event-card-header">
          <img src={`${process.env.PUBLIC_URL}/wed.jpg`} alt="Image 1" className="event-card-image" />
          <div className="event-card-preferred">Most Preferred</div>
        </div>
        <div className="event-card-body">
          <h3>Knot planners</h3>
          <p>Delhi</p>
          <div className="event-card-price">₹1,50,000</div>
          <p>Starting Price</p>
          <h3>Events type:</h3>
          <p>All</p>
          <div className="event-card-rating">
            <span>⭐ 5.0</span>
            <span>25 Reviews</span>
          </div>
          <div className="event-card-buttons">
            <button className="enquiry-btn">Send Enquiry</button>
            <button className="contact-btn">Book us</button>
          </div>
        </div>
      </div>
      <div className="event-card">
        <div className="event-card-header">
          <img src={`${process.env.PUBLIC_URL}/corp.jpg`} alt="Image 2" className="event-card-image" />
          <div className="event-card-preferred">Most Preferred</div>
        </div>
        <div className="event-card-body">
          <h3>Kris Events</h3>
          <p>Chennai</p>
          <div className="event-card-price">₹1,00,000</div>
          <p>Starting Price</p>
          <h3>Events type:</h3>
          <p>Family events</p>
          <div className="event-card-rating">
            <span>⭐ 4.9</span>
            <span>7 Reviews</span>
          </div>
          <div className="event-card-buttons">
            <button className="enquiry-btn">Send Enquiry</button>
            <button className="contact-btn">Book us</button>
          </div>
        </div>
      </div>
      <div className="event-card">
        <div className="event-card-header">
          <img src={`${process.env.PUBLIC_URL}/shower.jpg`} alt="Image 2" className="event-card-image" />
          <div className="event-card-preferred">Most Preferred</div>
        </div>
        <div className="event-card-body">
          <h3>Zero Degree Events</h3>
          <p>Trivandrum</p>
          <div className="event-card-price">₹5,00,000</div>
          <p>Starting Price</p>
          <h3>Events type:</h3>
          <p>Birthdays</p>
          <div className="event-card-rating">
            <span>⭐ 5.0</span>
            <span>106 Reviews</span>
          </div>
          <div className="event-card-buttons">
            <button className="enquiry-btn">Send Enquiry</button>
            <button className="contact-btn">Book us</button>
          </div>
        </div>
      </div>
      <div className="event-card">
        <div className="event-card-header">
          <img src={`${process.env.PUBLIC_URL}/hyb.jpg`} alt="Image 2" className="event-card-image" />
          <div className="event-card-preferred">Most Preferred</div>
        </div>
        <div className="event-card-body">
          <h3>Amohaa Events</h3>
          <p>Pune</p>
          <div className="event-card-price">₹1,00,000</div>
          <p>Starting Price</p>
          <h3>Events type:</h3>
          <p>Seminars</p>
          <div className="event-card-rating">
            <span>⭐ 5.0</span>
            <span>106 Reviews</span>
          </div>
          <div className="event-card-buttons">
            <button className="enquiry-btn">Send Enquiry</button>
            <button className="contact-btn">Book us</button>
          </div>
        </div>
      </div>
        </div>
    );
}
