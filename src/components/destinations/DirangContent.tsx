import React from "react";
import DestinationSection from "./DestinationSection";
import { ActionButton } from "../ActionButton";
import { dirangSections } from "./data";

const dirangContent: React.FC = () => {
  return (
    <>
      {dirangSections.map((section, index) => (
        <DestinationSection
          key={index}
          title={section.title}
          content={section.content}
          imageAlt={section.imageAlt}
        />
      ))}
      <ActionButton />
    </>
  );
};

export default dirangContent;
