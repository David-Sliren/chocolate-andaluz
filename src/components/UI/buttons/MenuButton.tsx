import { LuMenu, LuX } from "react-icons/lu";
interface Props {
  isOpen: boolean;
  handler: () => void;
}

export const MenuButton = ({ isOpen, handler }: Props) => {
  return (
    <button
      onClick={handler}
      className="md:hidden bg-mint-green text-forest-green w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-80 transition-opacity z-500"
    >
      {isOpen ? <LuX /> : <LuMenu />}
    </button>
  );
};
