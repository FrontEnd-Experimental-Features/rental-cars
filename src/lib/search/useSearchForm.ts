import { useState, useEffect } from 'react';
import { getMinDate, validateUntilDate } from './dateUtils';

export const useSearchForm = () => {
  const [location, setLocation] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [fromTime, setFromTime] = useState('');
  const [untilDate, setUntilDate] = useState('');
  const [untilTime, setUntilTime] = useState('');
  const [minDate, setMinDate] = useState('');

  useEffect(() => {
    setMinDate(getMinDate());
  }, []);

  const handleFromDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    setFromDate(selectedDate);
    setUntilDate(validateUntilDate(selectedDate, untilDate));
  };

  const handleUntilDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    setUntilDate(validateUntilDate(fromDate, selectedDate));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ location, fromDate, fromTime, untilDate, untilTime });
  };

  return {
    location,
    setLocation,
    fromDate,
    setFromDate,
    fromTime,
    setFromTime,
    untilDate,
    setUntilDate,
    untilTime,
    setUntilTime,
    minDate,
    handleFromDateChange,
    handleUntilDateChange,
    handleSubmit
  };
};
