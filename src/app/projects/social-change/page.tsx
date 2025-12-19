'use client'

import Image from 'next/image'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

// project cards
const ProjectCard = ({
  img,
}: {
  img: string;
}) => {
  return (

<div className="block w-full md:w-117">
  <div className="relative h-45 md:h-70 w-full overflow-hidden">

        <Image
          src={img}
          alt="Project Images"
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
    </div>
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
                href="/legal/safeguarding-policy"
                className="block px-4 py-2 text-[#191919] hover:bg-[#C64534] hover:text-white text-left"
              >
                Safeguarding Policy
              </Link>

              <Link
                href="/legal/privacy-policy"
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
     
      <h1 className="text-2xl md:text-4xl text-[#F3EAE5] font-bold mt-10 md:mt-15 text-left leading-snug px-4 md:px-8 tracking-wide">
      INTRODUCTION TO DEVISING FOR SOCIAL CHANGE</h1>
      <p className="ml-0 md:ml-8 px-4 md:px-0 text-[#F3EAE5] text-left leading-relaxed mt-6 md:mt-0 mb-6 md:mb-15">
        2025 | English | Delivered by Chloe Coombes and Ashleigh-Ann French</p>

    
      {/* MAIN SECTION */}
      <div className="flex flex-col md:flex-row w-full px-4 md:px-10 mt-6 mb-17 gap-8 md:gap-10 text-left">

        {/* image */}
        <div className="relative w-full md:w-150 h-45 md:h-80 flex-shrink-0 overflow-hidden">
          <Image
            src="/Introduction to Devising 2.jpg"
            alt="Project"
            fill
            className="object-cover"
          />
        </div>

        {/* line */}
        <div className="hidden md:block w-[3px] bg-[#C64534]"></div>

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
    
      <h1 className="text-[#F3EAE5] text-4xl font-bold -mt-5 md:mt-0 mb-8 md:mb-15 text-left leading-snug px-8 tracking-wide">
        Behind the Scenes </h1>

      <div className="flex flex-col md:flex-row gap-6 md:gap-50 w-full px-4 md:ml-5 text-2xl mb-25 md:mb-20">

      <ProjectCard
        img="/Introduction to Devising 1.PNG"
      />

      <ProjectCard
        img="/Introduction to Devising 3.jpg"
        />
      </div>
    </main>
  )
}
