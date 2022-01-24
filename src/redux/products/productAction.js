import axios from "axios";
import {
  GET_PRODUCTS_STARTED,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILED,
  SAVE_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
} from "./productTypes";

const getProductsStarted = () => {
  return {
    type: GET_PRODUCTS_STARTED,
  };
};

const getProductsSuccess = (data) => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: data,
  };
};

const getProductsFailed = (errorMessage) => {
  return {
    type: GET_PRODUCTS_FAILED,
    payload: errorMessage,
  };
};

const saveProduct = (data) => {
  return {
    type: SAVE_PRODUCT,
    payload: data,
  };
};

const deleteProduct = (id) => {
  return {
    type: DELETE_PRODUCT,
    payload: id,
  };
};

const updateProduct = (data) => {
  return {
    type: UPDATE_PRODUCT,
    payload: data,
  };
};

const fetchProducts = () => {
  return (dispatch) => {
    dispatch(getProductsStarted());
    setTimeout(() => {
      axios.get("http://localhost:8080/api/v1/products").then(
        (response) => {
          if (response.status === 200) {
            console.log(response.data);
            dispatch(getProductsSuccess(response.data));
          }
        },
        (e) => {
          console.log("Unable to fetch the data");
          dispatch(getProductsFailed(e.message));
        }
      );
    }, 1000);
  };
};

const saveProductToDB = (obj) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios.post("http://localhost:8080/api/v1/products", obj).then(
        (response) => {
          if (response.status === 201) {
            dispatch(saveProduct(response.data));
            resolve("Product Saved Successfully");
          } else {
            reject({
              message: `Server returned status ${response.status}`,
            });
          }
        },
        (e) => {
          reject({
            message: `Something went wrong ${e.message}`,
          });
        }
      );
    });
  };
};

const deleteProductFromDB = (id) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios.delete(`http://localhost:8080/api/v1/products/${id}`).then(
        (response) => {
          if (response.status === 200) {
            dispatch(deleteProduct(id));
            resolve();
          } else {
            reject({
              message: `Unable to delete , received status as ${response.status}`,
            });
          }
        },
        (e) => {
          reject({
            message: `Something went wrong ${e.message}`,
          });
        }
      );
    });
  };
};

const updateProductInDb = (obj) => {
  console.log(JSON.stringify(obj));
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios.patch(`http://localhost:8080/api/v1/products/${obj._id}`, obj).then(
        (response) => {
          if (response.status === 200) {
            dispatch(updateProduct(response.data));
            resolve();
          } else {
            reject({
              message: `Unable to update product , received status as ${response.status}`,
            });
          }
        },
        (e) => {
          reject({
            message: `Something went wrong ${e.message}`,
          });
        }
      );
    });
  };
};

export {
  getProductsStarted,
  getProductsSuccess,
  getProductsFailed,
  fetchProducts,
  saveProductToDB,
  deleteProductFromDB,
  deleteProduct,
  updateProductInDb,
  updateProduct,
};
