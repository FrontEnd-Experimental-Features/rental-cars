export interface CarCategory {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export const carCategories: CarCategory[] = [
  {
    id: 'luxury-sedans',
    name: 'Luxury Sedans',
    description: 'Experience ultimate comfort and style',
    imageUrl: '/images/luxury-sedan.jpg', // You'll need to add these images to your public folder
  },
  {
    id: 'sporty-convertibles',
    name: 'Sporty Convertibles',
    description: 'Feel the thrill of the open road',
    imageUrl: '/images/sporty-convertible.jpg',
  },
  {
    id: 'spacious-suvs',
    name: 'Spacious SUVs',
    description: 'Perfect for family trips and adventures',
    imageUrl: '/images/spacious-suv.jpg',
  },
];
