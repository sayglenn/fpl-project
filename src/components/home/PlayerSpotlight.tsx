import Image, { StaticImageData } from "next/image";
import KaoruMitoma from "./images/KaoruMitoma.webp";
import RayanAitNouri from "./images/RayanAitNouri.webp";
import JamieVardy from "./images/JamieVardy.webp";

interface Player {
  name: string;
  price: number;
  position: string;
  description: string;
  image: StaticImageData;
}

const players: Player[] = [
  {
    name: "Kaoru Mitoma",
    price: 6.5,
    position: "MID",
    description:
      "Kaoru Mitoma is a Japanese professional footballer who plays as a midfielder for Brighton & Hove Albion. With his blistering pace and dribbling abilities, he is a candidate that will be a good value pick for your team while providing high returns.",
    image: KaoruMitoma,
  },
  {
    name: "Jamie Vardy",
    price: 5.5,
    position: "FWD",
    description:
      "Jamie Vardy is an English professional footballer who plays as a striker for Leicester City. He is known for his pace, finishing, and work rate, making him a valuable asset for any fantasy team at such a steal.",
    image: JamieVardy,
  },
  {
    name: "Rayan Aït-Nouri",
    price: 4.5,
    position: "DEF",
    description:
      "Rayan Aït-Nouri is a French professional footballer who plays as a left-back for Wolverhampton Wanderers. He is known for his attacking prowess and defensive capabilities, making him a great pick for your fantasy team if you are looking for defenders with strong attacking capabilities at cheaper options.",
    image: RayanAitNouri,
  },
];

function PlayerSpotlightCard({ player }: { player: Player }) {
  return (
    <>
      <div className="w-[300px] bg-purple-500 p-6 flex items-center flex-col text-white rounded-xl">
        <p className="font-bold text-[24px] underline mb-3">{player.name}</p>
        <Image
          src={player.image}
          alt={player.name}
          width={60}
          height={60}
          className="mb-3"
        />
        <p className="mb-1 font-bold text-[18px]">
          {player.position} | £{player.price}
        </p>
        <p className="text-center text-[16px] italic">{player.description}</p>
      </div>
    </>
  );
}

export default function PlayerSpotlight() {
  return (
    <>
      <div className="flex flex-row justify-around">
        {players.map((player, index) => (
          <PlayerSpotlightCard key={index} player={player} />
        ))}
      </div>
    </>
  );
}
