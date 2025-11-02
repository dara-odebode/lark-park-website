'use client'

import Image from 'next/image'
import Link from "next/link";
import { usePathname } from "next/navigation";

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
    )
  }

  return (
    <main className="flex flex-col text-center px-9">

      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-5 py-6">
        <Link href="/" className="flex items-center space-x-3">

        {/* Logo image */}
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
          <NavLink href="/legal" label="Legal" />
        </div>
      </nav>


      {/*  Community Projects Header */}
     
      <p className="ml-8 text-[#C64534] text-left leading-relaxed mt-18">
        Previous Projects</p>
      <h1 className="text-6xl font-bold mb-15 text-left leading-snug px-8 tracking-wide">
        Community Projects</h1>

      {/* Images */}
      <div className="columns-2 gap-40 w-240 h-auto mb-12 ml-10 text-2xl">
        <div className="text-left space-y-2">
          <img src="/Chloe.jpg" alt="Chloe" className="float-none" />
          <p className="text-2xl font-medium">Chloe Coombes</p>
          <p className="italic font-normal">She/her</p>
          <p className="text-sm font-medium">Writer, director, facilitator and performer. Debut play Tea was produced by UpYoursCo in 2024, Burnt Orange Theatre Company in 2023, and self-produced in 2023.</p>
        </div>

        <div className="text-left space-y-2">
          <img src="/Ashleigh-Ann.png" alt="Ashleigh-Ann" className="float-none" />
          <p className="text-2xl font-medium">Ashleigh-Ann French</p>
          <p className="italic font-normal">She/her</p>
          <p className="text-sm font-medium">Writer, director, facilitator and represented actor.
            Performed with VML, CFI Media, UpYoursCo, and Deptford Lounge. Debut short film Get Nick Back was produced by CFI Media in 2024.</p>
        </div>
      </div>

      
      {/* Production Work Header */}
    
      <h1 className="text-6xl font-bold mb-15 text-left leading-snug px-8 tracking-wide mt-10">
        Production Work</h1>

      {/* Images */}
      <div className="columns-2 gap-40 w-240 h-auto mb-12 ml-10 text-2xl">
        <div className="text-left space-y-2">
          <img src="/Chloe.jpg" alt="Chloe" className="float-none" />
          <p className="text-2xl font-medium">Chloe Coombes</p>
          <p className="italic font-normal">She/her</p>
          <p className="text-sm font-medium">Writer, director, facilitator and performer. Debut play Tea was produced by UpYoursCo in 2024, Burnt Orange Theatre Company in 2023, and self-produced in 2023.</p>
        </div>
      </div>

    </main>
  )
}