import { LuArrowRight } from "react-icons/lu";
import { cn } from "../../../utils/cn";
import { messageToWhatsaap } from "../../../utils/messageToWhatsaap";
import { DEFAULT_MESSAGE } from "../../../constants/messageWhatsapp";

interface Props {
  text: string;
  className?: string;
}

export const CallToActionButton = ({ text, className = "" }: Props) => {
  const link = messageToWhatsaap(DEFAULT_MESSAGE);
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
