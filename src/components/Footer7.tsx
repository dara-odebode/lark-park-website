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
        name: "Email: Larkparktheatre@gmail.com",
        href: "mailto:Larkparktheatre@gmail.com",
      },
    ],
  },
  {
    title: "SOCIALS",
    links: [
      { name: "Instagram: larkparktheatre", href: "https://www.instagram.com/larkparktheatre/" },
      { name: "Threads: larkparktheatre", href: "https://www.threads.com/@larkparktheatre" },
      { name: "TikTok: larkparktheatre", href: "https://www.tiktok.com/@larkparktheatre" },
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
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row items-center lg:items-start lg:text-left">
        <div className="grid w-full gap-8 md:grid-cols-3 lg:gap-20">
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
        <div className="border-t-2 border-[#C64534] mt-10 pt-6 flex flex-col md:flex-row justify-between items-center font-medium text-[#F3EAE5]">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-85">

            {/* LARK LOGO 1 */}
            <div className="relative h-[80px] w-[120px] md:h-[120px] md:w-[130px]">
              <Image
                src="/footerLogo.png"
                alt="lark park logo"
                fill
                className="object-contain"
              />
            </div>

            {/* GSA LOGO */}
            <div className="relative h-[80px] w-[100px] md:h-[120px] md:w-[110px]">
              <Image
                src="/gsa.png"
                alt="gsa logo"
                fill
                className="object-contain"
              />
            </div>

            <p className=" text-amber-50 text-sm md:text-xl font-medium tracking-wide text-center md:text-left">
              © 2025 LARK PARK THEATRE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Footer7 };
