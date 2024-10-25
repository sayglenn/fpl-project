import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import HOFPlayerCard from "./HOFPlayerCard";
import hof1 from "./images/HOF1.png";
import hof2 from "./images/HOF2.png";

const hof = [
  {
    name: "Declan Rice",
    week: "GW3",
    image: hof1,
  },
  {
    name: "William Saliba",
    week: "GW8",
    image: hof2,
  },
];

export default function PlayerCarousel() {
  return (
    <>
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
            stopOnMouseEnter: false,
            stopOnInteraction: false,
          }),
        ]}
        className="h-[300px] w-[500px] mt-1"
      >
        <CarouselContent className="items-center">
          {hof.map((player, i) => (
            <CarouselItem key={i} className="p-2 flex justify-center h-[250px]">
              <HOFPlayerCard
                name={player.name}
                week={player.week}
                image={player.image}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselDots className="mt-5" />
      </Carousel>
    </>
  );
}
