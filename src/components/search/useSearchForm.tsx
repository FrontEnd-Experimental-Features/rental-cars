import { useState } from 'react';

export const useSearchForm = () => {
  const [location, setLocation] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [fromTime, setFromTime] = useState('');
  const [untilDate, setUntilDate] = useState('');
  const [untilTime, setUntilTime] = useState('');

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => setLocation(e.target.value);
  const handleFromDateChange = (e: React.ChangeEvent<HTMLInputElement>) => setFromDate(e.target.value);
  const handleFromTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => setFromTime(e.target.value);
  const handleUntilDateChange = (e: React.ChangeEvent<HTMLInputElement>) => setUntilDate(e.target.value);
  const handleUntilTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => setUntilTime(e.target.value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ location, fromDate, fromTime, untilDate, untilTime });
    // Add your form submission logic here
  };

  return {
    location,
    fromDate,
    fromTime,
    untilDate,
    untilTime,
    handleLocationChange,
    handleFromDateChange,
    handleFromTimeChange,
    handleUntilDateChange,
    handleUntilTimeChange,
    handleSubmit
  };
};