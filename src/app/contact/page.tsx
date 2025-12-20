'use client'

import Image from 'next/image'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
          <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-[#C64534]" />
        )}
      </Link>
    );
  };

  return (
    <nav className="w-full flex flex-col md:flex-row justify-between items-center px-5 py-6 gap-4">

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
      <div className="font-medium flex space-x-8 text-[#191919]">
        <NavLink href="/about" label="About" />
        <NavLink href="/projects" label="Previous Projects" />
        <NavLink href="/contact" label="Contact" />

        {/* legal dropdown */}
        <div
          className="relative text-[#F3EAE5]"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <button className="pb-1 hover:text-[#191919] transition-colors duration-200">
            Legal
          </button>

          {open && (
            <div className="absolute right-0 bg-[#F3EAE5] border border-[#C64534] shadow-lg w-48">
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
      </div>
    </nav>
  );
};

export default function Page() {
return (
  <main className="flex flex-col text-center px-9 bg-[#77211F] mb-0.5">

    <Navbar />

{/* Header */}
<h1 className="text-[#F3EAE5] px-4 md:px-40 text-3xl md:text-5xl font-bold mt-16 md:mt-20 text-left leading-snug">
  Contact Us
</h1>

{/* text and image */}
<div className="flex flex-col md:flex-row px-4 md:px-40 gap-0 md:gap-6 items-start -mb-26">

  {/* text */}
  <div className="flex-1 text-left">

    <p className="text-[#F3EAE5] text-xl md:text-3xl font-medium mt-8">
      For project inquiries, please email:
    </p>

    <p className="text-[#F3EAE5] text-lg md:text-xl underline mt-3 break-all">
      <a href="mailto:Larkparktheatre@gmail.com">
        larkparktheatre@gmail.com
      </a>
    </p>

    <p className="text-[#F3EAE5] text-xl md:text-3xl font-medium mt-10">
      Catch us on our socials:
    </p>

    <ul className="text-[#F3EAE5] text-lg md:text-xl mt-4 underline tracking-wide space-y-3">
      <li><a href="https://www.instagram.com/larkparktheatre/" target="_blank">Instagram</a></li>
      <li><a href="https://www.threads.com/@larkparktheatre" target="_blank">Threads</a></li>
      <li><a href="https://www.tiktok.com/@larkparktheatre" target="_blank">TikTok</a></li>
      <li><a href="https://www.linkedin.com/company/lark-park/" target="_blank">LinkedIn</a></li>
    </ul>

  </div>

    {/* image */}
  <div className="hidden md:block md:w-[600px] lg:w-[720px] relative md:-mt-30">
    <Image
      src="/orange_lark.png"
      alt="Lark illustration"
      width={700}
      height={700}
      className="scale-x-[-1] mx-auto"
      priority
    />
  </div>

  <div className="mb-30 md:mb-0">
</div>

</div>
    </main>
  );
}