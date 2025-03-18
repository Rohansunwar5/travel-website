"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import AnimatedTitle from "./AnimatedTitle";
import { destinationData } from "./destinations/data";
import { DestinationData } from "@/types/destination";
import TawangContent from "./destinations/TawangContent";
import MechukaContent from "./destinations/MechukaContent";
import MagoContent from "./destinations/MagoAndThingbu";
import DirangContent from "./destinations/DirangContent";

interface CardWithContentProps {
  card: DestinationData;
  index: number;
}

const CardWithContent: React.FC<CardWithContentProps> = ({ card, index }) => {
  const getContent = () => {
    switch (card.contentType) {
      case "tawang":
        return <TawangContent />;
      case "mechuka":
        return <MechukaContent />;
      case "mago":
        return <MagoContent />;
      case "dirang":
        return <DirangContent/>;
      default:
        return null;
    }
  };

  return (
    <Card
      key={card.src}
      card={{...card, content: getContent()}}
      index={index}
    />
  );
};

export default function Cards() {
  const cards = destinationData.map((card, index) => (
    <CardWithContent key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full relative py-20">
      <AnimatedTitle
        title="Top <b>P</b>laces  <br /> to <b>V</b>isit "
        containerClass="mt-5 !text-black text-center"
      />
      <Carousel items={cards} />
    </div>
  );
}
