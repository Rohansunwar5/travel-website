"use client"

import Cards from "@/components/Cards";
import Features from "@/components/Features";
import HeroSection from "@/components/Hero";
import Hero from '@/components/Home';


export default function Home() {
  return (
    <div className="bg-[#4B4376]">
      <Hero/>
     {/* <HeroSection/> */}
     <Cards/>
     <Features/>
    </div>
  );
}
