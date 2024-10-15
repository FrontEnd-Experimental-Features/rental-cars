export interface CarCategory {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  type: 'premium' | 'budget';
}

export const carCategories: CarCategory[] = [
  // Premium Categories
  {
    id: 'luxury-sedans',
    name: 'Luxury Sedans',
    description: 'Experience ultimate comfort and style',
    imageUrl: '/images/luxury-sedan.jpg',
    type: 'premium'
  },
  {
    id: 'sporty-convertibles',
    name: 'Sporty Convertibles',
    description: 'Feel the thrill of the open road',
    imageUrl: '/images/sporty-convertible.jpg',
    type: 'premium'
  },
  {
    id: 'spacious-suvs',
    name: 'Spacious SUVs',
    description: 'Perfect for family trips and adventures',
    imageUrl: '/images/spacious-suv.jpg',
    type: 'premium'
  },
  {
    id: 'electric-luxury',
    name: 'Electric Luxury',
    description: 'Eco-friendly luxury with cutting-edge technology',
    imageUrl: '/images/electric-luxury.jpg',
    type: 'premium'
  },
  {
    id: 'exotic-supercars',
    name: 'Exotic Supercars',
    description: 'Experience the pinnacle of automotive engineering',
    imageUrl: '/images/exotic-supercar.jpg',
    type: 'premium'
  },
  // Budget-Friendly Categories
  {
    id: 'economy-cars',
    name: 'Economy Cars',
    description: 'Efficient and affordable for city driving',
    imageUrl: '/images/economy-car.jpg',
    type: 'budget'
  },
  {
    id: 'compact-hatchbacks',
    name: 'Compact Hatchbacks',
    description: 'Easy to park and great on gas',
    imageUrl: '/images/compact-hatchback.jpg',
    type: 'budget'
  },
  {
    id: 'midsize-sedans',
    name: 'Midsize Sedans',
    description: 'Balanced comfort and economy',
    imageUrl: '/images/midsize-sedan.jpg',
    type: 'budget'
  },
  {
    id: 'budget-suvs',
    name: 'Budget SUVs',
    description: 'Spacious and affordable for family trips',
    imageUrl: '/images/budget-suv.jpg',
    type: 'budget'
  },
  {
    id: 'electric-economy',
    name: 'Electric Economy',
    description: 'Eco-friendly and cost-effective city driving',
    imageUrl: '/images/electric-economy.jpg',
    type: 'budget'
  }
];
