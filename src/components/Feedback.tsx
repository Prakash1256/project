import React from 'react';

const Feedback: React.FC = () => {
  return (
    <div className="feedback-container">
      <p className="feedback-text">Let your friends, family, and co-workers (anonymously) rate your social skills.</p>
      <h1 className="feedback-title">Ever wondered what others think of you?</h1>
      <div className="feedback-steps">
        <div className="feedback-step">
          <h1>1</h1>
          <p>Answers questions on your social skills</p>
        </div>
        <div className="feedback-step">
          <h1>2</h1>
          <p>Let others anonymously answer the same questions about you.</p>
        </div>
        <div className="feedback-step">
          <h1>3</h1>
          <p>Find out where you and others see things the same way - and where not!</p>
        </div>
      </div>
      <div className="feedback-circles">
        <div className="circle you-circle">
          <span>You</span>
        </div>
        <div className="circle anonymous1-circle">
          <span>Anonymous1</span>
        </div>
        <div className="circle anonymous2-circle">
          <span>Anonymous2</span>
        </div>
        <div className="circle anonymous3-circle">
          <span>Anonymous3</span>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
