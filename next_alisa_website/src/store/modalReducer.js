const defaultState = {
  img:'',
}
export const modalReducer = (state = defaultState , action) => {
  switch (action.type) {
    case "CHANGE_IMAGE":
      return {...state,img: action.payload}
    default:
      return state
  }
}
