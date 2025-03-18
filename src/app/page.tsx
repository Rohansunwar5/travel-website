"use client"

import Cards from "@/components/Cards";
import Features from "@/components/Features";
import Hero from '@/components/Home';
import { About } from "@/components/ui/featuresDemo";
import NavBar from "@/components/Navbar";
import Story from "@/components/Story";
import Middle from "@/components/Middle";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Testimonials } from "@/components/Testimonials";
import ItenaryBox1 from "@/components/ItenaryBox1";
import ItenaryBox2 from "@/components/ItenaryBox2";
import ItenaryBox3 from "@/components/ItenaryBox3";



export default function Home() {
  return (
    <div className="bg-[#4B4376] ">
      <NavBar/>
      <section id="home">
        <Hero />
      </section>
      <section id="">
        <Story/>
      </section>
      <section id="middle">
        <Middle/>
      </section>
      <section id="cards">
        <Cards />
      </section>
      <section id="itinerary">
        <ItenaryBox1 />
      </section>
      <section id="itenaries">
        <ItenaryBox2 />
      </section>
      <section id="itenaries">
        <ItenaryBox3 />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="testimonials">
        <Testimonials/>
      </section>
      <section id="contact">
        <Contact/>
      </section>
      <section id="footer">
        <Footer/>
      </section>
    </div>
  );
}
