import React from "react";
import DestinationSection from "./DestinationSection";
import { ActionButton } from "../ActionButton";
import { tawangSections } from './data';

const TawangContent: React.FC = () => {
  return (
    <>
      {tawangSections.map((section, index) => (
        <DestinationSection
          key={index}
          title={section.title}
          content={section.content}
          image={section.image}
          imageAlt={section.imageAlt}
        />
      ))}
      <ActionButton />
    </>
  );
};

export default TawangContent;
