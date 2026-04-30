import Image from "next/image";
import { RAWGGame } from "@/types/RAWGGame";


export default function GameCard({ game }: { game: RAWGGame }) {
  return (
    <div className="group relative rounded-xl overflow-hidden bg-zinc-900 shadow-lg cursor-pointer transform transition duration-300 hover:scale-105">
      
      {/* Imagen */}
      <div className="relative h-48 w-full">
        {game.background_image && (
          <Image
            src={game.background_image}
            alt={game.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-110"
          />
        )}

        {/* Overlay blur */}
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />
      </div>

      {/* Info */}
      <div className="absolute bottom-0 p-3 w-full text-white">
        <h3 className="text-sm font-semibold truncate">{game.name}</h3>

        <div className="flex items-center justify-between mt-1 text-xs text-gray-300">
          <span>⭐ {game.rating.toFixed(1)}</span>
          <span>{game.released?.slice(0, 4)}</span>
        </div>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-black/40 backdrop-blur-sm flex items-center justify-center">
        <button className="px-3 py-1 text-sm bg-white text-black rounded-md">
          View
        </button>
      </div>
    </div>
  );
}