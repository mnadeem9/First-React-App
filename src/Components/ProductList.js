import React, { useState, useRef } from "react";

import AddOrUpdateProductModal from "./AddOrUpdateProductModal";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductFromDB } from "../redux/products/productAction";

const ProductList = () => {
  const images = [
    "https://cdn.vox-cdn.com/thumbor/3o5bkD-T3oQ3EIfXotA4k9P97TY=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/22443013/5.png",
    "https://i5.walmartimages.com/asr/b16c6dcf-98b5-4000-b106-728647912d81_1.ae9db2c3a2020d02b73f03d740cdef14.jpeg",
    "https://i5.walmartimages.com/asr/5b6a01f4-dd03-4f73-997d-288e64d9599e_1.ba82721511e69ad57448ce3194b788fe.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
  ];

  const products = useSelector((state) => state.products);
  const [selectedProduct, setSelectedProduct] = useState({});
  const dispatch = useDispatch();
  const deleteToastBtn = useRef();
  const [showDeleteToast, setShowDeleteToast] = useState(false);

  const deleteProduct = (id) => {
    dispatch(deleteProductFromDB(id)).then(
      () => {
        setShowDeleteToast(true);
      },
      (e) => {}
    );
  };

  return (
    <section className="flex-grow-1">
      <div className="container">
        <div className="d-flex mt-3 mb-3 me-2 justify-content-between">
          <h6>&nbsp;</h6>
          <h4 className="text-center m-2 align-self-center">Products List</h4>
          <button
            className="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={() => {
              setSelectedProduct({});
            }}
          >
            Add New Product
          </button>
        </div>

        <div className="d-flex flex-row flex-wrap">
          {products.status === "SUCCESS" && products.data.length === 0 && (
            <h6 style={{ color: "red" }}>No Data Available </h6>
          )}
          {products.status === "INPROGRESS" && (
            <>
              <h6 style={{ color: "red" }}>Fetching Data .. Please wait </h6>
            </>
          )}
          {products.status === "FAILED" && (
            <h6 style={{ color: "red" }}>{products.message}</h6>
          )}
          {products.data.map((eachProduct) => (
            <div
              className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 p-2"
              key={eachProduct._id}
            >
              <div className="card">
                <img
                  src={images[Math.floor(Math.random() * 3)]}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{eachProduct.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {eachProduct.price}
                  </h6>
                  <div className="d-flex justify-content-center border-top pt-3">
                    <button
                      className="btn btn-primary me-2"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() => {
                        setSelectedProduct({ ...eachProduct });
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteProduct(eachProduct._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AddOrUpdateProductModal data={{ ...selectedProduct }} />

      {/* Delete Toast Starts here                */}

      <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 11 }}>
        <div
          id="liveToast"
          className={showDeleteToast ? "toast show" : "toast hide"}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div
            className="toast-header"
            style={{ backgroundColor: "red", color: "white" }}
          >
            <strong className="me-auto">Alert</strong>
            <small>1 Sec</small>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
              onClick={() => setShowDeleteToast(false)}
            ></button>
          </div>
          <div className="toast-body">Product Deleted Successfully !!</div>
        </div>
      </div>

      {/* Delete Toast Ends here                */}
    </section>
  );
};

export default ProductList;
