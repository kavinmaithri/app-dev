import React from 'react';
import './styles.css';
import Footer from './Footer';

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
      <div classname="content" style={{marginLeft:"200px", marginRight:"200px"}}>
        <div classname="text-head" style={{textAlign:"left",  marginTop:"100px"}}>
          <h1>Planning Pod’s all-in-one platform gives you<br/> the power to...</h1>
        </div>
        <div className='content-box1'style={{display:"flex", flexDirection:"row"}} >
          <div>
          <img src="/tools.png" alt="image" data-aos="faded-right" classname="img-raised" style={{height:"250px"}}/>
          </div>
          <div className='content-text'style={{width:"400px", display:"flex", flexDirection:"column", textAlign:"left", marginLeft:"50px"}}>
          <div className="icon-text"style={{display:"flex", flexDirection:"row"}}>
            <h2>Track every detail in one convenient place</h2>
          </div>
          <div>
            <p>Spreading your event data across countless spreadsheets, stand-alone apps and emails just makes your job harder. We integrate 20+ event-specific tools into one platform so you and your team can access every detail throughout the entire event lifecycle - plus effortlessly share key information with clients.</p>
          </div>
          
          </div>
        </div>
        <div className='content-box-2' style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", width: "100%" }}>
  <div className='content-text' style={{ width: "400px", display: "flex", flexDirection: "column", textAlign: "left", position: "relative" }}>
    <div className="icon-text-2" style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
      <h2>Easily share ideas and collaborate</h2>
    </div>
    <div>
      <p>Our tools make it easy to communicate and coordinate with others in real-time. Centralize your communications with a full-featured event CRM and integrated email tools. Easily collaborate online with staff, contractors and vendors. Automate and improve client interactions.</p>
    </div>
  </div>
  <div>
    <img src="/chat.png" alt="image" data-aos="fade-right" className="img-raised" style={{ height: "250px", marginLeft: "20px", marginRight: "75px" }} />
  </div>
</div>
        <div className='content-box-3'style={{display:"flex", flexDirection:"row"}} >
          <div>
          <img src="/work.png" alt="image" data-aos="faded-right" classname="img-raised" style={{height:"250px"}}/>
          </div>
          <div className='content-text'style={{width:"400px", display:"flex", flexDirection:"column", textAlign:"left", marginLeft:"50px"}}>
          <div className="icon-text-3"style={{display:"flex", flexDirection:"row"}}>
            <h2>Track every detail in one convenient place</h2>
          </div>
          <div>
            <p>Spreading your event data across countless spreadsheets, stand-alone apps and emails just makes your job harder. We integrate 20+ event-specific tools into one platform so you and your team can access every detail throughout the entire event lifecycle - plus effortlessly share key information with clients.</p>
          </div>
          
          </div>
        </div>
</div>
      <br></br>
      <br></br>
        <h3>LET US LIGHTEN YOUR LOAD</h3>
        <h1>More ways we simplify how you manage events</h1>
        <br></br>
        <div className="text-cont"  >
            <div className="text1" width="450px" style={{textAlign:"left"}}>
            <p><b>Integrate with hundreds of platforms like</b> Google, Quickbooks, Xero, Salesforce, MailChimp, Slack and EventBrite and share data across apps via Zapier.</p>
            <p><b>Mobile-friendly version </b>so you can log in via the Web browser of any computer, tablet or smartphone and access your account on-the-go.</p>
            <p><b>Reporting and Dashborad</b> that give you an up-to-the-minute snapshot of hundreds of data points and enable you to make better decisions faster.</p>
            </div>
            <img src="/tab.png" alt="tab" style={{height:"200px"}}/>
            <div className="text2" style={{textAlign:"left"}}>
                <p><b>Account customisation</b> including branded account and document downloads plus templates for floor plans, schedules, task lists, budgets and more.</p>
                <p><b>Customer Support Resources</b> so you can get up to speed fast, including email/chat/phone support, online help portal and online training (select packages).</p>
                <p><b>Data Security and privacy</b> like at-rest and in-transit data encryption, server-side firewall protection, daily remote backups and PCI payment compliance.</p>
            </div>
        </div>
        <Footer/>
    </div>
  );
}

export default HomePage;
