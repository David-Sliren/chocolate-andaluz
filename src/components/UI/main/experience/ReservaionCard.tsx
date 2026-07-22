import { LuBusFront, LuCalendarDays, LuRoute } from "react-icons/lu";
import { CallToActionButton } from "../../buttons/CallToActionButton";
import { GiChocolateBar } from "react-icons/gi";
import type { ReactNode } from "react";

interface Props {
  text: string;
  icon: ReactNode;
}

const reservations = [
  {
    tag: <LuCalendarDays />,
    target: "Reserva tu cupo",
  },

  {
    tag: <LuBusFront />,
    target: "Transporte incluido",
  },
  {
    tag: <GiChocolateBar />,
    target: "Create tu propia barra",
  },
  {
    tag: <LuRoute />,
    target: "Ruta del Chocolate Artesanal",
  },
  //   {
  //     tag: <LuUtensils />,
  //     target: "Experiencia gastronómica",
  //   },
];

const ReservationIcon = ({ icon: Icon = null, text }: Props) => {
  return (
    <li className="flex items-center gap-x-2">
      <div className="text-forest-green text-3xl">{Icon}</div>
      <p className="text-center text-md">{text}</p>
    </li>
  );
};
export const ReservaionCard = () => {
  return (
    <article className="w-full lg:w-1/3 max-w-sm bg-white rounded-3xl p-6 md:p-8 custom-shadow border border-gray-100 mx-auto mt-8 lg:mt-0">
      <ul className="space-y-8 mb-8">
        {reservations.map(({ tag, target }, i) => (
          <ReservationIcon key={i} icon={tag} text={target} />
        ))}
      </ul>
      <div className="text-center mb-6">
        <p className="text-mint-green font-medium mb-1">Por solo</p>
        <p className="text-4xl font-bold text-forest-green">$95.000</p>
      </div>
      <CallToActionButton
        text="Reservar ahora"
        className="w-full justify-center"
      />
    </article>
  );
};
