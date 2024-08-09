import React from 'react';
import './styles.css';

const HomePage = () => {
  return (
    <div className="home"> 
      <h1>The #1 all-in-one event management software<br></br> for event planners and venues</h1>
      <h3>See how +20K professionals save 62+ hours/month and streamline processes<br></br> and communications with our complete online event management software</h3>
     <div className="video-container">
     <video autoPlay muted loop playsInline width="100%" height="100%" controls>
       <source src={`${process.env.PUBLIC_URL}/video.mp4`} type="video/mp4" />
       Your browser does not support the video tag.
     </video>
   </div>
      <br></br>
      <h1>Two Solutions.... One powerful platform</h1>
      <div className="image-container">
        <div className="image-box">
          <img src={`${process.env.PUBLIC_URL}/venue.jpg`} alt="Image 1" />
          <h2>Venue Management software</h2>
          <p>Simplify how you manage event bookings<br></br> while boosting sales and enhancing <br></br>collaboration among staff and clients.</p>
          <ul className='tick-list'>
            <li>Banquet Halls</li>
<li>Caterers</li>
<li>Event Centers</li>
<li>Conference Centers</li>
<li>Golf Clubs</li>
<li>Hotels & B&Bs</li>
<li>Non-Profit Venues</li>
<li>Restaurants & Bars</li>
<li>Wedding Venues</li>
<li>Wineries & Breweries</li>
          </ul>
        </div>
        <div className="image-box">
          <img src={`${process.env.PUBLIC_URL}/event.jpg`} alt="Image 2" />
          <h2>Event planning software</h2>
          <p>Easily track hundreds of event details in<br></br> real-time - including schedules and event<br></br> registrations - and keep everyone on the<br></br> same page</p>
          <ul className='tick-list'>
            <li>Seminars & Classes</li>
<li>Conferences</li>
<li>Corporate Events</li>
<li>Fundraising Events</li>
<li>Galas</li>
<li>Higher Ed Events</li>
<li>Meetings</li>
<li>School Events</li>
<li>Seminars</li>
<li>Weddings</li>
          </ul>
        </div>
      </div>
      <br></br>
      <br></br>
        <h3>LET US LIGHTEN YOUR LOAD</h3>
        <h1>More ways we simplify how you manage events</h1>
        <br></br>
        <div className="text-cont"  >
            <div className="text1" width="450px">
            <p><b>Integrate with hundreds of platforms like</b> Google, Quickbooks, Xero, Salesforce, MailChimp, Slack and EventBrite and share data across apps via Zapier.</p>
            <p><b>Mobile-friendly version </b>so you can log in via the Web browser of any computer, tablet or smartphone and access your account on-the-go.</p>
            <p><b>Reporting and Dashborad</b> that give you an up-to-the-minute snapshot of hundreds of data points and enable you to make better decisions faster.</p>
            </div>
            <div className="text2">
                <p><b>Account customisation</b> including branded account and document downloads plus templates for floor plans, schedules, task lists, budgets and more.</p>
                <p><b>Customer Support Resources</b> so you can get up to speed fast, including email/chat/phone support, online help portal and online training (select packages).</p>
                <p><b>Data Security and privacy</b> like at-rest and in-transit data encryption, server-side firewall protection, daily remote backups and PCI payment compliance.</p>
            </div>
        </div>
        <h2>Contact Us</h2>
        <p>Email: contact@planningpod.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 1234 Event St, City, State</p>
    </div>
  );
}

export default HomePage;
