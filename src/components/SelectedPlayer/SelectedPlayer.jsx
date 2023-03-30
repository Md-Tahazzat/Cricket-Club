import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./SelectedPlayer.css";

const SelectedPlayer = ({ player, handleDeletePlayer }) => {
  const { id, name, img, price } = player;
  return (
    <div className="selected-player-container">
      <img src={img} alt="" />
      <div className="selected-player-info">
        <h4>{name}</h4>
        <p>Price: ${price}</p>
      </div>
      <button onClick={() => handleDeletePlayer(id)}>
        Delete <FontAwesomeIcon icon={faTrashCan} />
      </button>
    </div>
  );
};

export default SelectedPlayer;
