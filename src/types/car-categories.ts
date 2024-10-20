export interface CarCategory {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  type: string; // This can be 'premium', 'budget', or any other category type
}

export const carCategories: CarCategory[] = [
  // Premium Categories
  {
    id: 'luxury-sedans',
    name: 'Luxury Sedans',
    description: 'Experience ultimate comfort and style',
    imageUrl: '/images/carCategories/luxury-sedan.png',
    type: 'premium' 
  },
  {
    id: 'sporty-convertibles',
    name: 'Sporty Convertibles',
    description: 'Feel the thrill of the open road',
    imageUrl: '/images/carCategories/sporty-convertible.png',
    type: 'premium'
  },
  {
    id: 'spacious-suvs',
    name: 'Spacious SUVs',
    description: 'Perfect for family trips and adventures',
    imageUrl: '/images/carCategories/spacious-suv.png',
    type: 'premium'
  },
  {
    id: 'electric-luxury',
    name: 'Electric Luxury',
    description: 'Eco-friendly luxury with cutting-edge technology',
    imageUrl: '/images/carCategories/electric-luxury.png',
    type: 'premium'
  },
  {
    id: 'exotic-supercars',
    name: 'Exotic Supercars',
    description: 'Experience the pinnacle of automotive engineering',
    imageUrl: '/images/carCategories/exotic-supercar.png',
    type: 'premium'
  },
  // Budget-Friendly Categories
  {
    id: 'economy-cars',
    name: 'Economy Cars',
    description: 'Efficient and affordable for city driving',
    imageUrl: '/images/carCategories/economy-car.png',
    type: 'budget'
  },
  {
    id: 'compact-hatchbacks',
    name: 'Compact Hatchbacks',
    description: 'Easy to park and great on gas',
    imageUrl: '/images/carCategories/compact-hatchbacks.png',
    type: 'budget'
  },
  {
    id: 'midsize-sedans',
    name: 'Midsize Sedans',
    description: 'Balanced comfort and economy',
    imageUrl: '/images/carCategories/midsize-sedan.png',
    type: 'budget'
  },
  {
    id: 'budget-suvs',
    name: 'Budget SUVs',
    description: 'Spacious and affordable for family trips',
    imageUrl: '/images/carCategories/budget-suv.png',
    type: 'budget'
  },
  {
    id: 'electric-economy',
    name: 'Electric Economy',
    description: 'Eco-friendly and cost-effective city driving',
    imageUrl: '/images/carCategories/electric-economy.png',
    type: 'budget'
  }
];
