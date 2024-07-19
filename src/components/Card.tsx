import React from 'react';

const Card: React.FC = () => {
  return (
    <div className="card-container">
      <div className="beats">
        <h1>EQ beats IQ</h1>
        <p>
          People with high emotional <br /> intelligence tend to be more successful.
        </p>
        <p>
          They are totally pursuits <br /> and have higher IQ levels.
        </p>
      </div>
      <h1 className="familiar-title">Does this sound familiar...</h1>
      <div className="emoji">
        <div className="card">
          <p>
            😀 People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships.
          </p>
        </div>
        <div className="card1">
          <p>
            😀 They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k more a year.
          </p>
        </div>
        <div className="card2">
          <p>
            😀 You argue with a colleague. You get angry and defensive, instead of staying open and working towards common ground.
          </p>
        </div>
        <div className="card3">
          <p>
            😀 You get a promotion at work. You question yourself and wonder when they'll realize you're an unqualified imposter, instead of trusting yourself and your abilities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
