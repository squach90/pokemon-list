"use client";

import React, { useState, useEffect } from "react";
import PokemonCard from "./components/PokemonCard";

interface Pokemon {
  name: string;
  type: string;
  description: string;
}

const Home: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch("/api/pokemons")
      .then((response) => response.json())
      .then((data) => setPokemons(data));
  }, []);

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

export default Home;
