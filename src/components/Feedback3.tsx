import React from 'react';

const Feedback3: React.FC = () => {
  return (
    <div style={{ background: "rgb(255, 255, 255)", marginTop: "0px", padding: "50px" }}>
      <h1 className="open-vacancy-title">Open Vacancy</h1>
      <div className="vacancies-container">
        <div className="vacancy-card">
          <h1>Senior full-stack</h1>
          <p>. Full-time position</p>
          <p>. Berlin or Remote</p>
          <p>. 65k-85k</p>
        </div>
        <div className="vacancy-card">
          <h1>Senior Designer</h1>
          <p>. Senior Designer</p>
          <p>. Berlin or Remote</p>
          <p>. 65k-85k</p>
        </div>
        <div className="vacancy-card">
          <h1>Super Intern</h1>
          <p>. Super Intern</p>
          <p>. Berlin or Remote</p>
          <p>. 65k-85k</p>
        </div>
      </div>
      <div className="company-info">
        <h1>AHEAD</h1>
        <p>📍 AuguststraBe 26 1007 Berlin</p>
        <p>✉️ high@aheadApp.com</p>
        <button className="download-button">Download on the App Store</button>
      </div>
    </div>
  );
}

export default Feedback3;
