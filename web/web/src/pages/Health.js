import React from 'react';
import '../index.css'
import Navbar from '../components/Navbar/Navbar';
import CovidStatistics from '../components/CovidStatistics';
import HeroHealthSection from '../components/HeroHealthSection';

function Health() {
  return (
    <div>
      <Navbar/>
      <CovidStatistics/>
      <HeroHealthSection/>
    </div>
  );
}

export default Health;
