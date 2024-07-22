"use client";

import { useEffect, useState } from "react";
import PlayerCarousel from "./PlayerCarousel";

export default function Header() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => setLoaded(true), []);

  return (
    <>
      <div className="mt-3 flex flex-col items-center">
        <div className="border-b-2 border-gray-300 py-6 w-full lg:w-[540px]">
          <p
            className={`text-center text-4xl font-bold transition-all duration-1000 mb-1 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
          >
            Welcome to the DHFPL Website!
          </p>
          <p
            className={`text-center italic text-md transform text-gray-500 transition-all delay-200 duration-1000 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
          >
            A one-stop platform for all to view Fantasy Football related items.
          </p>
        </div>
        <div className="py-6 border-b-2 border-gray-300 w-full lg:w-[540px]">
          <p
            className={`text-center text-3xl font-bold transition-all duration-1000 mb-1 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
          >
            Hall of Fame
          </p>
          <p
            className={`text-center italic text-md transform text-gray-500 transition-all delay-200 duration-1000 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
          >
            A showcase of all the exceptionally bad and unlucky returns.
          </p>
          <PlayerCarousel />
        </div>
        <div className="mt-3 py-6 w-full lg:w-[540px]">
          <p
            className={`text-center text-3xl font-bold transition-all duration-1000 mb-1 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
          >
            Player Spotlight
          </p>
          <p
            className={`text-center italic text-md transform text-gray-500 transition-all delay-200 duration-1000 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
          >
            A section dedicated to showcasing recent stellar performers.
          </p>
        </div>
      </div>
    </>
  );
}
