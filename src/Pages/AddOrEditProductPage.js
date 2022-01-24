import React, { useState } from "react";

function AddOrEditProductPage() {
  const [form, setForm] = useState({
    name: "",
    price: 0.0,
    color: "",
    isAvailable: false,
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <label className="form-label">Enter Product Name</label>
          <input
            className="form-control"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value,
              })
            }
          />
        </div>
      </div>
    </div>
  );
}

export default AddOrEditProductPage;
