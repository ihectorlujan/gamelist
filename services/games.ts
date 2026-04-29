import { supabase } from "@/lib/supabase";
import type { Game } from "@/types/game";

export const fetchGames = async (): Promise<Game[]> => {
  const { data, error } = await supabase
    .from("games")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data as Game[];
}

export const createGame = async () => {
  const { error } = await supabase.from("games").insert({
    name: "Nuevo juego",
    status: "wishlist",
    rating: 8,
  });

  if (error) throw error;
}