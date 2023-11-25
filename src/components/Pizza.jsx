import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/pizzas.json");
        const selectedPizza = response.data.find((p) => p.id === id);
        setPizza(selectedPizza || null);
      } catch (error) {
        console.error("Error al cargar los datos:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!pizza) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <img src={pizza.img} alt={pizza.name} className="card-img-top" />
            <div className="card-body">
              <h4
                className="card-title"
                style={{ textTransform: "capitalize" }}
              >
                {pizza.name}
              </h4>
              <p>{pizza.desc}</p>
              <ul>
                <h5>Ingredientes:</h5>
                {pizza.ingredients.map((ingredient, index) => (
                  <li key={index} style={{ textTransform: "capitalize" }}>
                    🍕{ingredient}
                  </li>
                ))}
              </ul>
              <h3>Precio: ${pizza.price}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
