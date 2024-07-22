"use client";

import { useEffect, useState } from "react";

export default function ReportsHeader() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => setLoaded(true), []);

  return (
    <div className="flex flex-col items-center mt-6">
      <div className="border-b-2 border-gray-300 pb-3 w-full lg:w-[540px]">
        <p
          className={`text-center text-4xl font-bold transition-all duration-1000 mb-1 ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
          }`}
        >
          Reports
        </p>
        <p
          className={`text-center italic text-md transform text-gray-500 transition-all delay-200 duration-1000 ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
          }`}
        >
          The collection of our written reports regarding each gameweek, league
          performances and fixture predictions and player recommendations.
        </p>
      </div>
    </div>
  );
}
