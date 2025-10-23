"use client";
import React from "react";

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
    links: [{ name: "Email: Larkparktheatre@gmail.com" }],
  },
  {
    title: "SOCIALS",
    links: [
      { name: "Instagram: @larkparktheatre", href: "#" },
      { name: "Facebook: TBC", href: "#" },
      { name: "TikTok: TBC", href: "#" },
      { name: "LinkedIn: TBC", href: "#" },
    ],
  },
  {
    title: "LEGAL",
    links: [
      { name: "Privacy Policy", href: "#" },
      { name: "Safeguarding Policy", href: "#" },
    ],
  },
];

const Footer7 = ({
  sections = defaultSections,
  copyright = "© 2025 LARK PARK THEATRE",
  legalLinks = [],
}: Footer7Props) => {
  return (
  
      <section className="py-15 bg-[#77211F] pl-20 pr-10 text-[#F3EAE5] ml-9 mr-9">
        <div className="container mx-auto">
          {/* Main footer content */}
          <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
            <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
              {sections.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h3 className="mb-4 font-semibold text-lg">{section.title}</h3>
                  <ul className="space-y-2 text-sm">
                    {section.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <a
                          href={link.href || "#"}
                          className="hover:text-[#C64534] transition-colors"
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
    
          {/* footer bar*/}
          <div className="border-t-3 border-[#C64534] mt-10 pt-6 flex flex-col md:flex-row justify-between items-center font-medium text-[#F3EAE5]">
            <div className="flex items-center gap-83">
              <img
                src="/footerLogo.png"
                alt="Logo 1"
                className="h-30 w-auto object-contain"
              />
              <img
                src="/gsa.png"
                alt="Logo 2"
                className="h-30 w-auto object-contain"
              />
              <p className="font-medium text-[#F3EAE5] text-xl tracking-wide">
                © 2025 LARK PARK THEATRE
              </p>
            </div>
          </div>
        </div>
      </section>
    );
    
};

export { Footer7 };
