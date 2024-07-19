import Link from "next/link";
import GitHub from "./images/github-mark.svg";
import LinkedIn from "./images/linkedin.webp";
import Image from "next/image";

export default function SocialLinks() {
  return (
    <>
      <div className="pt-3 flex flex-col gap-2 items-center">
        <Link
          href="https://github.com/sayglenn"
          className="flex flex-row justify-center gap-2 items-center hover:bg-white p-3 rounded-2xl transition duration-400 hover:-translate-y-1 hover:border-black hover:border-2 hover:shadow-xl"
        >
          <Image src={GitHub} alt="GitHub" height={36} width={36}></Image>
          <p>github/sayglenn</p>
        </Link>
        <Link
          href="https://linkedin.com/in/sayglenn"
          className="flex flex-row justify-center gap-1 items-center hover:bg-white px-2 py-1 rounded-2xl transition duration-400 hover:-translate-y-1 hover:border-blue-500 hover:border-2 hover:shadow-xl"
        >
          <Image src={LinkedIn} alt="LinkedIn" height={50} width={50}></Image>
          <p>linkedin/sayglenn</p>
        </Link>
      </div>
    </>
  );
}
