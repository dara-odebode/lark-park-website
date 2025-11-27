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
      <nav className="w-full flex justify-between items-center px-5 py-6">
        
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
        <div className="font-medium flex space-x-8 text-[#191919]">
          <NavLink href="/about" label="About" />
          <NavLink href="/projects" label="Previous Projects" />
          <NavLink href="/contact" label="Contact" />
          <LegalDropdown />
        </div>
      </nav>

      {/* Page content */}

      {/* header */}
      <h1 className="text-6xl font-bold mb-29 text-left leading-snug px-8 mt-37 tracking-wide">
        WHERE PERFORMANCE <br /> MEETS PURPOSE.</h1>
        
      {/* Description section */}
      <div className="bg-[#77211F] p-8 mt-8 flex flex-col md:flex-row items-start justify-between h-67">

        {/* Text section */}
        <div className="flex-1 pr-8 flex flex-col justify-start tracking-wide ml-30">
          <p className="max-w-3xl text-[#F3EAE5] text-center leading-8 mt-4">
            Lark Park Theatre specialise in bringing theatre to communities through thought-provoking, engaging, and exciting workshops. With a focus on collaborative devising, Lark Park facilitates the creation of stories most relevant to the people they work with.
          </p>

          <p className="max-w-3xl text-[#F3EAE5] text-center leading-relaxed mt-6">
            As a producing company, Lark Park works with exciting emerging theatre artists, connecting them with venues and supporting the creation of bold new work.
          </p>
        </div>

        {/* Bird image */}
        <div className="flex-shrink-0 self-start -mt-[92.5px] -mr-[92px]">
          <Image 
            src="/bird.png" 
            alt="bird image" 
            width={389} 
            height={400} 
            className="object-contain -scale-x-100"/>
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
      <div className="columns-2 gap-70 w-240 h-auto mb-12 ml-60 text-2xl">

        <div className="text-center space-y-2">
          <img src="/Chloe.jpg" alt="Chloe" className="float-none" />
          <p className="text-2xl font-medium">Chloe Coombes</p>
          <p className="italic font-normal">She/her</p>
          <p className="text-sm font-medium">Writer, director, facilitator and performer. Debut play Tea was produced by UpYoursCo in 2024, Burnt Orange Theatre Company in 2023, and self-produced in 2023.</p>
        </div>

        <div className="text-center space-y-2">
          <img src="/Ashleigh-Ann.png" alt="Ashleigh-Ann" className="float-none" />
          <p className="text-2xl font-medium">Ashleigh-Ann French</p>
          <p className="italic font-normal">She/her</p>
          <p className="text-sm font-medium">Writer, director, facilitator and represented actor.
            Performed with VML, CFI Media, UpYoursCo, and Deptford Lounge. Debut short film Get Nick Back was produced by CFI Media in 2024.</p>
        </div>
      </div>

      {/* Description section */}
      <div className="bg-[#77211F] p-8 mt-8 mb-20 flex flex-col md:flex-row items-start justify-between h-67">

        {/* Bird image */}
        <div className="flex-shrink-0 self-start mt-[-92.5px] mr-auto -ml-[93px]">
          <Image 
            src="/bird.png" 
            alt="lark" 
            width={389} 
            height={400} 
            className="object-contain scale-x-100"/>
        </div>
        
        {/* Text section */}
        <div className="flex-1 pr-8 flex flex-col text-center justify-start tracking-wide ml-29">
          <p className="max-w-3xl text-[#F3EAE5] leading-8 mt-11">
          Trained at Guildford School of Acting on BA(Hons) Applied and Contemporary Theatre. As facilitators Ashleigh-Ann and Chloe have experience working with KS3, KS4, and KS5 students, young carers and adults with additional learning needs.</p>
        </div>
      </div>
    </main>
  )
}


  