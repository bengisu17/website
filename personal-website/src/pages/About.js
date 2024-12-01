import React from 'react';
import Header from '../components/Header';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
      <Header />
      <div className="container mt-4">
        <AboutContent />
      </div>
    </div>
  );
};

export default About;


