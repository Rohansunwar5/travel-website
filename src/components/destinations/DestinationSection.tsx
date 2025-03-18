import React from "react";
import Image from "next/image";
import { DestinationSection as DestinationSectionType } from "@/types/destination";

const DestinationSection: React.FC<DestinationSectionType> = ({
  title,
  content,
  image,
  imageAlt
}) => {
  // Function to process content and split it into paragraphs
  const formatContent = (content: string) => {
    // Split content by numbers or bullet points
    const sections = content.split(/(?=(?:\d+\.|\•))/);
    
    return sections.map((section, index) => {
      const trimmedSection = section.trim();
      
      // For the first section (if it doesn't start with a number or bullet)
      if (index === 0 && !trimmedSection.match(/^(?:\d+\.|\•)/)) {
        return (
          <p key={index} className="mb-6">
            {trimmedSection}
          </p>
        );
      }
      
      // For numbered or bulleted sections
      const isNumbered = trimmedSection.match(/^\d+\./);
      const isBulleted = trimmedSection.match(/^\•/);
      
      if (isNumbered || isBulleted) {
        const [marker, ...contentParts] = trimmedSection.split(/(?<=^(?:\d+\.|\•))\s/);
        const sectionContent = contentParts.join(' ').trim();
        
        return (
          <div key={index} className="mb-6">
            <div className="flex">
              <span className="font-semibold min-w-[30px]">{marker}</span>
              <div className="flex-1">
                <div className="font-semibold mb-2">
                  {sectionContent.split('\n')[0]}
                </div>
                {sectionContent.split('\n').slice(1).map((paragraph, pIndex) => (
                  <p key={pIndex} className="mb-4">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </div>
          </div>
        );
      }
      
      return (
        <p key={index} className="mb-6">
          {trimmedSection}
        </p>
      );
    });
  };

  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <div className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <h2 className="font-bold text-neutral-700 dark:text-neutral-200 mb-6">
          {title}
        </h2>
        <div className="space-y-4">
          {formatContent(content)}
        </div>
      </div>
      {image && (
        <Image
          src={image}
          alt={imageAlt || "Destination image"}
          height={500}
          width={500}
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-8"
        />
      )}
    </div>
  );
};

export default DestinationSection;