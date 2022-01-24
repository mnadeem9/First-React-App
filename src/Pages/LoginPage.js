import React from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../redux/products/productAction";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const login = () => {
    dispatch(fetchProducts());
    navigate("/home", { replace: true });
  };
  return (
    <div>
      <button className="btn btn-primary" onClick={login}>
        Log In
      </button>
    </div>
  );
}

export default LoginPage;
