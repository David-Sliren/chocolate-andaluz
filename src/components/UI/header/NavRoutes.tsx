import { useEffect, useState } from "react";

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
    link: "#",
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
      className={`relative text-forest-green px-4 py-2 rounded-full overflow-hidden before:absolute before:top-0 before:left-0 before:bg-mint-green before:h-full before:w-full before:-translate-x-[100%] before:transition-transform before:duration-400 before:-z-1 ${isHash === link && "before:translate-x-0"}`}
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

    window.addEventListener("popstate", handleLocationChange);

    return () => window.removeEventListener("popstate", handleLocationChange);
  }, []);

  return (
    <ul
      className={` flex flex-col md:flex-row fixed md:static top-0 right-0 bg-light-bg md:bg-transparent pt-20 md:p-0 w-5/6 md:w-fit h-dvh md:h-fit items-center justify-start gap-10 md:gap-6 font-medium text-forest-green transition-transform  ${isOpen ? "translate-x-0" : "translate-x-100"} md:translate-0`}
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
