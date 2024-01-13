import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const redSocial = {
  FACEBOOK: {
    nombre: "Facebook",
    icon: <FaFacebook />,
    className: "text-blue-600",
  },
  INSTAGRAM: {
    nombre: "Instragram",
    icon: <FaInstagram />,
    className: "text-pink-600",
  },
  TIKTOK: { nombre: "Tiktok", icon: <FaTiktok />, className: "text-rose-600" },
};

export const lista = [
  {
    id: 1,
    name: "Miguel",
    edad: "27",
    redes: [redSocial.FACEBOOK, redSocial.INSTAGRAM],
  },
  {
    id: 2,
    name: "Andrea",
    edad: "24",
    redes: [redSocial.FACEBOOK, redSocial.INSTAGRAM],
  },
  {
    id: 3,
    name: "Jhoel",
    edad: "17",
    redes: [redSocial.FACEBOOK, redSocial.TIKTOK],
  },
];
