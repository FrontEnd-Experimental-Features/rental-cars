'use client'

import React from 'react';
import HeroSection from '../components/HeroSection';
import CarCategoryList from '../components/car-categories/CarCategoryList';

const HomePage: React.FC = () => {  
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      <main className="container mx-auto px-4 py-12">
        <CarCategoryList />
      </main>
    </div>
  );
};

export default HomePage;
