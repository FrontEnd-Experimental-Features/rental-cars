import React from 'react';
import Slider from 'react-slick';
import { CarCategory } from '../../types/car-categories';
import CarCategoryCard from './CarCategoryCard';

interface CategorySectionProps {
  title: string;
  categories: CarCategory[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ title, categories }) => {
  const CustomArrow = ({ className, style, onClick, direction }: any) => (
    <div
      className={`${className} z-10 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200 ${direction === 'prev' ? 'left-0' : 'right-0'}`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-teal-500">
        <path strokeLinecap="round" strokeLinejoin="round" d={direction === 'prev' ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
      </svg>
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomArrow direction="prev" />,
    nextArrow: <CustomArrow direction="next" />,
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
      <h3 className="text-3xl font-semibold text-gray-900 mb-8">{title}</h3>
      <div className="px-4 relative">
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
