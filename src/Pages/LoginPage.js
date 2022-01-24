import React from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../redux/products/productAction";
import { useNavigate } from "react-router-dom";
import logo from "../Assets/img/testinglogo.png";

function LoginPage() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const login = () => {
    dispatch(fetchProducts());
    navigate("/home", { replace: true });
  };
  return (
    <section className="flex-grow-1 container-fluid m-0 p-0 d-flex justify-content-center align-items-center my-gradient">
      <div className="d-flex" style={{ width: "400px" }}>
        <div className="row">
          <div className="col">
            <div className="card" style={{ width: "550px" }}>
              <div className="card-body">
                <div className="text-center mb-2">
                  <img
                    src={logo}
                    class="card-img-top"
                    style={{ width: "150px", height: "150px" }}
                    alt=""
                  ></img>
                  <h3 className="card-title pb-2">Login</h3>
                  <h5 className="card-subtitle mb-5 pb-3 text-muted border-bottom">
                    Welcome to Back office
                  </h5>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="mb-2">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="mb-3">
                      <label
                        htmlFor="inputPassword"
                        className="col-sm-2 col-form-label"
                      >
                        Password
                      </label>

                      <input
                        type="password"
                        className="form-control"
                        id="inputPassword"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="d-flex flex-column justify-content-center align-content-center p-4">
                      <button className="btn btn-success mb-2">Login</button>
                      <h6 className="mt-2 text-center primary">
                        Forgot Password
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
