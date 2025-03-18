import { StaticImageData } from "next/image";

export interface DestinationSection {
  title: string;
  content: string;
  image?: StaticImageData;
  imageAlt?: string;
}

export interface DestinationData {
  category: string;
  title: string;
  src: string;
  contentType: "tawang" | "mechuka" | "mago" | "dirang";
}