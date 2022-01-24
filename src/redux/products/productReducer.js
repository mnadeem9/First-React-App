import {
  GET_PRODUCTS_STARTED,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILED,
  SAVE_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
} from "./productTypes";

const initialState = {
  data: [],
  status: "", //INPROGRESS, SUCCESS, FAILED
  message: "",
};

const productReducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case GET_PRODUCTS_STARTED:
      return {
        ...state,
        status: "INPROGRESS",
        message: "",
      };

    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        status: "SUCCESS",
        message: "",
      };
    case GET_PRODUCTS_FAILED:
      return {
        ...state,
        status: "FAILED",
        message: `Unable to get products.${action.payload}`,
      };
    case SAVE_PRODUCT:
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    case DELETE_PRODUCT:
      const id = action.payload;
      const filteredData = state.data.filter(
        (eachProduct) => eachProduct._id !== id
      );

      return {
        ...state,
        data: filteredData,
      };

    case UPDATE_PRODUCT:
      const updatedObj = action.payload;
      const index = state.data.findIndex(
        (eachProduct) => eachProduct._id === updatedObj._id
      );
      if (index !== -1) {
        state.data[index] = { ...updatedObj };
      }

      return {
        ...state,
        data: [...state.data],
      };

    default:
      return state;
  }
};

export default productReducer;
