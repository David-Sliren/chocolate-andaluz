import { LuArrowRight } from "react-icons/lu";

interface Props {
  text: string;
  className?: string;
}

export const CallToActionButton = ({ text, className = "" }: Props) => {
  return (
    <a
      className={`hidden lg:inline-flex items-center gap-2 bg-mint-green text-forest-green px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform ${className}`}
      href="#"
    >
      {text} <LuArrowRight />
    </a>
  );
};
