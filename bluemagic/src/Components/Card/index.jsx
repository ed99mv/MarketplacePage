import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
const Card = ({ title, img, id, description, price }) => {
  return (
    <div>
      <Link to={`DetailsPage/${id}`} className="underline">
        <div class="card">
          <div class="card-image">
            <img src={img} alt="" />
          </div>
          <p class="card-title">{title}</p>
          <p class="card-body">{description}</p>
          <p>{price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
