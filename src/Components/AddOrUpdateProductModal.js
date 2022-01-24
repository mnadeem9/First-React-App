import React, { useState, useRef } from "react";
import { useEffect } from "react/cjs/react.development";
import { useDispatch } from "react-redux";
import {
  saveProductToDB,
  updateProductInDb,
} from "../redux/products/productAction";
function AddOrUpdateProductModal({ data }) {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    _id: "",
    name: "",
    price: 0,
    activeColor: "",
    isAvailable: true,
  });

  const saveOrUpdateNewProduct = () => {
    const isSave = data._id ? false : true;
    if (isSave) {
      dispatch(saveProductToDB(form)).then(
        (msg) => {
          console.log(msg);
          closeBtnRef.current.click();
        },
        (e) => {
          setError({
            isError: true,
            errorMessage: e.message,
          });
        }
      );
    } else {
      // This means this is update.
      dispatch(updateProductInDb(form)).then(
        (msg) => {
          console.log(msg);
          closeBtnRef.current.click();
        },
        (e) => {
          setError({
            isError: true,
            errorMessage: e.message,
          });
        }
      );
    }
  };
  const closeBtnRef = useRef(null);
  const [error, setError] = useState({
    isError: false,
    errorMessage: "",
  });

  useEffect(() => {
    setForm({
      _id: data?._id,
      name: data?.name,
      price: data?.price,
      activeColor: data?.activeColor,
      isAvailable: data?.isAvailable,
    });
  }, [data]);

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {data._id ? "Update Product" : "Add New Product"}
            </h5>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body">
            {error.isError && (
              <div
                className="alert alert-danger alert-dismissible fade show"
                role="alert"
              >
                <strong>{error.errorMessage}</strong>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                  onClick={() =>
                    setError({
                      isError: false,
                      errorMessage: "",
                    })
                  }
                ></button>
              </div>
            )}
            <div className="card">
              <div className="card-body">
                <div className="mb-3">
                  <label className="form-label">Enter Product Name</label>
                  <input
                    className="form-control"
                    value={form.name || ""}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        name: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="price" className="form-label">
                    Enter Product Price
                  </label>
                  <input
                    className="form-control"
                    value={form.price || 0}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        price: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="activeColor" className="form-label">
                    Choose Product Color
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    name="activeColor"
                    value={form.activeColor || ""}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        activeColor: e.target.value,
                      })
                    }
                  >
                    <option value=""></option>
                    <option value="Red">Red</option>
                    <option value="Green">Green</option>
                    <option value="Blue"> Blue</option>
                  </select>
                </div>
                <div className="form-check mt-3">
                  <label className="form-check-label" htmlFor="isAvailable">
                    Is Available
                  </label>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="isAvailable"
                    checked={form.isAvailable || true}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        isAvailable: e.target.checked,
                      })
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <div className="form-check mt-3 text-center">
              <button
                type="submit"
                className="btn btn-success me-2"
                onClick={saveOrUpdateNewProduct}
              >
                {data._id ? "Update" : "Save"}
              </button>

              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={closeBtnRef}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddOrUpdateProductModal;
