export const Reducer = (state, action) => {
  switch (action.type) {
    case "FILTER_BY_SEARCH":
      return {
        ...state,
        searchQuery: action.payload,
      }
    case "FILTER_BY_REGION":
      return {
        ...state,
        regionQuery: action.payload,
      }
    case "ClEAR-FILTER":
      return {
        searchQuery: "",
        regionQuery: "",
      }
    default:
      return state
  }
}
