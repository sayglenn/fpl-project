import NextJS from "./images/nextjs.png";
import PostgreSQL from "./images/postgresql.png";
import TailwindCSS from "./images/tailwind.webp";
import Vercel from "./images/vercel.svg";
import Image from "next/image";

export default function Images() {
  return (
    <>
      <div className="flex flex-row gap-5 justify-center pt-4">
        <Image src={NextJS} alt="Next.js" width={100} height={100} />
        <Image src={PostgreSQL} alt="PostgreSQL" width={100} height={100} />
        <Image src={TailwindCSS} alt="TailwindCSS" width={100} height={100} />
        <Image src={Vercel} alt="Vercel" width={100} height={100} />
      </div>
    </>
  );
}
