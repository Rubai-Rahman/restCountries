import React from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { CountryState } from '../../Context/Context';

const Utilities = () => {
  //Reducer
  const {
    state: { searchQuery, regionQuery },
    dispatch,
  } = CountryState();

  return (
    <div className="w-full  justify-between sm:flex">
      <div className="flex mx-4 mb-12 h-12  bg-white dark:bg-slate-700 rounded-md sm:mx-0">
        <BiSearchAlt2 className=" text-gray-400 my-auto ml-10 mr-2 text-2xl  " />
        <input
          onChange={(e) => {
            dispatch({
              type: 'FILTER_BY_SEARCH',
              payload: e.target.value,
            });
          }}
          type="text"
          placeholder="Search for a Country..."
          className="w-full md:w-80   border-none focus:outline-none  text-slate-900 dark:text-white dark:bg-slate-700 "
        />
      </div>
      <div>
        <select
          onChange={(e) => {
            dispatch({
              type: 'FILTER_BY_REGION',
              payload: e.target.value,
            });
          }}
          className="flex mx-4 mb-12 h-12   bg-white rounded-lg outline-none border-none focus:outline-none  text-slate-900 dark:text-white dark:bg-slate-700 sm:mx-0"
        >
          <option className="mt-11 " value="">
            Filter by Region
          </option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default Utilities;
