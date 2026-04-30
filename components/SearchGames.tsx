"use client";

import { useState } from "react";
import { RAWGGame } from "@/types/RAWGGame";
import GameGrid from "./GameGrid";

export default function SearchGames() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<RAWGGame[]>([]);
  const [loading, setLoading] = useState(false);

  async function searchGames() {
    setLoading(true);

    const res = await fetch(`/api/search?q=${query}`);
    const data = await res.json();

    setResults(data);
    setLoading(false);
  }

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search games..."
      />

      <button onClick={searchGames}>Search</button>

      <GameGrid games={results} loading={loading} />
    </div>
  );
}