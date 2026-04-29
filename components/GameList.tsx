import { fetchGames } from "@/services/games";

const GameList = async () => {
  const games = await fetchGames();

  return (
    <main style={{ padding: "20px" }}>
      <h1>My Game List</h1>

      {games.length === 0 && <p>No games available yet</p>}

      {games.map((game) => (
        <div key={game.id}>
          <h3>{game.name}</h3>
          <p>{game.status}</p>
          <p>⭐ {game.rating ?? "No rating"}</p>
        </div>
      ))}
    </main>
  );
};

export default GameList;
