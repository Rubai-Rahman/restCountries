import React from "react"
import { CountryState } from "../../Context/Context"
import useCountries from "../../hooks/useCountries"
import Country from "../Country/Country"

const Countries = () => {
  const countries = useCountries()
  //Reducer
  const {
    state: { searchQuery, regionQuery },
    
  } = CountryState()

  //Reducer
  const transFormCountries = () => {
    let sortedCountry = countries
    
    if (regionQuery) {
      sortedCountry = sortedCountry.filter((country) =>
        country.region.toLowerCase().includes(regionQuery)
      )
  }
      if (searchQuery) {
        sortedCountry = sortedCountry.filter((country) =>
          country?.name?.common.toLowerCase().includes(searchQuery)
        )
      }
      return sortedCountry;
    
    

    
  }
  return (
    <div className="ml-10   grid grid-cols-1 mt-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:ml-16 lg:ml-10 ">
      {transFormCountries().map((country) => (
        <Country key={country.name.common} country={country}></Country>
      ))}
    </div>
  )
}

export default Countries
