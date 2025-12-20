'use client'

import Image from 'next/image'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function HomePage() {
  const pathname = usePathname();

  // NavLink component for active underlines
  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        className={`relative pb-1 transition-colors duration-200 ${
          isActive ? "text-[#191919]" : "text-[#191919] hover:text-[#77211F]"
        }`}
      >
        {label}
        {isActive && (
          <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-[#C64534]"></span>
        )}
      </Link>
    );
  };

  // legal dropdown
  const LegalDropdown = () => {
    const [open, setOpen] = useState(false);
  
    return (
      <div
        className="relative text-[#191919]"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {/* Main text */}
        <button className="pb-1 hover:text-[#77211F] transition-colors duration-200">
          Legal
        </button>
  
        {open && (
          <div
            className="absolute right-0 bg-[#F3EAE5] border border-[#C64534] shadow-lg w-48"
          >
            <Link
              href="/legal/safeguarding-policy"
              className="block px-4 py-2 text-left text-[#191919] hover:bg-[#C64534] hover:text-white"
            >
              Safeguarding Policy
            </Link>
  
            <Link
              href="/legal/privacy-policy"
              className="block px-4 py-2 text-left text-[#191919] hover:bg-[#C64534] hover:text-white"
            >
              Privacy Policy
            </Link>
          </div>
        )}
      </div>
    );
  };

  return (
    <main className="flex flex-col text-center bg-[#F3EAE5] px-9">

      {/* Navbar */}
      <nav className="w-full flex flex-col md:flex-row justify-between items-center px-5 py-6 gap-4">
        
        {/* Logo */}
        <Link href="/about" className="flex items-center space-x-3">
          <Image 
            src="/logo.png" 
            alt="Lark Park Theatre Logo" 
            width={160} 
            height={160} 
            className="object-contain"
          />
        </Link>

        {/* navigation links */}
        <div className="font-medium flex flex-wrap justify-center gap-6 text-[#191919]">
          <NavLink href="/about" label="About" />
          <NavLink href="/projects" label="Previous Projects" />
          <NavLink href="/contact" label="Contact" />
          <LegalDropdown />
        </div>
      </nav>

      {/* Page content */}

      {/* header */}
      <h1 className="text-3xl md:text-6xl font-bold mb-10 md:mb-29 mt-16 md:mt-37 text-left px-4 md:px-8 tracking-wide">
        WHERE PERFORMANCE <br /> MEETS PURPOSE.
      </h1>
        
      {/* Description section */}
      <div className="bg-[#77211F] p-6 md:p-8 mt-8 pb-24 flex flex-col h-69 md:flex-row items-center md:items-start justify-between gap-6">

        {/* Text section */}
        <div className="flex-1 flex flex-col tracking-wide text-center md:text-left-center ml-0 md:ml-22 mt-0 md:mt-4">
          <p className="max-w-3xl text-[#F3EAE5] leading-8">
            Lark Park Theatre specialise in bringing theatre to communities through thought-provoking, engaging, and exciting workshops. With a focus on collaborative devising, Lark Park facilitates the creation of stories most relevant to the people they work with.
          </p>

          <p className="max-w-3xl text-[#F3EAE5] leading-relaxed mt-6">
            As a producing company, Lark Park works with exciting emerging theatre artists, connecting them with venues and supporting the creation of bold new work.
          </p>
        </div>

        {/* Bird image */}
        <div className="hidden md:block flex-shrink-0 mt-0 md:-mt-23.5 mr-0 md:-mr-23.5">
          <Image
            src="/bird.png"
            alt="bird image"
            width={400}
            height={400}
            className="object-contain -scale-x-100"
          />
        </div>
      </div>

      {/*ABOUT SECTION */}


      {/* Header */}
      <div className="mb-20">
      <p className="ml-8 text-[#C64534] font-light text-left leading-relaxed mt-38">
        ABOUT US</p>
      <h1 className="text-6xl font-bold text-left leading-snug px-8 tracking-wide">
        WHO WE ARE</h1>
        </div>

      {/* Images */}
      <div className="flex flex-col md:flex-row gap-12 md:gap-20 w-full px-4 md:px-20 mb-12">

        <div className="text-center space-y-2">
        <div className="relative w-full h-64 md:h-95">
          <Image
            src="/Chloe.jpg"
            alt="Chloe"
            fill
            className="object-contain"
          />
        </div>
          <p className="text-2xl font-medium">Chloe Coombes</p>
          <p className="italic font-normal">She/her</p>
          <p className="text-sm font-medium">
            Writer, director, facilitator and performer. Debut play Tea was produced by UpYoursCo in 2024, Burnt Orange Theatre Company in 2023, and self-produced in 2023.
          </p>
        </div>

        <div className="text-center space-y-2">
        <div className="relative w-full h-64 md:h-95">
        <Image
          src="/Ashleigh-Ann.png"
          alt="Ashleigh-Ann"
          fill
          className="object-contain"
        />
      </div>
          <p className="text-2xl font-medium">Ashleigh-Ann French</p>
          <p className="italic font-normal">She/her</p>
          <p className="text-sm font-medium">
            Writer, director, facilitator and represented actor. Performed with VML, CFI Media, UpYoursCo, and Deptford Lounge. Debut short film Get Nick Back was produced by CFI Media in 2024.
          </p>
        </div>
      </div>

      {/* Description section */}
      <div className="bg-[#77211F] p-6 md:p-8 h-67.5 mt-8 mb-20 flex flex-col md:flex-row items-center gap-6">

        {/* Bird image */}
        <div className="hidden md:block flex-shrink-0 self-start -mt-[92px] -ml-[93px]">
          <Image 
            src="/bird.png" 
            alt="lark" 
            width={390} 
            height={400} 
            className="object-contain scale-x-100"/>
        </div>
        
        {/* Text section */}
        <div className="flex-1 flex flex-col text-center justify-center tracking-wide md:ml-12">

          <p className="max-w-3xl text-[#F3EAE5] leading-8 -mt-3">
          Trained at Guildford School of Acting on BA(Hons) Applied and Contemporary Theatre. As facilitators Ashleigh-Ann and Chloe have experience working with KS3, KS4, and KS5 students, young carers and adults with additional learning needs.</p>
        </div>
      </div>
    </main>
  )
}


  