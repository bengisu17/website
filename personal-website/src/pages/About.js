import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';


const About = () => {
  // LoremIpsum nesnesini oluşturuyoruz


  return (
    <div>
      <Header />
      <Hero />
      <div className="content">
        {/* Ana sayfa için ek içerik buraya eklenebilir */}
        <p>Welcome to the personal website of Professor John Doe! <br/> 

        </p>
      </div>
    </div>
  );
};

export default About;

