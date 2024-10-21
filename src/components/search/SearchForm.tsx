'use client'

import React, { useState, useEffect, useRef } from 'react';
import { FaSearch, FaMapMarkerAlt, FaCalendarAlt, FaClock } from 'react-icons/fa';
import { useSearchForm } from '../../lib/search/useSearchForm';

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

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.length > 1) {
      try {
        const response = await fetch(`/api/suggestions?query=${encodeURIComponent(value)}`);
        const data = await response.json();
        setSuggestions(data.suggestions);
        setShowSuggestions(true);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
        setSuggestions([]);
        setShowSuggestions(false);
      }
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

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 relative">
      <form id="search-form" onSubmit={handleSubmit} className={`bg-white rounded-lg shadow-md p-4 pr-16 ${isSticky ? 'sticky top-14 z-40' : ''}`}>
        <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-2">
          <div className="w-full lg:w-1/3 lg:pr-2">
            <div className="flex items-center relative">
              <FaMapMarkerAlt className="text-gray-400 mr-2 flex-shrink-0" />
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
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700 truncate"
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
          <div className="flex flex-wrap lg:flex-nowrap lg:w-2/3 gap-2 lg:gap-1">
            <div className="w-full sm:w-1/2 lg:w-1/4">
              <div className="flex flex-col">
                <label className="text-xs text-gray-500 mb-1 flex items-center">
                  <FaCalendarAlt className="text-gray-400 mr-1 flex-shrink-0" />
                  From Date
                </label>
                <input
                  type="date"
                  value={fromDate}
                  onChange={handleFromDateChange}
                  min={minDate}
                  className="w-full bg-transparent border-b border-gray-300 focus:border-teal-500 text-gray-700 py-1 leading-tight focus:outline-none"
                  required
                />
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4">
              <div className="flex flex-col">
                <label className="text-xs text-gray-500 mb-1 flex items-center">
                  <FaClock className="text-gray-400 mr-1 flex-shrink-0" />
                  From Time
                </label>
                <input
                  type="time"
                  value={fromTime}
                  onChange={(e) => setFromTime(e.target.value)}
                  className="w-full bg-transparent border-b border-gray-300 focus:border-teal-500 text-gray-700 py-1 leading-tight focus:outline-none"
                  required
                />
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4">
              <div className="flex flex-col">
                <label className="text-xs text-gray-500 mb-1 flex items-center">
                  <FaCalendarAlt className="text-gray-400 mr-1 flex-shrink-0" />
                  To Date
                </label>
                <input
                  type="date"
                  value={untilDate}
                  onChange={handleUntilDateChange}
                  min={fromDate || minDate}
                  className="w-full bg-transparent border-b border-gray-300 focus:border-teal-500 text-gray-700 py-1 leading-tight focus:outline-none"
                  required
                />
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4">
              <div className="flex flex-col">
                <label className="text-xs text-gray-500 mb-1 flex items-center">
                  <FaClock className="text-gray-400 mr-1 flex-shrink-0" />
                  To Time
                </label>
                <input
                  type="time"
                  value={untilTime}
                  onChange={(e) => setUntilTime(e.target.value)}
                  className="w-full bg-transparent border-b border-gray-300 focus:border-teal-500 text-gray-700 py-1 leading-tight focus:outline-none"
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </form>
      <button 
        type="submit"
        form="search-form"
        className="absolute right-6 -bottom-6 lg:right-6 lg:top-1/2 lg:-translate-y-1/2 w-12 h-12 bg-teal-500 hover:bg-teal-600 text-white rounded-full transition-colors duration-300 flex items-center justify-center shadow-lg"
      >
        <FaSearch className="text-xl" />
      </button>
    </div>
  );
};

export default SearchForm;
