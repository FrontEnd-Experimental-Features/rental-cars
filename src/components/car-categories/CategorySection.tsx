import React from 'react';
import Slider from 'react-slick';
import { CarCategory } from '../../types/car-categories';
import CarCategoryCard from './CarCategoryCard';

interface CategorySectionProps {
  title: string;
  categories: CarCategory[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ title, categories }) => {
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
      <div className="px-4">
        <Slider {...settings}>
          {categories.map((category) => (
            <div key={category.id} className="px-2">
              <CarCategoryCard category={category} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CategorySection;
