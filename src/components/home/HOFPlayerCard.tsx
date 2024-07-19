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
    <div className="flex w-[100%] p-4 h-auto md:h-[100%] lg:w-[85%] bg-white rounded-3xl shadow-md justify-between">
      <div className="w-[100%] lg:w-[80%]">
        <p>Title</p>
        <p className="mt-4 text-[18px]">- Author</p>
      </div>
    </div>
  );
}
