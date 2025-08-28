import React from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { CountryState } from '../../Context/Context';

const Utilities = () => {
  const {
    state: { searchQuery, regionQuery },
    dispatch,
  } = CountryState();

  return (
    <div className="w-full flex flex-col sm:flex-row justify-between sm:items-center gap-4">
      {/* Search Box */}
      <div className="flex items-center w-full sm:w-auto bg-white dark:bg-slate-700 rounded-md px-10 py-2 shadow-2xl ">
        <BiSearchAlt2 className="text-gray-400 text-2xl mr-2" />
        <input
          type="text"
          placeholder="Search for a Country..."
          value={searchQuery}
          onChange={(e) =>
            dispatch({ type: 'FILTER_BY_SEARCH', payload: e.target.value })
          }
          className="w-full sm:w-80 border-none focus:ring-offset-0 focus:ring-0 focus:outline-none text-slate-900 dark:text-white dark:bg-slate-700"
        />
      </div>

      <div className="">
        <select
          id="region"
          autoComplete="off"
          value={regionQuery}
          onChange={(e) =>
            dispatch({ type: 'FILTER_BY_REGION', payload: e.target.value })
          }
          className="sm:w-60 h-12 bg-white dark:bg-blue-900 shadow-md border-none rounded-md px-4 text-slate-900 dark:text-white focus:outline-none !appearance-none "
        >
          <option value="">Filter by Region</option>
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
