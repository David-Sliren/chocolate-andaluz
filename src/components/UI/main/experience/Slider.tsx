import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { getAllImages } from "../../../../utils/gobalVite";
import { useState } from "react";
import { cn } from "../../../../utils/cn";

interface PropsCardImg {
  source: string;
}
const UrlOfImages = Object.values(getAllImages) as string[];

const CardImg = ({ source }: PropsCardImg) => {
  return (
    <div className="shrink-0 grow-0 px-2 overflow-hidden w-[calc(100%/var(--items))]">
      <article className="h-[300px] md:h-[450px] rounded-2xl overflow-hidden">
        <img
          alt="Church View"
          className="size-full object-cover"
          src={source}
          loading="lazy"
        />
      </article>
    </div>
  );
};

export const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const maxIndex = Math.max(0, UrlOfImages.length - 1);

  function handleNext() {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  }

  function handlePrev() {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  }

  function handleMarket(index: number) {
    setCurrentIndex(index);
  }

  return (
    <section className=" w-full lg:w-2/3 flex items-center justify-center gap-2 md:gap-4 relative">
      <button
        onClick={handlePrev}
        className="bg-mint-green text-forest-green rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center flex-shrink-0 shadow-md cursor-pointer"
      >
        <LuChevronLeft />
      </button>
      <section className=" [--items:1] w-full overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-out -mx-2"
          style={{
            transform: `translateX(calc(-${currentIndex} * (100% /var(--items)))`,
          }}
        >
          {UrlOfImages.map((item, i) => (
            <CardImg key={i} source={item} />
          ))}
        </div>
      </section>

      <button
        onClick={handleNext}
        className="bg-mint-green text-forest-green rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center flex-shrink-0 shadow-md cursor-pointer"
      >
        <LuChevronRight />
      </button>

      {/* <!-- Dots --> */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 cursor-pointer">
        {UrlOfImages.map((_, id) => (
          <div
            key={id}
            onClick={() => handleMarket(id)}
            className={cn(
              "w-2 h-2 rounded-full bg-forest-green/40 transition-all cursor-pointer",
              {
                "bg-forest-green w-6": id === currentIndex,
              },
            )}
          />
        ))}
      </div>
    </section>
  );
};
