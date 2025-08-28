import React from 'react';
import { useNavigate } from 'react-router-dom';

const Country = ({ country }) => {
  const { name, capital, population, region, flags } = country;
  const url = `/country/${capital}`;
  const navigate = useNavigate();
  const handleDetails = () => {
    navigate(url);
  };
  return (
    <div
      onClick={handleDetails}
      className="w-full bg-white dark:bg-blue-900 shadow-md rounded-md border-none cursor-pointer overflow-hidden transition-colors duration-200 hover:shadow-lg"
    >
      <img 
        src={flags.png} 
        alt={`${name.common} flag`} 
        className="w-full h-48 object-cover" 
      />
      <div className="p-6">
        <h4 className="text-xl font-extrabold text-grey-950 dark:text-white mb-4">
          {name.common}
        </h4>
        <div className="space-y-1 text-detail">
          <p className="font-semibold text-grey-950 dark:text-white">
            Population:{' '}
            <span className="font-light text-grey-400 dark:text-grey-50">
              {population?.toLocaleString() || 'N/A'}
            </span>
          </p>
          <p className="font-semibold text-grey-950 dark:text-white">
            Region:{' '}
            <span className="font-light text-grey-400 dark:text-grey-50">
              {region || 'N/A'}
            </span>
          </p>
          <p className="font-semibold text-grey-950 dark:text-white">
            Capital:{' '}
            <span className="font-light text-grey-400 dark:text-grey-50">
              {capital?.[0] || 'N/A'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Country;
