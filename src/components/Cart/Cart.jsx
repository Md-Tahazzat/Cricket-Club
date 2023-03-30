import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";
import "./Cart.css";

const Cart = ({ selectedPlayers, handleDeletePlayer }) => {
  let total = 0;
  for (let player of selectedPlayers) {
    total += player.price;
  }
  return (
    <div id="cart" className="cart">
      <h2 className="cart-title">
        You have selected {selectedPlayers.length}{" "}
        {selectedPlayers.length > 0 ? "players" : "player"}
      </h2>
      <h3>
        Total Cost: <FontAwesomeIcon icon={faDollarSign} />
        {total}
      </h3>
      <div>
        {selectedPlayers.map((player) => (
          <SelectedPlayer
            handleDeletePlayer={handleDeletePlayer}
            player={player}
            key={player.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
