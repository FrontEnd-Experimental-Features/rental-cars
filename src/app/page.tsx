'use client'

import React from 'react';
import CarCategoriesGrid from '../components/car-categories/CarCategoriesGrid';
import SearchForm from '../components/search/SearchForm';
import { useSticky } from '../lib/useSticky';

const Home: React.FC = () => {
  const isSticky = useSticky(100); // You can adjust the threshold as needed

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-blue-100 dark:from-slate-900 dark:to-slate-800 transition-all duration-300">
      <main className="flex-grow container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h2 className="text-5xl font-bold text-blue-800 dark:text-blue-300 mb-4">Welcome to Aegon Car Rentals</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Experience luxury and comfort on your next journey</p>
        </section>
        <SearchForm isSticky={isSticky} />
        <div className="mt-16">
          <CarCategoriesGrid />
        </div>
      </main>
    </div>
  );
}

export default Home;
