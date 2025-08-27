import { useEffect, useState } from 'react';

const useCountries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(
      'https://restcountries.com/v3.1/all?fields=name,population,capital,region,flags'
    )
      .then((res) => res.json())
      .then((data) => {
        const sortedCountry = data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setCountries(sortedCountry);
      })
      .catch((err) => console.error('Failed to fetch countries:', err));
  }, []);

  return countries;
};

export default useCountries;
