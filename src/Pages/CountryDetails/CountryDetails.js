import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { IoIosArrowRoundBack } from "react-icons/io"
const CountryDetails = () => {
  const { countryCapital } = useParams()
  const [cyDetails, setCyDetails] = useState({})
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/capital/${countryCapital}
`)
      .then((res) => res.json())
      .then((data) => setCyDetails(data))
  }, [countryCapital])

  const borderCountry = cyDetails[0]?.borders

  return (
    <div className="ml-7 sm:grid sm:grid-cols-2 sm:p-8 sm:my-auto">
      <div>
        <Link to="/">
          <button className="flex justify-center w-24 mb-10 rounded-md  font-thin text-sm align-middle bg-white py-2 shadow-md dark:bg-slate-700 text-black dark:text-white  ">
            {" "}
            <IoIosArrowRoundBack className="mr-2  text-lg  " />
            Back{" "}
          </button>
        </Link>
        <img src={cyDetails[0]?.flags?.png} alt="" />
      </div>
      <div className="my-10 sm:flex sm:justify-around mt-28 ">
        <div>
          <h1 className="text-xl  font-bold mb-8  dark:text-white">
            {cyDetails[0]?.name?.common}
          </h1>
          <h1 className="text-sm font-medium my-3 dark:text-white">
            Native Name:{" "}
            <small className="font-light text-sm  dark:text-slate-200">
              {cyDetails[0]?.name?.nativeName?.nld?.common}{" "}
            </small>
          </h1>
          <h1 className="text-sm font-medium my-3 dark:text-white">
            Population:{" "}
            <small className="font-light text-sm  dark:text-slate-200">
              {" "}
              {cyDetails[0]?.population}
            </small>
          </h1>
          <h5 className="text-sm font-medium my-3 dark:text-white">
            Region:{" "}
            <small className="font-light text-sm  dark:text-slate-200">
              {cyDetails[0]?.region}
            </small>
          </h5>
          <h1 className="text-sm font-medium my-3 dark:text-white">
            Sub Region:{" "}
            <small className="font-light text-sm  dark:text-slate-200">
              {cyDetails[0]?.subregion}{" "}
            </small>
          </h1>
          <h1 className="text-sm font-medium my-3 dark:text-white mb-8">
            Capital:{" "}
            <small className="font-light text-sm  dark:text-slate-200">
              {cyDetails[0]?.capital}
            </small>
          </h1>
        </div>
        <div className="mt-16">
          <h1 className="text-sm font-medium my-3 dark:text-white">
            Top Level Domain:{" "}
            <small className="font-light text-sm  dark:text-slate-200">
              {cyDetails[0]?.region}
            </small>{" "}
          </h1>
          <h1 className="text-sm font-medium my-3 dark:text-white">
            Currencies:{" "}
            <small className="font-light text-sm  dark:text-slate-200">
              {" "}
              {cyDetails[0]?.currencies?.name}
            </small>
          </h1>
          <h1 className="text-sm font-medium my-3 dark:text-white mb-8">
            Languages:{" "}
            <small className="font-light text-sm  dark:text-slate-200">
              {" "}
              {}
            </small>
          </h1>
          
        </div>
      </div>
    </div>
  )
}

export default CountryDetails
