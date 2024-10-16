'use client'

import React, { useState } from 'react';
import { FaSearch, FaMapMarkerAlt, FaCalendarAlt, FaClock } from 'react-icons/fa';

const locations = ['LAX', 'SFO', 'NVD', 'PHX', 'NYC', 'MIA', 'CHI', 'HOU', 'ATL', 'BOS'];

interface SearchFormProps {
  isSticky?: boolean;
}

const SearchForm: React.FC<SearchFormProps> = ({ isSticky = false }) => {
  const [location, setLocation] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [fromTime, setFromTime] = useState('');
  const [untilDate, setUntilDate] = useState('');
  const [untilTime, setUntilTime] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log({ location, fromDate, fromTime, untilDate, untilTime });
  };

  return (
    <form onSubmit={handleSubmit} className={`bg-white rounded-lg shadow-md p-4 flex flex-wrap items-center justify-between ${isSticky ? 'sticky top-14 z-40' : ''}`}>
      <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
        <FaMapMarkerAlt className="text-gray-400 mr-2" />
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full md:w-auto bg-transparent border-b border-gray-300 focus:border-teal-500 text-gray-700 py-2 px-3 leading-tight focus:outline-none"
          required
        >
          <option value="">Where</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>
      </div>
      <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
        <FaCalendarAlt className="text-gray-400 mr-2" />
        <input
          type="date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
          className="bg-transparent border-b border-gray-300 focus:border-teal-500 text-gray-700 py-2 px-3 leading-tight focus:outline-none"
          required
        />
      </div>
      <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
        <FaClock className="text-gray-400 mr-2" />
        <input
          type="time"
          value={fromTime}
          onChange={(e) => setFromTime(e.target.value)}
          className="bg-transparent border-b border-gray-300 focus:border-teal-500 text-gray-700 py-2 px-3 leading-tight focus:outline-none"
          required
        />
      </div>
      <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
        <FaCalendarAlt className="text-gray-400 mr-2" />
        <input
          type="date"
          value={untilDate}
          onChange={(e) => setUntilDate(e.target.value)}
          className="bg-transparent border-b border-gray-300 focus:border-teal-500 text-gray-700 py-2 px-3 leading-tight focus:outline-none"
          required
        />
      </div>
      <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
        <FaClock className="text-gray-400 mr-2" />
        <input
          type="time"
          value={untilTime}
          onChange={(e) => setUntilTime(e.target.value)}
          className="bg-transparent border-b border-gray-300 focus:border-teal-500 text-gray-700 py-2 px-3 leading-tight focus:outline-none"
          required
        />
      </div>
      <button type="submit" className="w-full md:w-auto bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 flex items-center justify-center">
        <FaSearch className="mr-2" />
        Search
      </button>
    </form>
  );
};

export default SearchForm;
