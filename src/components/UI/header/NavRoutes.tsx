import { useEffect, useState } from "react";
import { cn } from "../../../utils/cn";

interface Props {
  isOpen: boolean;
  handlerOpen: () => void;
}

interface PropsRoutes {
  title: string;
  link: string;
  handlerOpen?: () => void;
  isHash: string;
}

const routes = [
  {
    link: "#inicio",
    tag: "Inicio",
  },
  {
    link: "#beneficios",
    tag: "Beneficios",
  },
  {
    link: "#experiencia",
    tag: "Experiencia",
  },

  {
    link: "#contacto",
    tag: "Contacto",
  },
];

const NavRoute = ({ title, link, isHash, handlerOpen }: PropsRoutes) => {
  return (
    <li
      onClick={handlerOpen}
      className={cn(
        "relative text-forest-green px-4 py-2 rounded-full overflow-hidden before:absolute before:top-0 before:left-0 before:bg-mint-green before:h-full before:w-full before:-translate-x-[100%] before:transition-transform before:duration-400 before:-z-1",
        {
          "before:translate-x-0": isHash === link && isHash !== "#inicio",
        },
      )}
    >
      <a href={link} className="size-full">
        {title}
      </a>
    </li>
  );
};

export const NavRoutes = ({ isOpen, handlerOpen }: Props) => {
  const [isHash, setIsHash] = useState(window.location.hash);

  useEffect(() => {
    const handleLocationChange = () => {
      setIsHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleLocationChange);

    return () => window.removeEventListener("hashchange", handleLocationChange);
  }, []);

  return (
    <ul
      className={cn(
        "flex flex-col md:flex-row fixed md:static top-0 right-0 bg-light-bg md:bg-transparent pt-20 md:p-0 w-2/3 md:w-fit h-dvh md:h-fit items-center justify-start gap-10 md:gap-6 font-medium text-forest-green shadow transition-transform duration-520 translate-x-100 md:translate-0 shadow-2xl md:shadow-none",
        {
          "translate-x-0": isOpen,
        },
      )}
    >
      {routes.map((item, i) => (
        <NavRoute
          key={i}
          link={item.link}
          title={item.tag}
          handlerOpen={handlerOpen}
          isHash={isHash}
        />
      ))}
    </ul>
  );
};
