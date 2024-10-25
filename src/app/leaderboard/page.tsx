import { FaGripLines } from "react-icons/fa";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

type Player = {
  id: number;
  event_total: number;
  player_name: string;
  rank: number;
  last_rank: number;
  rank_sort: number;
  total: number;
  entry: number;
  entry_name: string;
};

export default async function Page() {
  const res = await fetch(
    "https://fantasy.premierleague.com/api/leagues-classic/20959/standings/",
    { cache: "no-store" }
  );
  const data = await res.json();
  const players = data.standings.results;
  players.sort(
    (a: { total: number }, b: { total: number }) => b.total - a.total
  );

  return (
    <>
      <div className="flex flex-col items-center mt-6">
        <div className="border-b-2 border-gray-300 p-3">
          <p className="text-4xl font-bold text-center mb-1">Leaderboard</p>
          <p className="text-center italic text-md transform text-gray-500">
            The leaderboard of DHFPL. Arranges the players by order of total
            points.
          </p>
        </div>
        <div className="p-3">
          <div className="flex flex-row">
            <div className="size-12"></div>
            <div className="flex items-center justify-center border border-black h-12 w-[72px] font-bold text-white bg-purple-700">
              Rank
            </div>
            <div className="flex items-center justify-center border border-black h-12 w-60 font-bold text-white bg-purple-700">
              Team Name
            </div>
            <div className="flex items-center justify-center border border-black h-12 w-48 font-bold text-white bg-purple-700">
              Gameweek Points
            </div>
            <div className="flex items-center justify-center border border-black h-12 w-32 font-bold text-white bg-purple-700">
              Total Points
            </div>
          </div>
          {players.map((player: Player, i: number) => (
            <div key={i} className="flex flex-row">
              <div className="size-12 flex justify-center items-center">
                {player.last_rank > player.rank ? (
                  <IoIosArrowUp className="text-green-600 size-6" />
                ) : player.last_rank < player.rank ? (
                  <IoIosArrowDown className="text-red-600 size-6" />
                ) : (
                  <>
                    <div className="w-[1px]"></div>
                    <FaGripLines className="text-gray-500 size-4" />
                  </>
                )}
              </div>
              <div className="flex items-center justify-center border border-black h-12 w-[72px] gap-1 bg-slate-100">
                {player.rank}
              </div>
              <div className="flex items-center justify-center border border-black h-12 w-60 bg-slate-100">
                {player.entry_name}
              </div>
              <div className="flex items-center justify-center border border-black h-12 w-48 bg-slate-100">
                {player.event_total}
              </div>
              <div className="flex items-center justify-center border border-black h-12 w-32 bg-slate-100">
                {player.total}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
