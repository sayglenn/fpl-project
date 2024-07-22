import Link from "next/link";

export default function NavBar() {
  return (
    <div className="bg-purple-700 border rounded-[32px] px-3 py-2 flex flex-row gap-3 items-center">
      <Link href="/">
        <div className="text-white p-3 rounded-3xl flex flex-row transition duration-400 hover:-translate-y-[2px] hover:bg-white hover:text-purple-700 hover:border-black hover:border-2 hover:shadow-xl hover:p-2">
          ⚽<p className="font-bold ml-3 ">DHFPL</p>
        </div>
      </Link>
      <div className="grow"></div>
      <p className="text-white italic">
        Bringing us together with Fantasy Football
      </p>
      <div className="grow"></div>
      <Link href="/reports" className="hover:bg-purple-900 rounded-3xl">
        <div className="text-white p-3 rounded-3xl transition duration-400 hover:-translate-y-[2px] hover:bg-white hover:text-purple-700 hover:border-black hover:border-2 hover:shadow-xl hover:p-2">
          <p className="font-bold">Reports</p>
        </div>
      </Link>
      <Link href="/leaderboard" className="hover:bg-purple-900 rounded-3xl">
        <div className="p-3 text-white rounded-3xl transition duration-400 hover:-translate-y-[2px] hover:bg-white hover:text-purple-700 hover:border-black hover:border-2 hover:shadow-xl hover:p-2">
          <p className="font-bold">Leaderboard</p>
        </div>
      </Link>
      <Link href="/about" className="hover:bg-purple-900 rounded-3xl">
        <div className="p-3 text-white rounded-3xl transition duration-400 hover:-translate-y-[2px] hover:bg-white hover:text-purple-700 hover:border-black hover:border-2 hover:shadow-xl hover:p-2">
          <p className="font-bold">About</p>
        </div>
      </Link>
    </div>
  );
}
