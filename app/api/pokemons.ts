// pages/api/pokemons.ts
import { NextApiRequest, NextApiResponse } from "next";

interface Pokemon {
  name: string;
  type: string;
  description: string;
}

let pokemons: Pokemon[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, type, description } = req.body;
    const newPokemon: Pokemon = { name, type, description };
    pokemons.push(newPokemon);
    res.status(201).json(newPokemon);
  } else if (req.method === "GET") {
    res.status(200).json(pokemons);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
