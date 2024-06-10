// app/api/pokemons/route.ts
import { NextResponse } from "next/server";

const pokemons = [
  {
    name: "Pikachu",
    type: "Electric",
    description: "A yellow electric Pokémon",
    weight: "6",
    height: "0.4",
  },
  // Ajoutez d'autres Pokémon ici
];

export async function GET() {
  return NextResponse.json(pokemons);
}
