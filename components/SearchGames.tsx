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
      <div className="flex justify-center mt-6">
        <div className="relative w-full max-w-xl">
          {/* Input */}
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") searchGames();
            }}
            placeholder="Search games..."
            className="w-full px-5 py-3 pr-12 rounded-xl bg-zinc-900/60 text-white placeholder-gray-400
                 border border-zinc-700
                 backdrop-blur-md
                 focus:outline-none focus:ring-2 focus:ring-pink-300
                 transition duration-200"
          />

          {/* Botón icono */}
          <button
            onClick={searchGames}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition">
            🔍
          </button>
        </div>
      </div>

      <GameGrid games={results} loading={loading} />
    </div>
  );
}
