'use client'

import Image from 'next/image'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

// project cards
const ProjectCard = ({
  img,
  title,
  href
}: {
  img: string;
  title: string;
  href: string;
}) => {
  return (
    <Link href={href} className="block w-117">
      {/* Images */}
      <div className="relative h-70 w-117 overflow-hidden cursor-pointer">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Title */}
      <p className="text-[#191919] font-bold text-xl text-center mt-4 leading-snug">
        {title}
      </p>
    </Link>
  );
};

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const isActive = pathname === href;

    return (
      <Link
        href={href}
        className={`relative pb-1 transition-colors duration-200 ${
          isActive ? "text-[#F3EAE5]" : "text-[#F3EAE5] hover:text-[#191919]"
        }`}
      >
        {label}

        {isActive && (
          <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-[#C64534]"></span>
        )}
      </Link>
    );
  };

  const legalActive = pathname.startsWith("/legal");

  return (
    <nav className="w-full flex justify-between items-center px-5 py-6">
      {/* Logo */}
      <Link href="/about" className="flex items-center space-x-3">
        <Image 
          src="/logo_white.png"
          alt="Lark Park Theatre Logo"
          width={160}
          height={160}
          className="object-contain"
        />
      </Link>

      {/* Links */}
      <div className="font-medium flex space-x-8 text-[#F3EAE5]">

        <NavLink href="/about" label="About" />
        <NavLink href="/projects" label="Previous Projects" />
        <NavLink href="/contact" label="Contact" />

        {/* legal dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <button
            className={`pb-1 transition-colors duration-200 ${
              legalActive ? "text-[#F3EAE5]" : "hover:text-[#191919]"
            } relative`}
          >
            Legal

            {legalActive && (
              <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-[#C64534]"></span>
            )}
          </button>

          {open && (
            <div className="absolute right-0 bg-[#F3EAE5] border border-[#C64534] shadow-lg w-48">
              <Link
                href="/legal/safeguarding"
                className="block px-4 py-2 text-[#191919] hover:bg-[#C64534] hover:text-white text-left"
              >
                Safeguarding Policy
              </Link>

              <Link
                href="/legal/privacy"
                className="block px-4 py-2 text-[#191919] hover:bg-[#C64534] hover:text-white text-left"
              >
                Privacy Policy
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

// Main Page
export default function HomePage() {
  const pathname = usePathname();

  // NavLink Component
  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        className={`
          relative pb-1 transition-colors duration-200
          ${isActive ? "text-[#F3EAE5]" : "text-[#F3EAE5] hover:text-[#191919]"}
        `}
      >
        {label}

        {isActive && (
          <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-[#C64534]"></span>
        )}
      </Link>
    );
  };

  return (
    <main className="flex flex-col text-center px-9 bg-[#77211F] mb-0.5">

      {/* Navbar */}
      <Navbar / >

      {/* Community Projects Header */}
      <p className="ml-8 text-[#F3EAE5] text-left leading-relaxed mt-18">
        Previous Projects
      </p>

      <h1 className="text-[#F3EAE5] text-5xl font-bold mb-19 text-left leading-snug px-8 tracking-wide">
        Community Projects
      </h1>

      <div className="flex gap-80 w-full ml-10 text-2xl mb-20">

        <ProjectCard
          img="/Introduction to Devising 2.jpg"
          title="INTRODUCTION TO DEVISING FOR SOCIAL CHANGE"
          href="/projects/Social_change"
        />

        <ProjectCard
          img="/Character Creation Photo.jpg"
          title="INTRODUCTION TO DEVISING AND CHARACTER CREATION"
          href="/projects/Character_creation"/>

      </div>

      {/* Production Work Header */}
      <h1 className="text-[#F3EAE5] text-5xl font-bold mb-15 text-left leading-snug px-8 tracking-wide">
        Production Work
      </h1>

      <div className="flex gap-10 w-full ml-10 mb-30 text-2xl">

        <ProjectCard
          img="/Tea.jpg"
          title="TEA"
          href="/projects/Tea"/>
      </div>
    </main>
  );
}
