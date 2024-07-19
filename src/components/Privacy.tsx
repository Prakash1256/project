import React from "react";

const Privacy: React.FC = () => {
  return (
    <div className="container">
      <p style={{ color: "black" }}>Before you get started</p>
      <h1 style={{ color: "black" }}>We take privacy seriously</h1>
      <p style={{ color: "black" }}>
        We wont share your answers with anyone (and wont ever tell your friends what was said about you!)
      </p>
      <p>With love, team Alpha</p>
      <button className="button1">Start a test</button>
      <p style={{ color: "black" }}>Takes only 5 minutes</p>
    </div>
  );
};

export default Privacy;
