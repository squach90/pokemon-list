import React from "react";
import PokemonCard from "./components/PokemonCard";

interface Pokemon {
  name: string;
  type: string;
  description: string;
  weight: string;
  height: string;
}

// Exemple de données de Pokémon pour le rendu initial
const pokemons: Pokemon[] = [
  {
    name: "Pikachu",
    type: "Electric",
    description: "A friendly electric-type Pokémon",
    weight: "6",
    height: "40",
  },
  {
    name: "Charizard",
    type: "Fire",
    description: "A fierce fire-type Pokémon",
    weight: "90.5",
    height: "170",
  },
  // Ajoutez plus de Pokémon ici
];

const Page: React.FC = () => {
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
