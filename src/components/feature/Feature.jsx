import React from 'react';
import './feature.css';

const Feature = ({ tittle, text }) => (
  <div className="gpt3_features-container_feature">
    <div className="gpt3_features-container_feature-tittle">
      <div />
      <h1>{tittle}</h1>
    </div>
    <div className="gpt3_features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;
