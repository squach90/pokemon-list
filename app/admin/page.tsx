// Admin.tsx
"use client";

import React, { useState } from "react";

const Admin: React.FC = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting form...");
    console.log("Nom:", name);
    console.log("Type:", type);
    console.log("Description:", description);
    console.log("Taille (cm):", height);
    console.log("Poids (kg):", weight);
    const newPokemon = { name, type, description, height, weight };

    const response = await fetch("/api/pokemons", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPokemon),
    });

    if (response.ok) {
      console.log("Form submitted successfully.");
      setName("");
      setType("");
      setDescription("");
      setHeight("");
      setWeight("");
    } else {
      console.error("Failed to submit form:", response.statusText);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Ajouter un Pokémon</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Nom</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded w-full text-black"
          />
        </div>
        <div>
          <label className="block">Type</label>
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="border p-2 rounded w-full text-black"
          />
        </div>
        <div>
          <label className="block">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-2 rounded w-full text-black"
          />
        </div>
        <div>
          <label className="block">Taille (cm)</label>
          <input
            type="text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="border p-2 rounded w-full text-black"
          />
        </div>
        <div>
          <label className="block">Poids (kg)</label>
          <input
            type="text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="border p-2 rounded w-full text-black"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default Admin;
