import React from "react";

const Carrito = ({ cart, total, clearCart }) => {
  const handleCompra = () => {
    if (total > 0) {
      alert("¡Gracias por su compra!");
      clearCart();
    }
  };

  return (
    <div className="container mt-5">
      <h2>Carrito de Compras</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.img} alt={item.name} style={{ width: "50px" }} />
              </td>
              <td>{item.name}</td>
              <td>${item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4>Total: ${total}</h4>
      <button className="btn btn-success" onClick={handleCompra}>
        Comprar
      </button>
    </div>
  );
};

export default Carrito;
