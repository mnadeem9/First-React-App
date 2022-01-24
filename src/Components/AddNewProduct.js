import React, { useState } from "react";

function AddNewProduct({ isNew }) {
  const [form, setForm] = useState({
    productName: "",
    price: 0.0,
    color: "",
    isAvailable: false,
  });

  const saveNewProduct = () => {
    console.log(form);
  };
  return (
    <div className="d-flex justify-content-end bg-light p-2 rounded-3">
      <button
        type="button"
        className="btn btn-secondary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add New Product
      </button>
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
                {isNew ? "Add New Product" : "Update Product"}
              </h5>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <div className="card">
                <div className="card-body">
                  <div className="mb-3">
                    <label className="form-label">Enter Product Name</label>
                    <input
                      className="form-control"
                      value={form.productName}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          productName: e.target.value,
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
                      value={form.price}
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
                      value={form.color}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          color: e.target.value,
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
                      checked={form.isAvailable}
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
                {isNew ? (
                  <button
                    type="submit"
                    className="btn btn-success me-2"
                    onClick={saveNewProduct}
                  >
                    Save
                  </button>
                ) : (
                  <button type="submit" className="btn btn-success me-2">
                    Update
                  </button>
                )}

                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNewProduct;
