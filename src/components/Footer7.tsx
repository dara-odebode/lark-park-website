"use client";

import React from "react";
import Image from "next/image";

interface Footer7Props {
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href?: string }>;
  }>;
  copyright?: string;
  legalLinks?: Array<{ name: string; href: string }>;
}

const defaultSections = [
  {
    title: "CONTACT US",
    links: [
      {
        name: "Email: larkparktheatre@gmail.com",
        href: "mailto:Larkparktheatre@gmail.com",
      },
    ],
  },
  {
    title: "SOCIALS",
    links: [
      { name: "Instagram: @larkparktheatre", href: "https://www.instagram.com/larkparktheatre/" },
      { name: "Threads: @larkparktheatre", href: "https://www.threads.com/@larkparktheatre" },
      { name: "TikTok: @larkparktheatre", href: "https://www.tiktok.com/@larkparktheatre" },
      { name: "LinkedIn: Lark Park", href: "https://www.linkedin.com/company/lark-park/" },
    ],
  },
  {
    title: "LEGAL",
    links: [
      { name: "Privacy Policy", href: "/legal/privacy-policy" },
      { name: "Safeguarding Policy", href: "/legal/safeguarding-policy" },
    ],
  },
];

const Footer7 = ({ sections = defaultSections }: Footer7Props) => {
  return (
    <section className="py-10 md:py-15 bg-[#77211F] px-6 md:px-20 text-[#F3EAE5]">
      <div className="container mx-auto">

        {/* Main footer content */}
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
        <div className="grid w-full gap-8 md:grid-cols-3 lg:gap-20 text-center md:text-left justify-items-center md:justify-items-start">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-semibold text-lg">{section.title}</h3>
                <ul className="space-y-2 text-sm">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a
                        href={link.href || "#"}
                        className="hover:font-medium transition-all"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

{/* Footer bar */}
<div className="border-t-2 border-[#C64534] mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-8 font-medium text-[#F3EAE5]">

  {/* LARK LOGO 1 */}
  <div className="relative h-[80px] w-[120px] md:h-[120px] md:w-[130px] shrink-0">
    <Image
      src="/footerLogo.png"
      alt="lark park logo"
      fill
      className="object-contain"
    />
  </div>

  {/* Partner logos group */}
  <div className="flex flex-col items-center md:mr-8 lg:ml-30 gap-4">
    <p className="text-sm md:text-base text-amber-50 tracking-wider">
      Previously partnered with
    </p>
    <div className="flex flex-row items-center gap-8 md:gap-10">
      {/* GSA LOGO */}
      <div className="relative h-[70px] w-[90px] md:h-[100px] md:w-[100px]">
        <Image
          src="/gsa.png"
          alt="gsa logo"
          fill
          className="object-contain"
        />
      </div>

      {/* Surrey Entreprise Logo */}
      <div className="relative h-[70px] w-[90px] md:h-[140px] md:w-[140px]">
        <Image
          src="/Surrey Entreprise.png"
          alt="surrey entreprise logo"
          fill
          className="object-contain"
        />
      </div>
    </div>
  </div>

  {/* Copyright */}
  <p className="text-amber-50 md:mr-8 lg:mr-30 text-sm md:text-xl font-medium tracking-wide text-center md:text-left">
    © 2026 LARK PARK THEATRE
  </p>
</div>
          </div>
    </section>
  );
};

export { Footer7 };
