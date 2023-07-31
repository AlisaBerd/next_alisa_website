const defaultState = {
  alerts_array: []
}

export const alertsReducer = (state = defaultState, action) =>{
  switch (action.type) {
    case "ADD_ALERT":
      return {...state, alerts_array: [...state.alerts_array, action.payload]}
    // case "DELETE_ALERT":
    //   return {...state, alerts_array: [...state.alerts_array.map((one_element) => { if(one_element.id != action.payload) return one_element})]}
    case "REMOVE_ALERT":
        return {...state, alerts_array: state.alerts_array.filter(one_element => one_element.id !== action.payload)}

    default:
      return state
  }
}

export const addAlert = (payload) => ({type: "ADD_ALERT", payload})
export const removeAlert = (payload) => ({type: "REMOVE_ALERT", payload})
