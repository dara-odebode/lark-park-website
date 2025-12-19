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
<div className="block w-full max-w-md">
  {/* Images */}
  <div className="relative h-56 md:h-70 w-full overflow-hidden">
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
    <main className="flex flex-col text-center px-4 md:px-9 bg-[#77211F] mb-0.5">

      {/* Navbar */}
      <Navbar />

      {/* Header */}
     
      <h1 className="text-[#F3EAE5] text-3xl md:text-5xl font-bold mt-10 md:mt-15 text-left leading-snug px-4 md:px-8 tracking-wide">
      TEA </h1>
      <p className="px-4 md:ml-8 md:px-0 text-[#F3EAE5] text-left leading-relaxed mb-8 md:mb-15">
        2023 | English | Produced by Chloe Coombes </p>

    
      {/* MAIN SECTION */}
      <div className="flex w-full px-10 mt-6 mb-17 gap-10 text-left">

        {/* image */}
        <div className="relative w-full md:w-[372px] h-80 md:h-[560px] flex-shrink-0 overflow-hidden">
          <Image
            src="/tea-poster.png"
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
          Tea is a one act play about loss, lies and power. Set in the counselling sessions student Millie has with Miss P, Tea explores their weekly conversations after the suicide of Millie's best friend Pip. Miss P battles to increase the college's funding of wellbeing while she battles with her own inner conflicts.
          </p>
          <br/>
          <p className="text-[#F3EAE5]">
          Written by Chloe Coombes, Tea is a drama which explores mental health, addiction and workplace misogyny.
          </p>
          <br/>
          <p className="text-[#F3EAE5]">
          Tea was first performed for a one-off performance at The Green Room, University of Surrey in March 2023. The sold out performance received positive feedback from audience members and was later produced by other companies such as Burnt Orange Theatre Company in 2023, and UpYoursCo in 2024. 
          </p>

          {/* Reviews */}

          <br/>
          <p className="text-[#F3EAE5] italic rounded bg-white/17 px-3 py-2 text-sm md:text-base">

          “An absolutely amazing performance by all the cast. Very powerful.”
          </p>
          <br/>
          <p className="text-[#F3EAE5] italic rounded bg-white/17 px-3 py-2 text-sm md:text-base">
          “I believed in the characters, the script was realistic and really relatable. I like the hard hitting themes and there was clearly research done on some of the language used and facts around the education system. The venue was great.”
          </p>
        </div>
      </div>
      
      {/* BEHIND THE SCENES */}
    
      <h1 className="text-[#F3EAE5] text-4xl font-bold mb-15 text-left leading-snug px-8 tracking-wide">
        Behind the Scenes </h1>

        <div className=" flex flex-col md:flex-row gap-6 md:gap-12 w-full px-4 md:px-10 md:ml0 items-center md:items-start mb-20">

      <ProjectCard
        img="/tea-bts.jpg"
      />
      </div>
    </main>
  )
}