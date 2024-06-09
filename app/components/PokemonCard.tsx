// PokemonCard.tsx
import React from "react";

interface Pokemon {
  name: string;
  type: string;
  description: string;
  weight: string;
  height: string;
}

const PokemonCard: React.FC<{ pokemon: Pokemon }> = ({ pokemon }) => {
  console.log("Pokemon data:", pokemon);

  return (
    <div className="border p-4 rounded-md shadow-md">
      <h2 className="text-xl font-bold">{pokemon.name}</h2>
      <p>Type: {pokemon.type}</p>
      <p>Description: {pokemon.description}</p>
    </div>
  );
};

export default PokemonCard;
