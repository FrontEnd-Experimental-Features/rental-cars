import React from 'react';
import Image from 'next/image';
import SearchForm from './search/SearchForm';

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-screen">
      <Image
        src="/images/homepage/head(3000x800).jpg"
        alt="Car rental hero image"
        fill
        priority
        className="object-cover hidden lg:block"
        sizes="100vw"
        quality={100}
      />
      <Image
        src="/images/homepage/head(2400x800).jpg"
        alt="Car rental hero image"
        fill
        priority
        className="object-cover hidden md:block lg:hidden"
        sizes="100vw"
        quality={100}
      />
      <Image
        src="/images/homepage/head(1984x800).jpg"
        alt="Car rental hero image"
        fill
        priority
        className="object-cover block md:hidden"
        sizes="100vw"
        quality={100}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center px-4">Welcome to Aegon Car Rentals</h1>
        <p className="text-xl md:text-2xl mb-8 text-center px-4">Experience luxury and comfort on your next journey</p>
        <div className="w-full max-w-4xl px-4">
          <SearchForm />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
