import type { ReactNode } from "react";
import {
  LuBusFront,
  LuCamera,
  LuLeaf,
  LuTentTree,
  LuUtensils,
} from "react-icons/lu";

interface Props {
  text: string;
  icon: ReactNode;
}

const benefits = [
  {
    tag: <LuLeaf />,
    target: "Chocolate artesanal",
  },

  {
    tag: <LuBusFront />,
    target: "Transporte ida y regreso",
  },
  {
    tag: <LuCamera />,
    target: "Espacios para fotografías",
  },
  {
    tag: <LuTentTree />,
    target: "Paisajes naturales",
  },
  {
    tag: <LuUtensils />,
    target: "Experiencia gastronómica",
  },
];

const BenefitIcon = ({ icon: Icon = null, text }: Props) => {
  return (
    <div className="flex flex-col items-center gap-y-2">
      <div className="text-forest-green text-3xl">{Icon}</div>
      <p className="text-center">{text}</p>
    </div>
  );
};

export const Benefit = () => {
  return (
    <section
      id="beneficios"
      className="bg-light-bg py-16 md:mt-[-4rem] pt-16 md:pt-24 px-4 sm:px-8 scroll-m-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px w-12 md:w-16 bg-forest-green/30"></div>
          <h2 className="text-2xl md:text-3xl font-bold text-center">
            Beneficios
          </h2>
          <div className="h-px w-12 md:w-16 bg-forest-green/30"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 place-items-center">
          {benefits.map((item) => (
            <BenefitIcon icon={item?.tag} text={item.target} />
          ))}
        </div>
      </div>
    </section>
  );
};
