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
      className="border w-full bg-white shadow-md rounded-md dark:bg-slate-700 border-none cursor-pointer"
    >
      <img src={flags.png} alt="" className="w-full  h-48    " />
      <div className="m-12 ">
        <h4 className="text-xl font-medium dark:text-white">{name.common}</h4>
        <h5 className="text-sm font-medium  dark:text-white">
          Population:{' '}
          <small className="font-thin dark:text-slate-200"> {population}</small>
        </h5>
        <h5 className="text-sm font-medium  dark:text-white">
          Region:{' '}
          <small className="font-thin dark:text-slate-200"> {region}</small>
        </h5>
        <h5 className="text-sm font-medium  dark:text-white">
          Capital:{' '}
          <small className="font-thin dark:text-slate-200"> {capital}</small>
        </h5>
      </div>
    </div>
  );
};

export default Country;
