import React, { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../info";
import "./cardDetails.css";

const CardDetails = () => {
  const { travelId } = useParams();
  const [travelsData, setTravelsData] = useState(data);

  const id = Number(travelId);

  const [selectedProduct, setSelectedProduct] = useState(id);

  const handleProductSelection = (travelId) => {
    setSelectedProduct(travelId);
  };

  const selectedProducts = travelsData.find(
    (product) => product.id === selectedProduct
  );

  return (
    <div className="allCard">
      {selectedProducts && (
        <div class="cardD">
          <h1 class="cardS-title">{selectedProducts.title}</h1>
          <div class="cardD-image">
            <img src={selectedProducts.img} alt="" />
          </div>
          <p class="cardD-body">{selectedProducts.description}</p>
          <p>{selectedProducts.price}</p>
          <strong>{selectedProducts.include}</strong>
          <ul>
            {selectedProducts.services.map((product) => {
              return <li>{product}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CardDetails;
