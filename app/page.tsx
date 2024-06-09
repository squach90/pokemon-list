// page.tsx
import React from "react";
import PokemonCard from "./components/PokemonCard";

interface Pokemon {
  name: string;
  type: string;
  description: string;
  weight: string;
  height: string;
}

const Page: React.FC<{ pokemons: Pokemon[] }> = ({ pokemons }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Liste des Pokémons</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {pokemons.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default Page;
