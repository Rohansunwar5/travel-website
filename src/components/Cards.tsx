"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";


interface CardContentProps {
  title: string;
  description: string;
}

const CardContent: React.FC<CardContentProps> = ({ title, description }) => (
  <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[15rem]">
    <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
      {title}
    </h3>
    <div className="text-base !m-0 !p-0 font-normal">
      <span className="text-slate-500">{description}</span>
    </div>
    <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
  </div>
);


export default function Cards() {
  return (
    <div className="h-[1em] w-full flex items-center justify-center gap-x-20">
      <PinContainer title="Goa" href="https://twitter.com/mannupaaji">
        <CardContent
          title="Vacation on Goa"
          description="Customizable Tailwind CSS and Framer Motion Components."
        />
      </PinContainer>
      <PinContainer title="Manali" href="https://twitter.com/mannupaaji">
        <CardContent
          title="Chills of Manali"
          description="Customizable Tailwind CSS and Framer Motion Components."
        />
      </PinContainer>
      <PinContainer title="Darjeeling" href="https://twitter.com/mannupaaji">
        <CardContent
          title="Toy Train of Darjeeling"
          description="Customizable Tailwind CSS and Framer Motion Components."
        />
      </PinContainer>
    </div>
  );
}
