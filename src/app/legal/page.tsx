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
          <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-[#C64534]"></span>
        )}
      </Link>
    )
  }

  return (
    <main className="flex flex-col text-center px-9 bg-[#77211F]">

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

      {/* Page content */}

      {/* header */}
      <h1 className="text-5xl text-[#F3EAE5] font-bold text-left leading-snug px-8 mt-10 tracking-wide">
          Privacy Policy
      </h1>

          <p className="max-w-4xl text-[#F3EAE5] font-medium text-left leading-relaxed mt-4 ml-8">
          Last updated: 16th September 2025
          </p>

          <p className="max-w-4xl text-[#F3EAE5] text-left mt-6 ml-8">
          This is the privacy policy of Lark Park Limited. <br/>
          In this document, “we”, “our” or “us” refers to Lark Park Limited. 
          We act as a data controller when processing your personal information.
          </p>

          <p className="max-w-4xl font-normal text-[#F3EAE5] text-left mt-7 ml-8"> {/* make text light? */}
          We are committed to protecting your personal data and being transparent about the information we hold. This privacy policy aims to inform you about how we collect, use and process any information that we collect from you or that you provide to us, in line with GDPR (General Data Protection Regulation 2018) and the Data Protection Act 2018.
          </p>

          <p className="max-w-4xl font-normal text-[#F3EAE5] text-left mt-7 ml-8">
          The law requires us to tell you about your rights and obligation to you in regard to the processing and control of your personal data. We request that you read the information provided at https://www.netlawman.co.uk/know-your-privacy-rights. 
          </p>

      <h1 className="text-3xl text-[#F3EAE5] font-bold text-left leading-snug px-8 mt-10 tracking-wide">
          1. Information We Collect
      </h1>

      <p className="max-w-4xl text-[#F3EAE5] font-medium text-left leading-relaxed mt-4 ml-8">
      We may collect and process personal data in the following categories:
      </p>

      <ul className="list-disc text-[#F3EAE5] text-left leading-snug px-8 mt-6 ml-9 tracking-wide">
        <li>5 cups chopped Porcini mushrooms</li>
        <li>5 cups chopped Porcini mushrooms</li>
        <li>5 cups chopped Porcini mushrooms</li>
      </ul>

        

    </main>
  )
}