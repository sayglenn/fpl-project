"use client";

import { useState, useEffect } from "react";

export default function Page() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center mt-6 border-b-2 border-gray-300 pb-3 lg:w-[540px]">
          <p
            className={`text-center text-4xl font-bold transition-all duration-1000 mb-1 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
          >
            Friday Forecasts
          </p>
          <p
            className={`text-center italic text-md transform text-gray-500 transition-all delay-200 duration-1000 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
          >
            Looking for comprehensive information about the gameweek, including
            exciting fixtures and players to pick? You&apos;re in the right
            place! Enjoy an overview of the upcoming week, including potential
            captaincy options.
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
