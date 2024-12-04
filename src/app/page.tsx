"use client"

import Cards from "@/components/Cards";
import Features from "@/components/Features";
import Hero from '@/components/Home';
import { About } from "@/components/ui/featuresDemo";
import NavBar from "@/components/Navbar";
import Story from "@/components/Story";
import Middle from "@/components/Middle";


export default function Home() {
  return (
    <div className="bg-[#4B4376] ">
      <NavBar/>
      <section id="home">
        <Hero />
      </section>
      <section>
        <Story/>
      </section>
      <section>
        <Middle/>
      </section>
      <section id="prologue">
        <Cards />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="features">
        <Features />
      </section>
    </div>
  );
}
