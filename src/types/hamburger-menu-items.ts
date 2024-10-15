import { MenuCategory } from '../components/header-components/navigation-types';

export const menuItems: MenuCategory[] = [
  {
    title: "Reservations",
    items: [
      { label: 'Make a Reservation', href: '/reservations' },
      { label: 'View/Modify/Cancel', href: '/manage-booking' },
      { label: 'Get a Receipt', href: '/receipt' },
    ]
  },
  {
    title: "Vehicles",
    items: [
      { label: 'Car Guide', href: '/car-guide' },
      { label: 'Luxury Cars', href: '/luxury-cars' },
      { label: 'Special Offers', href: '/special-offers' },
    ]
  },
  {
    title: "Locations",
    items: [
      { label: 'Find a Location', href: '/locations' },
      { label: 'Airport Rentals', href: '/airport-rentals' },
      { label: 'International Rentals', href: '/international-rentals' },
    ]
  },
  {
    title: "Deals",
    items: [
      { label: 'Current Promotions', href: '/promotions' },
      { label: 'Last Minute Deals', href: '/last-minute-deals' },
      { label: 'Partner Offers', href: '/partner-offers' },
    ]
  }
];
