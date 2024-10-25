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
        <div className="w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <SearchForm />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
