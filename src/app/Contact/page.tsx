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
      <h1 className="text-[#F3EAE5] px-40 text-5xl ml-5 font-bold mt-20 text-left leading-snug">Contact Us</h1>

    {/* text and image */}
    <div className="flex px-40 gap-10 items-start -mb-23">

    {/*  text */}
    <div className="flex-1 ml-5 text-left">

    <p className="text-[#F3EAE5] text-3xl font-medium mt-14">
      For project inquiries, please email:
    </p>

    <p className="text-[#F3EAE5] text-xl underline mt-3">
      <a href="mailto:Larkparktheatre@gmail.com">
        Larkparktheatre@gmail.com
      </a>
    </p>

    <p className="text-[#F3EAE5] text-3xl font-medium mt-10">
      Catch us on our socials:
    </p>

    <ul className="text-[#F3EAE5] text-xl mt-4 underline tracking-wide space-y-3">
      <li><a href="https://www.instagram.com/larkparktheatre/" target="_blank">Instagram</a></li>
      <li><a href="https://facebook.com" target="_blank">Facebook</a></li>
      <li><a href="https://tiktok.com" target="_blank">TikTok</a></li>
      <li><a href="https://linkedin.com" target="_blank">LinkedIn</a></li>
    </ul>

  </div>

  {/* image*/}
  <section className="-mt-8 -mr-20">
    <Image
      src="/larkBlack.png"
      alt="lark"
      width={590}
      height={600}
      className="scale-x-[-1]"
    />
  </section>
</div>

    </main>
  );
}
