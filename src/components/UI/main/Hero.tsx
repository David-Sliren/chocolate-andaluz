import { CallToActionButton } from "../buttons/CallToActionButton";
import andaluz from "../../../assets/carrusel-data/andaluz.webp";

export const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto md:mt-10 mb-5">
      <div className="hero-bg lg:rounded-[2rem] overflow-hidden min-h-[500px] flex items-center  lg:p-16 relative">
        <div className="absolute w-full lg:max-w-full h-full lg:max-h-full lg:mask-l-from-45% lg:mask-l-to-80%  lg:mask-l-from-black  lg:mask-l-to-transparent  brightness-60">
          <img
            src={andaluz}
            alt=""
            className="size-full object-cover object-right"
          />
        </div>
        <div className="w-full lg:w-1/2 relative z-10 text-center lg:text-left p-6 text-white lg:text-black">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 md:6 space-x-1 font-noto">
            Un día para
            <br />
            disfrutar, explorar
            <br />y crear
            <span className="border-b-4 border-mint-green inline-block leading-none ml-4 md:ml-0 xl:ml-4">
              recuerdos
            </span>
          </h1>
          <p className="text-base sm:text-lg mb-8 max-w-md mx-auto lg:mx-0 bg-transparent p-4 lg:p-0 backdrop-blur-md lg:backdrop-blur-none rounded-lg">
            Anímate a conocer Andalucía por solo $95.000. ¿Quieres hacer algo
            diferente? Ven y disfruta de un pasadía lleno de experiencias
            inolvidables en la Ruta del Chocolate Artesanal.
          </p>
          <CallToActionButton text="Reserva tu cupo" />
        </div>
      </div>
    </section>
  );
};
