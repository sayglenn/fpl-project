"use client";

import { useState, useEffect } from "react";
import Images from "@/components/about/Images";
import SocialLinks from "@/components/about/SocialLinks";

export default function Page() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => setLoaded(true), []);

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="border-b-2 border-gray-300 py-6 w-[540px]">
          <p
            className={`mb-2 text-center text-4xl font-bold transition-all duration-1000 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
          >
            About DHFPL
          </p>
          <p
            className={`text-center italic text-md transform text-gray-500 transition-all delay-200 duration-1000 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
          >
            DHFPL was a fantasy football league that originated with my friends
            and I. This website was created to showcase the league, as well as
            the reports that we chose to write as part of our love for the game
            and for football itself. As we look toward finding more friends to
            expand our league and to continue to grow, we hope that this website
            will serve as a testament to the fun and enjoyment that we have had
            over the years.
          </p>
        </div>
        <div className="border-b-2 border-gray-300 py-6 w-[540px]">
          <p
            className={`mb-2 text-center text-4xl font-bold transition-all duration-1000 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
          >
            Credits
          </p>
          <p
            className={`text-center italic text-md transform text-gray-500 transition-all delay-200 duration-1000 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
          >
            Special thanks to the friends that helped out with the reports and
            happy to have found a group of people that share the same passion
            for football and fantasy football as I do.
          </p>
        </div>
        <div className="border-b-2 border-gray-300 py-6 w-[540px]">
          <p
            className={`mb-2 text-center text-4xl font-bold transition-all duration-1000 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
          >
            Tech Stack
          </p>
          <p
            className={`text-center italic text-md transform text-gray-500 transition-all delay-200 duration-1000 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
          >
            The technologies that made it possible.
          </p>
          <Images />
        </div>
        <div className="py-6 w-[540px]">
          <p
            className={`mb-2 text-center text-4xl font-bold transition-all duration-1000 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
          >
            About the Creator
          </p>
          <p
            className={`text-center italic text-md transform text-gray-500 transition-all delay-200 duration-1000 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            }`}
          >
            I&apos;m Glenn, currently studying Computer Science in National
            University of Singapore. I&apos;m a huge fan of football and fantasy
            football and I hope you enjoy the website and the reports that we
            have written.
          </p>
          <SocialLinks />
        </div>
      </div>
    </>
  );
}
