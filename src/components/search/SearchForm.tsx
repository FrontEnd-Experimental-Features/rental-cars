'use client'

import React from 'react';
import { FaSearch, FaMapMarkerAlt, FaCalendarAlt, FaClock } from 'react-icons/fa';
import { useSearchForm } from '../../lib/search/useSearchForm';
import { locations } from '../../lib/search/constants';

interface SearchFormProps {
  isSticky?: boolean;
}

const SearchForm: React.FC<SearchFormProps> = ({ isSticky = false }) => {
  const {
    location,
    setLocation,
    fromDate,
    fromTime,
    setFromTime,
    untilDate,
    untilTime,
    setUntilTime,
    minDate,
    handleFromDateChange,
    handleUntilDateChange,
    handleSubmit
  } = useSearchForm();

  return (
    <form onSubmit={handleSubmit} className={`bg-white rounded-lg shadow-md p-4 ${isSticky ? 'sticky top-14 z-40' : ''}`}>
      <div className="flex flex-wrap -mx-2">
        <div className="w-full sm:w-1/2 md:w-1/5 px-2 mb-4 md:mb-0">
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-gray-400 mr-2" />
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full bg-transparent border-b border-gray-300 focus:border-teal-500 text-gray-700 py-2 pr-3 leading-tight focus:outline-none"
              required
            >
              <option value="">Where</option>
              {locations.map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/5 px-2 mb-4 md:mb-0">
          <div className="flex items-center">
            <FaCalendarAlt className="text-gray-400 mr-2" />
            <input
              type="date"
              value={fromDate}
              onChange={handleFromDateChange}
              min={minDate}
              className="w-full bg-transparent border-b border-gray-300 focus:border-teal-500 text-gray-700 py-2 pr-3 leading-tight focus:outline-none"
              required
            />
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/5 px-2 mb-4 md:mb-0">
          <div className="flex items-center">
            <FaClock className="text-gray-400 mr-2" />
            <input
              type="time"
              value={fromTime}
              onChange={(e) => setFromTime(e.target.value)}
              className="w-full bg-transparent border-b border-gray-300 focus:border-teal-500 text-gray-700 py-2 pr-3 leading-tight focus:outline-none"
              required
            />
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/5 px-2 mb-4 md:mb-0">
          <div className="flex items-center">
            <FaCalendarAlt className="text-gray-400 mr-2" />
            <input
              type="date"
              value={untilDate}
              onChange={handleUntilDateChange}
              min={fromDate || minDate}
              className="w-full bg-transparent border-b border-gray-300 focus:border-teal-500 text-gray-700 py-2 pr-3 leading-tight focus:outline-none"
              required
            />
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/5 px-2 mb-4 md:mb-0 flex items-center">
          <div className="flex items-center flex-grow mr-2">
            <FaClock className="text-gray-400 mr-2" />
            <input
              type="time"
              value={untilTime}
              onChange={(e) => setUntilTime(e.target.value)}
              className="w-full bg-transparent border-b border-gray-300 focus:border-teal-500 text-gray-700 py-2 pr-3 leading-tight focus:outline-none"
              required
            />
          </div>
          <button type="submit" className="w-12 h-12 bg-teal-500 hover:bg-teal-600 text-white rounded-full transition-colors duration-300 flex items-center justify-center flex-shrink-0">
            <FaSearch className="text-xl" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
