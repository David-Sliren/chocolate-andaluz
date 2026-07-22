import icon from "../../../assets/icono.svg";
import { NavRoutes } from "./NavRoutes";
import { useState } from "react";
import { MenuButton } from "../buttons/MenuButton";
import { CallToActionButton } from "../buttons/CallToActionButton";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <header className="sticky top-0 flex justify-center [container-type:scroll-state] z-111">
      <nav className="container-nav py-2 px-4 md:px-8 flex items-center justify-between max-w-7xl mx-auto w-full z-50 bg-light-bg md:bg-light-bg/20 backdrop-blur-md md:border-none  transition-all duration-280 ease-linear">
        {/* <!-- Logo --> */}
        <a href="#" className="flex items-center gap-2">
          <img alt="Chocolate Andalucía Logo" className="h-12" src={icon} />
        </a>
        {/* <!-- Navigation --> */}
        <NavRoutes isOpen={isOpen} handlerOpen={handleOpen} />
        {/* <!-- Mobile Menu Button --> */}
        <MenuButton handler={handleOpen} isOpen={isOpen} />
        {/* <!-- CTA Button --> */}
        <CallToActionButton text="Reservar ahora" />
      </nav>
    </header>
  );
};
