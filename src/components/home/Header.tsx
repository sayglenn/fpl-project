"use client";

import { useEffect, useState } from "react";

export function Header() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => setLoaded(true), []);

  return (
    <div className="mt-3 p-3">
      <p
        className={`text-4xl font-bold transition-all duration-1000 ${
          loaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
        }`}
      >
        Welcome to the DHFPL Website!
      </p>
      <p
        className={`ml-1 mb-12 italic text-md transform text-gray-500 transition-all delay-200 duration-1000 ${
          loaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
        }`}
      >
        A one-stop platform for all to view Fantasy Football related items.
      </p>
      <p
        className={`text-3xl font-bold transition-all duration-1000 ${
          loaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
        }`}
      >
        Hall of Fame
      </p>
      <p
        className={`ml-1 mb-12 italic text-md transform text-gray-500 transition-all delay-200 duration-1000 ${
          loaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
        }`}
      >
        A showcase of all the exceptionally bad and unlucky returns.
      </p>
    </div>
  );
}
