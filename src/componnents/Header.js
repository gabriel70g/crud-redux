import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav
      className="navbar navbar-sxpand-lg navbar-dark 
        bg-primary justify-Content-vetween"
    >
      <div className="container">
        <h1>
          <Link to="/" className="text-light">
            CRUD - React, Redux, REST API, Axios
          </Link>{" "}
        </h1>
        <Link
          to={"/productos/nuevo"}
          className="btn btn-danger nuevo-post d-block d-md-inline-block"
        >
          Agregar producto &#43;
        </Link>
      </div>
    </nav>
  );
};

export default Header;
