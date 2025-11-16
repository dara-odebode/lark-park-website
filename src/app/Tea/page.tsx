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
     
      <h1 className="text-6xl font-bold mt-15 text-left leading-snug px-8 tracking-wide">
        TEA</h1>
        <p className="ml-8 text-[#C64534] text-left leading-relaxed mb-15">
        Year | Mins | English | Produced by _</p>

      {/* Images */}
      <div className="columns-2 gap-40 w-240 h-auto mb-12 ml-10 text-2xl">
        <div className="text-middle space-y-2">
          <img src="/Chloe.jpg" alt="Chloe" className="float-none" />
        </div>

        <div className="text-middle space-y-2">
          <img src="/Ashleigh-Ann.png" alt="Ashleigh-Ann" className="float-none" />
        </div>
      </div>
      
      {/* BEHIND THE SCENES */}
    
      <h1 className="text-6xl font-bold mb-15 text-left leading-snug px-8 tracking-wide mt-10">
        Behind the Scenes </h1>

      {/* Images */}
      <div className="columns-2 gap-40 w-240 h-auto mb-12 ml-10 text-2xl">
        <div className="text-middle space-y-2">
          <img src="/Chloe.jpg" alt="Chloe" className="float-none" />
        </div>

        <div className="text-left space-y-2">
          <img src="/Ashleigh-Ann.png" alt="Ashleigh-Ann" className="float-none" />
        </div>
      </div>
    </main>
  )
}