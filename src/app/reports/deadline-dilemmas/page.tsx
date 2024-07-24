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
            Deadline Dilemmas
          </p>
          <p
            className={`text-center italic text-md transform text-gray-500 transition-all delay-200 duration-1000 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
          >
            Struggling to find a decision to make on your team? Let the latest
            Deadline Dilemmas report help you out! Enjoy a review of potential
            players from upcoming fixtures and make the best decision for your
            team.
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
