import React from "react";
import DestinationSection from "./DestinationSection";
import { ActionButton } from "../ActionButton";
import { magoSections } from "./data";

const magoContent: React.FC = () => {
  return (
    <>
      {magoSections.map((section, index) => (
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

export default magoContent;
