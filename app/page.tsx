import GameList from "@/components/GameList";
import SearchGames from "@/components/SearchGames";

export default async function Home() {
  return (
    <>
      <SearchGames />
      <GameList />
    </>
  );
}
