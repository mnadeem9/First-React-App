import React from "react";

function Footer() {
  return (
    <div
      className="container-fluid pt-3"
      style={{ backgroundColor: "#0f65a3", color: "white" }}
    >
      <div className="row">
        <div className="col-4">
          <h4
            className="text-center p-2"
            style={{ borderBottom: "1px solid whitesmoke" }}
          >
            Our Services
          </h4>
          <ul>
            <li>ada sdas dasda sasdas dasdasd sadasd asd</li>
            <li>ada sdas dasda sasdas dasdasd sadasd asd</li>
            <li>ada sdas dasda sasdas dasdasd sadasd asd</li>
            <li>ada sdas dasda sasdas dasdasd sadasd asd</li>
            <li>ada sdas dasda sasdas dasdasd sadasd asd</li>
            <li>ada sdas dasda sasdas dasdasd sadasd asd</li>
            <li>ada sdas dasda sasdas dasdasd sadasd asd</li>
          </ul>
        </div>
        <div className="col-4">
          <h4
            className="text-center p-2"
            style={{ borderBottom: "1px solid whitesmoke" }}
          >
            Know More abous us
          </h4>
          <div className="card" style={{ width: "100%" }}>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/" className="card-link">
                Card link
              </a>
              <a href="/" className="card-link">
                Another link
              </a>
            </div>
          </div>
        </div>
        <div className="col-4">
          <h4
            className="text-center p-2"
            style={{ borderBottom: "1px solid whitesmoke" }}
          >
            Refer a Friend
          </h4>
          <h6>
            adasdasd adas das das da sd asdasdasdasdasdasd asdasdasdasdasdasdd
            asd asd
          </h6>

          <h6>
            adasdasd adas das das da sd asdasdasdasdasdasd asdasdasdasdasdasdd
            asd asd
          </h6>

          <h6>
            adasdasd adas das das da sd asdasdasdasdasdasd asdasdasdasdasdasdd
            asd asd
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Footer;
