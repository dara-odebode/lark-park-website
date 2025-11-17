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
     
      <h1 className="text-[#F3EAE5] text-5xl font-bold mt-15 text-left leading-snug px-8 tracking-wide">
        TEA</h1>
        <p className="ml-8 text-[#F3EAE5] text-left leading-relaxed mb-10">
        Year | Mins | English | Produced by _</p>

      {/* FIRST SECTION */}
      <div className="flex w-full px-10 mt-10 mb-17 gap-10 text-left">

        {/* box */}
        <div className="bg-[#222222] h-80 w-150 flex-shrink-0"></div>

        {/* line */}
        <div className="w-[3px] bg-[#C64534]"></div>

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
          <br/>
          <p className="text-[#F3EAE5] italic">
          “An absolutely amazing performance by all the cast. Very powerful.”
          </p>
          <br/>
          <p className="text-[#F3EAE5] italic">
          “I believed in the characters, the script was realistic and really relatable. I like the hard hitting themes and there was clearly research done on some of the language used and facts around the education system. The venue was great.”
          </p>

          <br/>
          <p className="text-[#F3EAE5] italic">
          ★★★★ - London Theatre 1
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