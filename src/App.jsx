import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavbarApp from "./components/NavBarApp";
import Home from "./components/Home";
import Pizza from "./components/Pizza";
import Carrito from "./components/Carrito";

function App() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (pizza) => {
    setCart([...cart, pizza]);
    setTotal(total + pizza.price);
  };

  return (
    <>
      <NavbarApp total={total} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route
          path="/carrito"
          element={<Carrito cart={cart} total={total} />}
        />
      </Routes>
    </>
  );
}

export default App;
