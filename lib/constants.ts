import { SiFacebook, SiInstagram, SiTiktok, SiYoutube } from "react-icons/si";
import serviceImg from "@/assets/hardwood.jpg";
import installImg from "@/assets/floor_instalation.jpg";
import repairImg from "@/assets/floor_repair.jpg";
import cookArea from "@/assets/cook_county.jpg";
import dupageArea from "@/assets/dupage_county.jpg";
import lakeArea from "@/assets/lake_county.jpg";

export const LINKS = [
  { label: "Refinishing", href: "#" },
  { label: "Installation", href: "#" },
  { label: "Floor Repair", href: "#" },
  { label: "Warranty", href: "#" },
  { label: "Gallery", href: "#" },
  { label: "Contact Us", href: "#" },
];

export const SOCIAL_CTAS = [
  { Component: SiFacebook, href: "https://www.facebook.com/flooring.gators" },
  {
    Component: SiInstagram,
    href: "https://www.instagram.com/flooring.gators/?utm_source=qr",
  },
  { Component: SiTiktok, href: "https://www.tiktok.com/@flooringgators" },
  { Component: SiYoutube, href: "https://www.youtube.com/@FlooringGators" },
];

export const SERVICE_CARDS = [
  {
    title: "Wood Floor Refinishing",
    description:
      "Whether your hardwood floor has aged or you're looking for a new look, we can help you out.",
    chips: [
      "Sanding",
      "Staining",
      "Water-Based Finishing",
      "Polyurethane-Based Finishing",
    ],
    image: serviceImg,
  },
  {
    title: "Floor Installation",
    description:
      "If it looks like wood, we sure do install it. Engineering HardWood to Vinyl (LVP). You name it, and we instal it!",
    chips: [
      "Engineered Wood",
      "Subfloor Prep",
      "Solid Wood",
      "Laminate",
      "Vinyl Plank",
    ],
    image: installImg,
  },
  {
    title: "Floor Repair",
    description:
      "Flooring Gators has you covered with everything from water damage to creaking subfloors.",
    chips: [
      "Water Damage",
      "Subfloor Damage",
      "Floor Creaking",
      "Residue Buildup",
    ],
    image: repairImg,
  },
];

export const AREA_CARDS = [
  {
    image: cookArea,
    title: "Cook County",
    href: "https://maps.app.goo.gl/uNF8CwwLThQDdKau7",
  },
  {
    image: dupageArea,
    title: "Dupage County",
    href: "https://maps.app.goo.gl/B2pXmPdP5urT8ee6A",
  },
  {
    image: lakeArea,
    title: "Lake County",
    href: "https://maps.app.goo.gl/D6kXyFtFQM9282od8",
  },
];

export const UNDERLAY_VARIANTS = {
  open: {
    width: "calc(100% - 32px)",

    height: "calc(100vh - 32px)",

    transition: { type: "spring", mass: 3, stiffness: 400, damping: 50 },
  },

  closed: {
    width: "80px",

    height: "80px",

    transition: {
      delay: 0.75,

      type: "spring",

      mass: 3,

      stiffness: 400,

      damping: 50,
    },
  },
};

export const HAMBURGER_VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],

      top: ["35%", "50%", "50%"],
    },

    closed: {
      rotate: ["45deg", "0deg", "0deg"],

      top: ["50%", "50%", "35%"],
    },
  },

  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },

    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },

  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],

      bottom: ["35%", "50%", "50%"],

      left: "50%",
    },

    closed: {
      rotate: ["45deg", "0deg", "0deg"],

      bottom: ["50%", "50%", "35%"],

      left: "calc(50% + 10px)",
    },
  },
};
