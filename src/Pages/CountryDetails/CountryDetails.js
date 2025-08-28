import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { CountryState } from '../../Context/Context';
const CountryDetails = () => {
  const { countryCapital } = useParams();
  const [cyDetails, setCyDetails] = useState({});
  const { dispatch } = CountryState();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/capital/${countryCapital}
`)
      .then((res) => res.json())
      .then((data) => setCyDetails(data));
  }, [countryCapital]);

  return (
    <div className="ml-7 lg:grid lg:grid-cols-2 lg:p-8 md:my-auto">
      <div>
        <Link to="/">
          <button
            onClick={() =>
              dispatch({
                type: 'ClEAR-FILTER',
              })
            }
            className="flex justify-center w-24 mb-10 rounded-md  font-thin text-sm align-middle bg-white py-2 shadow-md dark:bg-slate-700 text-black dark:text-white  "
          >
            {' '}
            <IoIosArrowRoundBack className="mr-2  text-lg  " />
            Back{' '}
          </button>
        </Link>
        <img src={cyDetails[0]?.flags?.png} alt="" />
      </div>
      <div className=" lg:flex lg:justify-around mt-28  ">
        <div>
          <h1 className="text-xl  font-bold mb-8  dark:text-white">
            {cyDetails[0]?.name?.common}
          </h1>
          <h1 className="text-sm font-medium my-3 dark:text-white">
            Native Name:{' '}
            <small className="font-light text-sm  dark:text-slate-200">
              {
                cyDetails[0]?.name?.nativeName[
                  Object?.keys(cyDetails[0]?.name?.nativeName)[0]
                ].common
              }{' '}
            </small>
          </h1>
          <h1 className="text-sm font-medium my-3 dark:text-white">
            Population:{' '}
            <small className="font-light text-sm  dark:text-slate-200">
              {' '}
              {cyDetails[0]?.population}
            </small>
          </h1>
          <h5 className="text-sm font-medium my-3 dark:text-white">
            Region:{' '}
            <small className="font-light text-sm  dark:text-slate-200">
              {cyDetails[0]?.region}
            </small>
          </h5>
          <h1 className="text-sm font-medium my-3 dark:text-white">
            Sub Region:{' '}
            <small className="font-light text-sm  dark:text-slate-200">
              {cyDetails[0]?.subregion}{' '}
            </small>
          </h1>
          <h1 className="text-sm font-medium my-3 dark:text-white mb-8">
            Capital:{' '}
            <small className="font-light text-sm  dark:text-slate-200">
              {cyDetails[0]?.capital}
            </small>
          </h1>
        </div>
        <div className="mt-12 ">
          <h1 className="text-sm font-medium my-3 dark:text-white">
            Top Level Domain:{' '}
            <small className="font-light text-sm  dark:text-slate-200">
              {cyDetails[0]?.tld[0]}
            </small>{' '}
          </h1>
          <h1 className="text-sm font-medium my-3 dark:text-white">
            Currencies:{' '}
            <small className="font-light text-sm  dark:text-slate-200">
              {
                cyDetails[0]?.currencies[
                  Object?.keys(cyDetails[0]?.currencies)[0]
                ]?.name
              }
            </small>
          </h1>
          <h1 className="text-sm font-medium my-3 dark:text-white">
            Languages:{' '}
            <small className="font-light text-sm  dark:text-slate-200">
              {cyDetails[0]?.languages[Object.keys(cyDetails[0]?.languages)[0]]}
            </small>
          </h1>
        </div>
      </div>
      <div className="lg:col-start-2 lg:ml-20 ">
        <h1 className="text-sm font-medium my-5 dark:text-white mb-8  ">
          Border Countries:{' '}
          <div className="my-2 grid grid-cols-3 gap-2 mr-3 pl-0 pr-6">
            {cyDetails[0]?.borders ? (
              cyDetails[0]?.borders.map((border) => (
                <small className="text-center bg-white rounded-sm shadow-md font-light p-2   text-xsm dark:bg-slate-700 ">
                  {border}
                </small>
              ))
            ) : (
              <p> Don't have Any Border Country </p>
            )}
          </div>
        </h1>
      </div>
    </div>
  );
};

export default CountryDetails;
