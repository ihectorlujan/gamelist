"use client";

import { RAWGGame } from "@/types/RAWGGame";
import GameSkeleton from "./GameSkeleton";
import GameCard from "./GameCard";

type Props = {
  games: RAWGGame[];
  loading: boolean;
};

export default function GameGrid({ games, loading }: Props) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-6">
      {loading
        ? Array.from({ length: 10 }).map((_, i) => <GameSkeleton key={i} />)
        : games.map((game) => <GameCard key={game.id} game={game} />)}
    </div>
  );
}
