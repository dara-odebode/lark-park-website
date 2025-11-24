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
      <Navbar />

      {/* Header */}
     
      <h1 className="text-4xl text-[#F3EAE5] font-bold mt-15 text-left leading-snug px-8 tracking-wide">
      TEA </h1>
        <p className="ml-8 text-[#F3EAE5] text-left leading-relaxed mb-15">
        2023 | English | Produced by Chloe Coombes </p>

    
      {/* FIRST SECTION */}
      <div className="flex w-full px-10 mt-10 mb-17 gap-10 text-left">

        {/* image */}
        <div className="relative w-[372] h-[560] flex-shrink-0 overflow-hidden">
          <Image
            src="/Tea poster.png"
            alt="Project"
            fill
            className="object-cover"
          />
        </div>

        {/* line */}
        <div className="w-[3px] bg-[#C64534]"></div>

        {/* text */}
        <div className="max-w-xl leading-relaxed">
          <p className="text-[#F3EAE5]">
          An applied theatre workshop for college students studying performing arts in association with Guildford School of Acting.
          </p>
          <br/>
          <p className="text-[#F3EAE5]">
          Using a variety of improvisation drama games to encourage comfortability with devising quickly, we worked collaboratively with the group of young people to look at the pros and cons of social media. In groups, the students created a scene for their opposing viewpoints on social media and performed their short scenes to the group. This one hour and a half workshop encouraged critical thinking, creativity, and empathy for other people’s points of view. 
          </p>
        </div>
      </div>
      
      {/* BEHIND THE SCENES */}
    
      <h1 className="text-[#F3EAE5] text-4xl font-bold mb-15 text-left leading-snug px-8 tracking-wide">
        Behind the Scenes </h1>

        <div className="flex gap-50 w-full ml-10 text-2xl mb-20">

      <ProjectCard
        img="/Tea.jpg"
        title=""
        href=""
      />
      </div>
    </main>
  )
}