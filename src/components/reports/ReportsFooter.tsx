"use client";

import { useState, useEffect } from "react";

export default function ReportsFooter() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-[540px] border-t-2 border-gray-300 pb-3">
          <p
            className={`text-center text-4xl font-bold transition-all duration-1000 mt-4 mb-1 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
          >
            Footnote
          </p>
          <p
            className={`text-center italic text-md transform text-gray-500 transition-all delay-200 duration-1000 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
          >
            Our reports are written by our players in the league and are meant
            to serve as a form of entertainment and insight into the world of
            fantasy football. We hope you enjoy reading them as much as we enjoy
            writing them. Thank you for visiting our website.
          </p>
        </div>
      </div>
    </>
  );
}
