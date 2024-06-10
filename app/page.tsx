// app/page.tsx
import React from "react";
import PokemonCard from "./components/PokemonCard";
import { Pokemon } from "./types";

async function fetchPokemons(): Promise<Pokemon[]> {
  const res = await fetch("http://localhost:3000/api/pokemons");
  const data = await res.json();
  return data;
}

const Page: React.FC = async () => {
  const pokemons = await fetchPokemons();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Liste des Pokémon</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {pokemons.map((pokemon, index) => (
          <PokemonCard key={index} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default Page;
