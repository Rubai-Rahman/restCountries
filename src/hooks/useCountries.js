import  { useEffect, useState } from "react"

const useCountries = () => {
  const [countries, setCountries] = useState([])

  
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
         const result = data.sort((a, b) =>
           a.name.common.localeCompare(b.name.common)
         )

         setCountries(result)
      })
  }, [countries]);

  return countries;
}

export default useCountries
