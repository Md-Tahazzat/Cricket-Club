import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Player.css";

const Player = ({ player, handleAddToCart }) => {
  const { id, img, name, price } = player;
  return (
    <div className="player-card">
      <div className="card-img">
        <img src={img} alt="" />
      </div>
      <div className="player-info">
        <p>id: {id}</p>
        <h3>Name: {name}</h3>
        <h4>Price: ${price}</h4>
      </div>
      <button onClick={() => handleAddToCart(player)} className="card-btn">
        Add to Cart <FontAwesomeIcon icon={faCartShopping} />
      </button>
    </div>
  );
};

export default Player;
