import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import icono from "../.././../assets/icono.svg";
export const Footer = () => {
  return (
    <footer id="contacto" className="bg-forest-green py-12 px-4 md:px-8 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* <!-- Footer Logo --> */}
        <div>
          <img
            alt="Chocolate Andalucía Logo"
            className="h-12 filter invert brightness-0"
            src={icono}
          />
        </div>
        {/* <!-- Contact Info --> */}
        <div className="text-sm font-light space-y-2 text-center md:text-left text-white">
          <p>
            <i className="fa-solid fa-location-dot mr-2"></i> Andalucía - Valle
            del Cauca
          </p>
          <p>
            <i className="fa-solid fa-phone mr-2"></i> 317 348 7915
          </p>
        </div>
        {/* <!-- Social Links --> */}
        <div className="flex gap-4">
          <a
            className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-forest-green transition-colors text-white"
            href="https://www.instagram.com/fabricadechocolateandaluz_/?hl=es"
            target="_blank"
          >
            <FaInstagram />
          </a>
          <a
            className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-forest-green transition-colors text-white"
            href="https://www.facebook.com/p/Chocolate-Andaluz-100076269365400/"
            target="_blank"
          >
            <FaFacebook />
          </a>
          <a
            className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white hover:text-forest-green transition-colors text-white"
            href="#"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
};
