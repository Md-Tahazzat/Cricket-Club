import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "../Cart/Cart";
import Player from "../Player/Player";
import {
  addToLocalStorage,
  getFromLocalStorage,
  removeFromLocalStorage,
} from "../Utilities/Utilities";
import "./PlayersContainer.css";

const PlayersContainer = () => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  const handleAddToCart = (newPlayer) => {
    const isExist = selectedPlayers.find((player) => player.id == newPlayer.id);

    if (isExist) {
      toast.warning(`${newPlayer.name} is already selected`);
      return;
    }

    setSelectedPlayers([...selectedPlayers, newPlayer]);
    addToLocalStorage(newPlayer.id);
  };

  const handleDeletePlayer = (id) => {
    const remainingPlayers = selectedPlayers.filter(
      (player) => player.id !== id
    );
    setSelectedPlayers(remainingPlayers);
    removeFromLocalStorage(id);
  };

  useEffect(() => {
    if (players.length < 1) return;
    const selectedPlayersId = getFromLocalStorage("cart");
    if (selectedPlayersId === null) return;
    const savedPlayersInLocalStorage = [];
    selectedPlayersId.forEach((id) => {
      const matchedPlayer = players.find((player) => player.id == id);
      savedPlayersInLocalStorage.push(matchedPlayer);
    });
    setSelectedPlayers(savedPlayersInLocalStorage);
  }, [players.length > 1]);

  return (
    <div className="players-details-container">
      <div className="players-container">
        <h2 className="page-title">Select Your Players</h2>
        <div className="players">
          {players.map((player) => (
            <Player
              handleAddToCart={handleAddToCart}
              key={player.id}
              player={player}
            />
          ))}
        </div>
      </div>
      <div className="cart-container">
        <Cart
          handleDeletePlayer={handleDeletePlayer}
          selectedPlayers={selectedPlayers}
        ></Cart>
        <ToastContainer className="toast-container" />
      </div>
    </div>
  );
};

export default PlayersContainer;
