import { ReservaionCard } from "./ReservaionCard";
import { Slider } from "./Slider";

export const Experience = () => {
  return (
    <section
      id="experiencia"
      className="max-w-7xl mx-auto py-16 px-4 sm:px-8 scroll-m-8"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center md:text-left">
        Así será tu experiencia
      </h2>
      <section className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
        <Slider />
        <ReservaionCard />
      </section>
    </section>
  );
};
