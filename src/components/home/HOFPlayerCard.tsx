import Image from "next/image";

export default function HOFPlayerCard({
  name,
  week,
  image,
}: {
  name: string;
  week: string;
  image: string;
}) {
  return (
    <div className="flex w-[60%] p-4 h-auto md:h-[100%] md:w-[85%] bg-white rounded-3xl shadow-md justify-center">
      <div className="w-[100%] lg:w-[80%] flex items-center justify-center">
        <p className="italic text-gray-400 text-center">
          The season is yet to begin. Stay tuned!
        </p>
      </div>
    </div>
  );
}
