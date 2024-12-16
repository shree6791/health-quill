import React from 'react';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import PricingSection from '../components/Pricing';

const Home = () => {
  return (
    <>
      <Hero />
      <Benefits />
      <Testimonials />
      <PricingSection />
    </>
  );
};

export default Home;