"use client";

import { useState, useEffect } from "react";

export default function AccountHeader() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  return (
    <>
      <div className="flex flex-col items-center mt-6 border-b-2 border-gray-300 pb-3 w-full lg:w-[540px]">
        <p
          className={`text-center text-4xl font-bold transition-all duration-1000 mb-1 ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
          }`}
        >
          Account
        </p>
        <p
          className={`text-center italic text-md transform text-gray-500 transition-all delay-200 duration-1000 ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
          }`}
        >
          Your account page. You can view your profile and settings here.
        </p>
      </div>
    </>
  );
}
