const initialState = {
  data: [],
};
const DataReducer = (state = initialState, action) => {
  const { type, payload } = action;
  if (type === "INPUT_DATA") {
    return {
      ...state,
      data: [...state.data, payload],
    };
  } else {
    return state;
  }
};
export default DataReducer;
