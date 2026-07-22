import { Images } from "./Images";
import data1 from "../../assets/data-person/1.PNG";
import data2 from "../../assets/data-person/2.PNG";
import data3 from "../../assets/data-person/3.PNG";

export const Carrusel = () => {
  return (
    <section className=" w-full grid grid-cols-12 max-w-7xl">
      <section className="col-span-6 place-items-center">
        <div className="sticky top-2/4 -translate-y-2/4 space-y-2">
          <h1 className="bg-linear-to-r from-blue-700 to-blue-950 text-transparent bg-clip-text text-7xl font-bold">
            Esto es un banner
          </h1>
          <h2 className="text-4xl font-semi font-serif">
            Disfruta de las mejores series y peliculas
          </h2>
        </div>
      </section>

      <section className="col-span-6 space-y-4 place-items-center perspective-distant transform-3d">
        <Images imgSrc={data1} />
        <Images imgSrc={data2} />
        <Images imgSrc={data3} />
        <Images imgSrc={data1} />
        <Images imgSrc={data2} />
        <Images imgSrc={data3} />
      </section>
    </section>
  );
};
