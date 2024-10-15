import React from 'react';
import Slider from 'react-slick';
import { CarCategory } from '../../types/car-categories';
import CarCategoryCard from './CarCategoryCard';
import CustomArrow from './CustomArrow';

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
