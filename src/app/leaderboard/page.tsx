export default async function Page() {
  const res = await fetch(
    "https://fantasy.premierleague.com/api/leagues-classic/20959/standings/"
  );
  const data = await res.json();
  const players = data.new_entries.results;
  const sortedPlayers = players.sort(
    (a: { total: number }, b: { total: number }) => a.total - b.total
  );

  return (
    <>
      <div className="flex flex-col items-center mt-6">
        <div className="border-b-2 border-gray-300 p-3">
          <p className="text-4xl font-bold text-center mb-1">Leaderboard</p>
          <p className="text-center italic text-md transform text-gray-500">
            The leaderboard of DHFPL. Arranges the payers by order of total
            points.
          </p>
        </div>
        <div className="p-3">
          <p className="italic text-gray-400">
            The season will begin soon! Stay tuned.
          </p>
        </div>
      </div>
    </>
  );
}
