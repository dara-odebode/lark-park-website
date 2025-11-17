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
        isActive ? "text-[#F3EAE5]" : "text-[#F3EAE5] hover:text-[#191919]"
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
    <main className="flex flex-col text-center px-9 bg-[#77211F] mb-0.5">

      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-5 py-6">
        <Link href="/" className="flex items-center space-x-3">
          <Image 
            src="/logo_white.png" 
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

      {/* Header */}
     
      <h1 className="text-4xl text-[#F3EAE5] font-bold mt-15 text-left leading-snug px-8 tracking-wide">
      INTRODUCTION TO DEVISING FOR SOCIAL CHANGE</h1>
        <p className="ml-8 text-[#F3EAE5] text-left leading-relaxed mb-15">
        2024 | _ Mins | English | Produced by _</p>

    
      {/* FIRST SECTION */}
      <div className="flex w-full px-10 mt-10 mb-17 gap-10 text-left">

        {/* box */}
        <div className="bg-[#222222] h-80 w-150 flex-shrink-0"></div>

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

      {/* Images */}
      <div className="flex gap-30 w-full ml-10 text-2xl mb-30">

        <div className="bg-[#222222] p-8 h-65 w-130 flex items-center justify-center">

        </div>

        <div className="bg-[#222222] p-8 h-65 w-130 flex items-center justify-center">
        </div>
      </div>
    </main>
  )
}
