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
          isActive ? "text-[#77211F]" : "text-[#191919] hover:text-[#77211F]"
        }`}
      >
        {label}
        {isActive && (
          <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#C64534] rounded-full"></span>
        )}
      </Link>
    )
  }

  return (
    <main className="min-h-screen flex flex-col justify-start text-center px-9 pt-1">

      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-5 py-18">
        <Link href="/" className="flex items-center space-x-3">
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

      {/* Page content */}
      <h1 className="text-6xl font-bold mb-26 text-left leading-snug px-8 mt-10 tracking-wide">
        WHERE PERFORMANCE<br />MEETS PURPOSE.</h1>
        
{/* Description section */}
<div className="bg-[#77211F] p-8 mt-8 flex flex-row justify-between items-start">

  {/* Text section */}
  <div className="flex-1 pr-8 flex flex-col justify-start">
    <p className="max-w-4xl text-[#F3EAE5] font-light text-left leading-relaxed">
      Lark Park Theatre specialise in bringing theatre to communities through thought-provoking, engaging, and exciting workshops. With a focus on collaborative devising, Lark Park facilitates the creation of stories most relevant to the people they work with.
    </p>

    <p className="max-w-4xl text-[#F3EAE5] font-light text-left leading-relaxed mt-6">
      As a producing company, Lark Park works with exciting emerging theatre artists, connecting them with venues and supporting the creation of bold new work.
    </p>
  </div>

  {/* Bird image */}
  <div className="flex-shrink-0 self-start">
    <Image 
      src="/bird.png" 
      alt="bird image" 
      width={400} 
      height={400} 
      className="object-contain -scale-x-100"
    />
  </div>
</div>


    </main>
  )
}

  