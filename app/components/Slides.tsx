import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import Jeep from "~/img/jeep.jpg";
import Coin from "~/img/coin.jpg";
import children from "~/img/children.jpg";

export default function Slides() {
  return (
    <Carousel className="Slides">
      <CarouselContent>
        <CarouselItem>
          <img src={Jeep} alt={Jeep} />
        </CarouselItem>
        <CarouselItem>
          <img src={Coin} alt={Coin} />
        </CarouselItem>
        <CarouselItem>
          <img src={children} alt={children} />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className={"prev"} />
      <CarouselNext className={"next"} />
    </Carousel>
  );
}
