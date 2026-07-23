import { LuArrowRight } from "react-icons/lu";
import { cn } from "../../../utils/cn";
import { messageToWhatsaap } from "../../../utils/messageToWhatsaap";

interface Props {
  text: string;
  className?: string;
}

export const CallToActionButton = ({ text, className = "" }: Props) => {
  const link = messageToWhatsaap({
    phoneNumber: "573173487915",
    message:
      "¡Hola, encuentro interesante la propuesta, me gustaria reservar un cupo para ir a la pasadia en la finca de chocolate andaluz!.",
  });
  return (
    <a
      className={cn(
        "inline-flex items-center gap-2 bg-mint-green text-forest-green px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform ",
        className,
      )}
      href={link}
    >
      {text} <LuArrowRight />
    </a>
  );
};
