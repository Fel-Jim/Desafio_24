import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = ({ addToCart }) => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/pizzas.json");
        setPizzas(response.data || []);
      } catch (error) {
        console.error("Error al cargar los datos:", error);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (pizza) => {
    addToCart(pizza);
    console.log(`Añadir pizza al carrito: ${pizza.name}`);
  };

  return (
    <div className="container mt-5">
      <div className="d-flex overflow-auto">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="col-md-3 mb-4">
            <div className="card">
              <img
                src={pizza.img}
                alt={pizza.name}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h4
                  className="card-title d-flex justify-content-center"
                  style={{ textTransform: "capitalize" }}
                >
                  {pizza.name}
                </h4>
                <ul>
                  <h5>Ingredientes:</h5>
                  {pizza.ingredients.map((ingredient, index) => (
                    <li key={index} style={{ textTransform: "capitalize" }}>
                      🍕 {ingredient}
                    </li>
                  ))}
                </ul>
                <p className="card-text d-flex justify-content-center">
                  <h4>${pizza.price}</h4>
                </p>
                <div className="d-flex justify-content-between">
                  <Link to={`/pizza/${pizza.id}`} className="btn btn-primary">
                    Ver mas
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleAddToCart(pizza)}
                  >
                    Añadir
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
