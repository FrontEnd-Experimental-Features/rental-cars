'use client'

import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import { carCategories, CarCategory } from '../../types/car-categories';

// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarCategoryCard: React.FC<{ category: CarCategory }> = ({ category }) => (
  <div className="bg-white dark:bg-slate-700 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-all duration-300 mx-2">
    <div className="h-48 relative">
      <Image
        src={category.imageUrl}
        alt={category.name}
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">{category.name}</h3>
      <p className="text-gray-600 dark:text-gray-300">{category.description}</p>
      <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
        Explore
      </button>
    </div>
  </div>
);

const CategorySection: React.FC<{ title: string; categories: CarCategory[] }> = ({ title, categories }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="mb-16">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-12">
        Discover Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">{title} Categories</span>
      </h2>
      <Slider {...settings}>
        {categories.map((category) => (
          <CarCategoryCard key={category.id} category={category} />
        ))}
      </Slider>
    </div>
  );
};

const CarCategoriesGrid: React.FC = () => {
  const premiumCategories = carCategories.filter(category => category.type === 'premium');
  const budgetCategories = carCategories.filter(category => category.type === 'budget');

  return (
    <div className="py-12 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-900 dark:to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CategorySection title="Premium" categories={premiumCategories} />
        <CategorySection title="Budget-Friendly" categories={budgetCategories} />
      </div>
    </div>
  );
};

export default CarCategoriesGrid;
