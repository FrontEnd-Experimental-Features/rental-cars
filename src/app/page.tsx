'use client'

import React from 'react';
import CarCategoriesGrid from '../components/car-categories/CarCategoriesGrid';
import HeroSection from '../components/HeroSection';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      <main className="container mx-auto px-4 py-12">
        <CarCategoriesGrid />
      </main>
    </div>
  );
}

export default Home;
