"use client"

import Cards from "@/components/Cards";
import Features from "@/components/Features";
import Hero from '@/components/Home';


export default function Home() {
  return (
    <div className="bg-[#4B4376]">
      <Hero/>
     <Cards/>
     <Features/>
    </div>
  );
}
