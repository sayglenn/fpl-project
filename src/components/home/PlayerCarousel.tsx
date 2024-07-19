import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import HOFPlayerCard from "./HOFPlayerCard";

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
          {Array.from({ length: 5 }, (_, i) => (
            <CarouselItem key={i} className="p-2 flex justify-center h-[250px]">
              <HOFPlayerCard name="Player Name" week="GW1" image="" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselDots className="mt-5" />
      </Carousel>
    </>
  );
}
