// app/components/PokemonCard.tsx
import React from "react";
import { Pokemon } from "../types";

const PokemonCard: React.FC<{ pokemon: Pokemon }> = ({ pokemon }) => (
  <div className="border p-4 rounded-md shadow-md">
    <h2 className="text-xl font-bold">{pokemon.name}</h2>
    <p>Type: {pokemon.type}</p>
    <p>Description: {pokemon.description}</p>
    <p>Weight: {pokemon.weight} kg</p>
    <p>Height: {pokemon.height} cm</p>
  </div>
);

export default PokemonCard;
