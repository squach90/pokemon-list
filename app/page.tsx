import React, { useEffect, useState } from "react";
import PokemonCard, { Pokemon } from "./components/PokemonCard";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const Page: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const res = await fetch(`${apiUrl}/api/pokemons`);
        if (!res.ok) {
          throw new Error("Failed to fetch pokemons");
        }
        const data = await res.json();
        setPokemons(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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
