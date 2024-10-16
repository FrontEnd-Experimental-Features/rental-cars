'use client'

import React from 'react';
import CarCategoriesGrid from '../components/car-categories/CarCategoriesGrid';
import HeroSection from '../components/HeroSection';
import { useSticky } from '../lib/useSticky';

const Home: React.FC = () => {
  const isSticky = useSticky(100);

  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection isSticky={isSticky} />
      <main className="container mx-auto px-4 py-12">
        <CarCategoriesGrid />
      </main>
    </div>
  );
}

export default Home;
