import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const NavbarApp = ({ total }) => {
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate("/carrito");
  };

  return (
    <>
      <div className="bg-dark text-white" style={{ height: "12vh" }}>
        <div
          className="container-fluid d-flex justify-content-between"
          style={{ paddingTop: "25px" }}
        >
          <NavLink
            to="/"
            className="text-white"
            style={{ textDecoration: "none" }}
          >
            🍕 Pizzeria Mamma Mia!
          </NavLink>
          <div>
            <div
              onClick={handleCartClick}
              className="text-white"
              style={{ cursor: "pointer", textDecoration: "none" }}
            >
              🛒 <span className="mr-3">Total: ${total}</span>
            </div>
          </div>
        </div>
      </div>
      <img
        src="https://i.pinimg.com/736x/60/f4/53/60f453bd1fe7d061e8fe4d766d830134.jpg"
        alt="imagen de pizza en pala de horno"
        style={{
          width: "100%",
          height: "50vh",
          objectFit: "fill",
          marginBottom: "50px",
        }}
      />
    </>
  );
};

export default NavbarApp;
