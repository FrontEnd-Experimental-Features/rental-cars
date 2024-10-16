'use client'

import React, { useState, useEffect, useRef } from 'react';
import { FaSearch, FaMapMarkerAlt, FaCalendarAlt, FaClock } from 'react-icons/fa';
import { useSearchForm } from '../../lib/search/useSearchForm';
import { locations, LocationData } from '../../lib/search/constants';

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

  const [inputValue, setInputValue] = useState(location || '');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.length > 1) {
      const newSuggestions = Object.entries(locations as LocationData)
        .flatMap(([state, cities]) => 
          cities.map(city => `${city}, ${state}`)
        )
        .filter(loc => loc.toLowerCase().includes(value.toLowerCase()))
        .slice(0, 5);
      setSuggestions(newSuggestions);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setLocation(suggestion);
    setShowSuggestions(false);
  };

  const handleInputBlur = () => {
    setTimeout(() => {
      if (!suggestions.includes(inputValue)) {
        setInputValue(location || '');
      }
      setShowSuggestions(false);
    }, 200);
  };

  console.log('Render - inputValue:', inputValue, 'location:', location);

  return (
    <form onSubmit={handleSubmit} className={`bg-white rounded-lg shadow-md p-4 ${isSticky ? 'sticky top-14 z-40' : ''}`}>
      <div className="flex flex-wrap -mx-2">
        <div className="w-full sm:w-1/2 md:w-1/5 px-2 mb-4 md:mb-0">
          <div className="flex items-center relative">
            <FaMapMarkerAlt className="text-gray-400 mr-2" />
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onFocus={() => setShowSuggestions(true)}
              onBlur={handleInputBlur}
              placeholder="Where"
              className="w-full bg-transparent border-b border-gray-300 focus:border-teal-500 text-gray-700 py-2 pr-3 leading-tight focus:outline-none"
              required
            />
            {showSuggestions && suggestions.length > 0 && (
              <ul className="absolute left-0 right-0 top-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-50 max-h-60 overflow-y-auto">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                    onMouseDown={(e) => {
                      e.preventDefault();
                      handleSuggestionClick(suggestion);
                    }}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
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
