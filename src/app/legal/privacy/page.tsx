'use client'
import Image from 'next/image'
import Link from "next/link";
import { Footer7 } from "@/components/Footer7";
import { usePathname } from "next/navigation";

export default function HomePage() {
  const pathname = usePathname();

  // NavLink component for active underlines
  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const isActive = pathname.startsWith(href);
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
    <main className="flex flex-col text-center px-9 bg-[#77211F] mb-1">

      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-5 py-6">
        <Link href="/about" className="flex items-center space-x-3">
        {/* Logo image */}
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

        <ul className="list-disc text-[#F3EAE5] text-left leading-snug px-8 mt-4 ml-9 tracking-wide space-y-3">
          <li>Identity and Contact Information: name, address, email address, phone number and photographs.</li>
          <li>Financial Information: payment details for services, donation and ticket sales.</li>
          <li>Participation Information: details of your involvement in workshops, projects and productions.</li>
          <li>Professional Information: CVs, portfolios or proposals submitted for collaborations, freelance work, employment and volunteering.</li>
          <li>Sensitive Data (processed only with your explicit consent or where necessary): demographic information relevant for reporting to funding bodies, charities or relevant organisations to support projects.</li>
          <li>Special Category Data (processed only with your explicit consent or where necessary): health information, access requirements or background information relevant to support your participation.</li>
          <li>Technical Information: IP address, browser type and usage data from our website.</li>
        </ul>

      <h1 className="text-3xl text-[#F3EAE5] font-bold text-left leading-snug px-8 mt-10 tracking-wide">
          2. Lawful Bases for Processing
      </h1>

        <p className="max-w-4xl text-[#F3EAE5] font-medium text-left leading-relaxed mt-4 ml-8">
          We process your personal data under the following lawful bases:
        </p>

        <ul className="list-disc text-[#F3EAE5] text-left leading-snug px-8 mt-6 ml-9 tracking-wide space-y-3">
          <li>Contract: To process contracts of employment or engagement, ticket purchases or workshop bookings.</li>
          <li>Legal Obligation: To meet financial, tax and safeguarding obligations.</li>
          <li>Consent:  For sending marketing communications or where special category and/or sensitive data is collected (e.g. health or access needs).</li>
          <li>Legitimate Interests: To develop our practise, report anonymised participation data to funders or improve our services.</li>
        </ul>

        <p className="max-w-4xl text-[#F3EAE5] text-left leading-relaxed mt-4 ml-8">
        You may withdraw consent at any time by contacting us (see section 11).
        </p>

      <h1 className="text-3xl text-[#F3EAE5] font-bold text-left leading-snug px-8 mt-10 tracking-wide">
          3. How We Use Your Data
      </h1>

        <p className="max-w-4xl text-[#F3EAE5] font-medium text-left leading-relaxed mt-4 ml-8">
          We use your personal data to:
        </p>

        <ul className="list-disc text-[#F3EAE5] text-left leading-snug px-8 mt-6 ml-9 tracking-wide space-y-3">
          <li>Administer workshops, projects and ticketing.</li>
          <li>Communicate about performances, opportunities and events.</li>
          <li>Ensure participant wellbeing and accessibility.</li>
          <li>Recruit freelancers, volunteers and collaborators.</li>
          <li>Meet safeguarding, accounting and reporting obligations.</li>
          <li>Improve our website and services.</li>
        </ul>
        
        <h1 className="text-3xl text-[#F3EAE5] font-bold text-left leading-snug px-8 mt-10 tracking-wide">
          4. Sharing Your Data
      </h1>

      <p className="max-w-4xl text-[#F3EAE5] font-medium text-left leading-relaxed mt-4 ml-8">
        We only share your personal data where necessary and lawful. Recipients may include:
      </p>

      <ul className="list-disc text-[#F3EAE5] text-left leading-snug px-8 mt-6 ml-9 tracking-wide space-y-3">
        <li>Service Providers: e.g. ticketing platforms, payment processors, IT and marketing services. </li>
        <li>Funders and Partners: Only aggregated or anonymised data, unless explicit consent is obtained.</li>
        <li>Regulatory Authorities: e.g. HMRC, safeguarding authorities or the police where legally required.</li>
      </ul>

      <p className="max-w-4xl text-[#F3EAE5] text-left leading-relaxed mt-4 ml-8">
        We do not sell your personal data.
        </p>

        <h1 className="text-3xl text-[#F3EAE5] font-bold text-left leading-snug px-8 mt-10 tracking-wide">
          5. International Transfers
      </h1>

      <p className="max-w-4xl text-[#F3EAE5] font-medium text-left leading-relaxed mt-4 ml-8">
        Where service providers are based outside of the UK, we ensure appropriate safeguards are in place (e.g. UK International Data Transfer Agreements or adequacy decisions).
      </p>

              
      <h1 className="text-3xl text-[#F3EAE5] font-bold text-left leading-snug px-8 mt-10 tracking-wide">
          6. Data Retention
      </h1>

      <p className="max-w-4xl text-[#F3EAE5] font-medium text-left leading-relaxed mt-4 ml-8">
      We retain personal data only as long as necessary for the purposes it was collected or as required by law. For example:
      </p>

      <ul className="list-disc text-[#F3EAE5] text-left leading-snug px-8 mt-6 ml-9 tracking-wide space-y-3">
        <li>Ticketing and donation records: up to 7 years (financial reporting).</li>
        <li>Participation records: up to 5 years (project evaluation and safeguarding).</li>
        <li>Mailing lists: until you withdraw consent.</li>
      </ul>

      <h1 className="text-3xl text-[#F3EAE5] font-bold text-left leading-snug px-8 mt-10 tracking-wide">
          7. Data Security
      </h1>

      <p className="max-w-4xl text-[#F3EAE5] font-medium text-left leading-relaxed mt-4 ml-8">
      We take appropriate measures to protect your data, including password protection, secure servers and restricted access to sensitive information.
      </p>

      <h1 className="text-3xl text-[#F3EAE5] font-bold text-left leading-snug px-8 mt-10 tracking-wide">
         8. Your Rights
      </h1>

      <p className="max-w-4xl text-[#F3EAE5] font-medium text-left leading-relaxed mt-4 ml-8">
      Under GDPR, you have the right to:
      </p>

      <ul className="list-disc text-[#F3EAE5] text-left leading-snug px-8 mt-6 ml-9 tracking-wide space-y-3">
        <li>Access the personal data we hold about you.</li>
        <li>Request correction of inaccurate data.</li>
        <li>Request erasure (“the right to be forgotten”), subject to legal obligations.</li>
        <li>Restrict or object to processing.</li>
        <li>Data portability (where applicable).</li>
        <li>Withdraw consent at any time (without affecting prior lawful processing).</li>
        <li>Lodge a complaint with the Information Commissioner’s Office (ICO) if you believe your rights have been breached.</li>
      </ul>

      <p className="max-w-4xl text-[#F3EAE5] text-left leading-relaxed mt-4 ml-8">
      ICO website: www.ico.org.uk <br/>
      ICO helpline: 0303 123 1113
      </p>

      <h1 className="text-3xl text-[#F3EAE5] font-bold text-left leading-snug px-8 mt-10 tracking-wide">
        9. Young People's Data
      </h1>

      <p className="max-w-4xl text-[#F3EAE5] text-left leading-relaxed mt-4 ml-8">
      For participants under 18, we only collect personal data with parental/guardian consent. Additional safeguards are in place through our safeguarding policy.
      </p>

      
      <h1 className="text-3xl text-[#F3EAE5] font-bold text-left leading-snug px-8 mt-10 tracking-wide">
        10. Changes to This Policy
      </h1>

      <p className="max-w-4xl text-[#F3EAE5] text-left leading-relaxed mt-4 ml-8">
      We may update this privacy policy periodically, with the date of its last update visible at the top of the document. The latest version will always be available on our website.
      </p>

      <h1 className="text-3xl text-[#F3EAE5] font-bold text-left leading-snug px-8 mt-10 tracking-wide">
        11. Contact Us
      </h1>

      <p className="max-w-4xl text-[#F3EAE5] text-left leading-relaxed mt-4 ml-8 mb-10">
      If you want to know what information we hold about you or if you have any other questions about this policy, please contact: <br/>
      Ashleigh-Ann at larkparktheatre@gmail.com <br/>
      If you are not satisfied with our response, you have the right to contact the ICO.
      </p>
    </main>
  )
}