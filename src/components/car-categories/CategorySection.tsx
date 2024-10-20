import React from 'react';
import Slider from 'react-slick';
import CarCategoryCard from './CarCategoryCard';
import CustomArrow from './CustomArrow';
import { CarCategory } from '../../types/car';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface CategorySectionProps {
  title: string;
  categories: CarCategory[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ title, categories }) => {
  console.log(`Rendering ${title} section with ${categories.length} categories`);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ],
    // Add these properties for smoother infinite scrolling
    centerMode: false,
    variableWidth: false,
    adaptiveHeight: false
  };

  return (
    <div className="mb-16 relative">
      <h2 className="text-3xl font-bold mb-8 text-teal-700 border-b-2 border-teal-500 pb-2 inline-block">{title}</h2>
      <div className="slider-container">
        <Slider {...settings}>
          {categories.map((category) => (
            <div key={category.id} className="px-3">
              <CarCategoryCard category={category} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CategorySection;
