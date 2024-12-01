import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';


const Home = () => {

  return (
    <div>
      <Header />
      <Hero />
      <div className="content">
        {/* ana sayfa için ek içerik eklenebilir */}
        <p>Welcome to the personal website of Professor John Doe! <br/> 

        </p>
      </div>
    </div>
  );
};

export default Home;