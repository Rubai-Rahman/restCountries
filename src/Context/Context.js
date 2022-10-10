import React, { createContext, useContext, useReducer } from "react"
import { Reducer } from "../Reducer/Reducer"

const Filter = createContext()

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, {
    searchQuery: "",
    regionQuery: "",
  });
  return (
    <div>
      <Filter.Provider value={{ state, dispatch }}>{children}</Filter.Provider>
    </div>
  )
}

export default Context
export const CountryState = () => {
  return useContext(Filter)
}
