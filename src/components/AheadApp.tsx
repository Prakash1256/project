import React from 'react';

const AheadApp: React.FC = () => {
  return (
    <div
      className='ahead-app-container'
      style={{
        textAlign: 'center',
        padding: '80px',
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        justifyContent: 'space-around',
        background: 'rgb(250,232,220)',
        marginTop: '0px'


        
      }}
    >
      <div>
        <p
          className='fraust'
          style={{ color: 'black', position: 'relative', left: '-20px' }}
        >
          Built out of frustration
        </p>
        <h1 style={{ fontWeight: 'bold', fontSize: '60px', color: 'black' }}>
          Meet the ahead app
        </h1>
        <div
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            backgroundColor: '#e0e0e0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <span style={{ fontSize: '50px' }}>👻</span>
        </div>
      </div>
      <div>
        <p style={{ color: 'black', marginBottom: '40px' }}>
          A personalized pocket coach that provides bite-sized, <br />
          science-driven tools to boost emotional intelligence.
        </p>
        <p style={{ color: 'black' }}>
          Think of it as a pocket cheerleader towards a better, more fulfilling
          life.
        </p>
      </div>
    </div>
  );
};

export default AheadApp;
