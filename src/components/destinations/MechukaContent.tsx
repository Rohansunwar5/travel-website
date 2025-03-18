import React from "react";
import DestinationSection from "./DestinationSection";
import { ActionButton } from "../ActionButton";
import { mechukaSections } from "./data";

const MechukaContent: React.FC = () => {
  return (
    <>
      {mechukaSections.map((section, index) => (
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

export default MechukaContent;
