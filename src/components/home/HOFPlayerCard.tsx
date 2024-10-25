import Image, { StaticImageData } from "next/image";

export default function HOFPlayerCard({
  name,
  week,
  image,
}: {
  name: string;
  week: string;
  image: StaticImageData;
}) {
  return (
    <div className="flex w-[60%] p-4 h-auto md:h-[100%] md:w-[85%] bg-white rounded-3xl shadow-md justify-center">
      <div className="w-[100%] lg:w-[80%] flex items-center justify-center">
        <div className="flex flex-col justify-center items-center gap-2">
          <Image src={image} alt={name} className="size-40 rounded-xl" />
          <div className="flex flex-row justify-center items-center gap-5">
            <p className="text-xl font-bold">{name}</p>
            <p className="text-xl">{week}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
