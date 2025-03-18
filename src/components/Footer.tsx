import Link from 'next/link';
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const socialLinks = [
  { name: 'Instagram', href: 'https://www.instagram.com/nomads_lane_2024?igsh=Z2VoNzZoZjg2eWR3' },
  { name: 'Facebook', href: 'https://facebook.com' },
  { name: 'Twitter', href: 'https://vimeo.com' },
];

const navigationLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#story' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
  { name: 'Features', href: '#features' },
];

const Footer: React.FC = () => {
  return (
    <footer className="relative font-neutralFace px-3">
      {/* Large Name Header (Desktop Only) */}
      <div className="hidden lg:block mb-10">
        <h1 className="mx-1 font-monument font-semibold py-10 text-9xl my-1 leading-none">
          NOMAD <br /> LANE
        </h1>
      </div>

      {/* Social Follow Section */}
      <div className="flex font-raleway flex-col lg:flex-row items-start lg:items-center justify-between mb-5">
        <div className="mb-4 lg:mb-0">FOLLOW US</div>
        {socialLinks.map((link) => (
          <Link 
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl underline hover:text-gray-300 transition-colors"
          >
            {link.name.toUpperCase()}
          </Link>
        ))}
      </div>

      {/* Navigation Links */}
      <div className="flex font-raleway pt-5 flex-col lg:flex-row items-end lg:items-center justify-between mb-5">
        <ScrollLink 
          to="hero" 
          smooth={true} 
          duration={500}
          className="mb-4 lg:mb-0 cursor-pointer hover:text-gray-300 transition-colors"
        >
          TOP
        </ScrollLink>
        {navigationLinks.map((link) => (
          <ScrollLink
            key={link.name}
            to={link.href.replace('#', '')}
            smooth={true}
            duration={500}
            className="mx-1 font-raleway font-bold text-3xl hover:text-gray-300 transition-colors cursor-pointer"
          >
            {link.name.toUpperCase()}
          </ScrollLink>
        ))}
      </div>

      <div className="w-full h-[2px] bg-white my-5"></div>

      {/* Footer Bottom */}
      <div className="flex flex-col lg:flex-row lg:mt-20 mb-2 items-start lg:items-end justify-between">
        <div className="my-5 lg:my-0">
          COPYRIGHT {new Date().getFullYear()} - NL
        </div>
        
        <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-5 w-full lg:w-auto">
          {/* <Link href="/jobs" className="hover:underline">JOBS</Link> */}
          <div>
            AN INDEPENDENT <br /> TRAVEL AGENCY
          </div>
          {/* <Link href="/open-roles" className="hover:underline">OPEN ROLES</Link> */}
        </div>

        {/* Social Icons Bottom */}
        <div className="flex space-x-3 mt-5 lg:mt-0">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              {link.name.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;