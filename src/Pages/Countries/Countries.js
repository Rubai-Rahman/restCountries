import React from 'react';
import { CountryState } from '../../Context/Context';
import useCountries from '../../hooks/useCountries';
import Country from '../Country/Country';

const Countries = () => {
  const countries = useCountries();
  //Reducer
  const {
    state: { searchQuery, regionQuery },
  } = CountryState();

  //Reducer
  const transFormCountries = () => {
    let sortedCountry = countries;

    if (regionQuery) {
      sortedCountry = sortedCountry.filter((country) =>
        country.region.toLowerCase().includes(regionQuery)
      );
    }
    if (searchQuery) {
      sortedCountry = sortedCountry.filter((country) =>
        country?.name?.common.toLowerCase().includes(searchQuery)
      );
    }
    return sortedCountry;
  };
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6 py-12">
      {transFormCountries().map((country) => (
        <Country key={country.name.common} country={country}></Country>
      ))}
    </div>
  );
};

export default Countries;
