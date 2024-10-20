import React from 'react';

interface FormInputProps {
  icon: React.ReactNode;
  type: 'select' | 'date' | 'time';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => void;
  options?: string[];
  placeholder?: string;
  required?: boolean;
}

export const FormInput: React.FC<FormInputProps> = ({
  icon,
  type,
  value,
  onChange,
  options,
  placeholder,
  required
}) => {
  const inputClasses = "w-full md:w-auto bg-transparent border-b border-gray-300 focus:border-teal-500 text-gray-700 py-2 px-3 leading-tight focus:outline-none";

  return (
    <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
      {React.cloneElement(icon as React.ReactElement, { className: "text-gray-400 mr-2" })}
      {type === 'select' ? (
        <select
          value={value}
          onChange={onChange as (e: React.ChangeEvent<HTMLSelectElement>) => void}
          className={inputClasses}
          required={required}
        >
          <option value="">{placeholder}</option>
          {options?.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange as (e: React.ChangeEvent<HTMLInputElement>) => void}
          className={inputClasses}
          required={required}
        />
      )}
    </div>
  );
};