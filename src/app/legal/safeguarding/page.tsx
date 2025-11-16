'use client'
import { Footer7 } from "@/components/Footer7";
import Image from 'next/image'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SafeguardingPage() {
  const pathname = usePathname();

  // NavLink component for active underline
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

    {/* Page content */}

      {/* header */}

      <h1 className="text-5xl text-[#F3EAE5] font-bold text-left leading-snug px-8 mt-10 tracking-wide">
        Safeguarding Policy
      </h1>

      <p className="max-w-4xl text-[#F3EAE5] font-medium text-left leading-relaxed mt-4 ml-8">
        Last updated: 16th September 2025
      </p>

      <p className="max-w-4xl text-[#F3EAE5] text-left mt-6 ml-8">
        This is the safeguarding policy of Lark Park Limited.<br />
        In this document, “we”, “our” or “us” refers to Lark Park Limited.
      </p>

      <p className="max-w-4xl text-[#F3EAE5] text-left mt-7 ml-8">
        We recognise our duty of care to safeguard and promote the welfare of children, young people and adults at risk. 
        Therefore we are committed to safeguarding the welfare of all participants, freelancers, staff, volunteers and audiences 
        in line with the core statutory legislation and guidance that apply in England.
      </p>

      <h2 className="text-3xl text-[#F3EAE5] font-bold text-left px-8 mt-10 tracking-wide">1. Purpose</h2>
      <p className="max-w-4xl text-[#F3EAE5] text-left ml-8 mt-4">
        This policy sets out our approach to safeguarding, including how we:
      </p>
      <ul className="list-disc text-[#F3EAE5] text-left ml-12 mt-4 space-y-3">
        <li>Protect children, young people and adults at risk from harm.</li>
        <li>Provide staff, freelancers and volunteers with clear guidance on their responsibilities.</li>
        <li>Ensure safe recruitment, training and reporting procedures.</li>
        <li>Foster a safe, inclusive environment for all our projects and performances.</li>
      </ul>

      <h2 className="text-3xl text-[#F3EAE5] font-bold text-left px-8 mt-10 tracking-wide">2. Scope</h2>
      <p className="max-w-4xl text-[#F3EAE5] text-left ml-8 mt-4">This policy applies to:</p>
      <ul className="list-disc text-[#F3EAE5] text-left ml-12 mt-4 space-y-3">
        <li>All staff, freelancers, artists and volunteers engaged by Lark Park Limited.</li>
        <li>All activities including workshops, projects, productions and events.</li>
        <li>All participants, including children, young people and adults at risk.</li>
      </ul>

      <h2 className="text-3xl text-[#F3EAE5] font-bold text-left px-8 mt-10 tracking-wide">3. Legal and Policy Framework</h2>
      <p className="max-w-4xl text-[#F3EAE5] text-left ml-8 mt-4">
        This policy is informed by the following legislation and guidance:
      </p>
      <ul className="list-disc text-[#F3EAE5] text-left ml-12 mt-4 space-y-2">
        <li>Arts Council England: Culture and Creative Sector Safeguarding Guidance</li>
        <li>Care Act 2014</li>
        <li>Charity Commission Guidance: Safeguarding and protecting people for charities and trustees</li>
        <li>Children Act 1989 and 2004</li>
        <li>Children and Families Act 2014</li>
        <li>Data Protection Act 2018</li>
        <li>Equality Act 2010</li>
        <li>General Data Protection Regulation 2018</li>
        <li>Human Rights Act 1998</li>
        <li>Keeping Children Safe in Education (KCSIE)</li>
        <li>Protection of Freedoms Act 2012</li>
        <li>Safeguarding Adults: The Role of Health and Social Care Workers</li>
        <li>Safeguarding Vulnerable Groups Act 2006</li>
        <li>Working Time Regulations 1998</li>
        <li>Working Together to Safeguard Children 2018</li>
      </ul>

      <h2 className="text-3xl text-[#F3EAE5] font-bold text-left px-8 mt-10 tracking-wide">4. Definitions</h2>
      <ul className="list-disc text-[#F3EAE5] text-left ml-12 mt-4 space-y-3">
        <li><strong>Child/Young Person:</strong> Anyone under the age of 18.</li>
        <li><strong>Adult at Risk:</strong> A person aged over 18 who has care and support needs and is unable to protect themselves from harm or exploitation.</li>
        <li><strong>Abuse:</strong> Includes physical, emotional, sexual, financial, neglect, discriminatory and organisational abuse.</li>
      </ul>

      <h2 className="text-3xl text-[#F3EAE5] font-bold text-left px-8 mt-10 tracking-wide">5. Safeguarding Principles</h2>
      <ul className="list-disc text-[#F3EAE5] text-left ml-12 mt-4 space-y-3">
        <li>Zero tolerance of abuse, neglect or exploitation.</li>
        <li>Empowerment: Supporting individuals to make informed choices.</li>
        <li>Prevention: Taking action before harm occurs.</li>
        <li>Proportionality: Responding appropriately to risks.</li>
        <li>Partnership: Working with statutory agencies, parents/guardians and communities.</li>
        <li>Accountability: Clear responsibilities and transparent procedures.</li>
      </ul>

      <h2 className="text-3xl text-[#F3EAE5] font-bold text-left px-8 mt-10 tracking-wide">6. Roles and Responsibilities</h2>
      <ul className="list-disc text-[#F3EAE5] text-left ml-12 mt-4 space-y-3">
        <li><strong>Lead Safeguarding Officer:</strong> Ashleigh-Ann — larkparktheatre@gmail.com</li>
        <li>First point of contact for safeguarding concerns.</li>
        <li>Responsible for reporting to statutory agencies.</li>
        <li><strong>Deputy Safeguarding Officer:</strong> Chloe — larkparktheatre@gmail.com</li>
        <li>All staff, freelancers and volunteers must familiarise themselves with this policy, complete safeguarding training where necessary, and report concerns immediately.</li>
      </ul>

      <h2 className="text-3xl text-[#F3EAE5] font-bold text-left px-8 mt-10 tracking-wide">7. Recruitment and Training</h2>
      <ul className="list-disc text-[#F3EAE5] text-left ml-12 mt-4 space-y-3">
        <li>Job descriptions which include safeguarding responsibilities.</li>
        <li>Enhanced DBS checks where appropriate.</li>
        <li>References verified before engagement where necessary.</li>
        <li>Mandatory safeguarding induction and refresher training where appropriate.</li>
      </ul>

      <h2 className="text-3xl text-[#F3EAE5] font-bold text-left px-8 mt-10 tracking-wide">8. Code of Conduct</h2>
      <ul className="list-disc text-[#F3EAE5] text-left ml-12 mt-4 space-y-3">
        <li>Treat all participants with dignity and respect.</li>
        <li>Avoid inappropriate physical contact or personal relationships.</li>
        <li>Maintain professional boundaries.</li>
        <li>Never be one on one in an enclosed space with a child or adult at risk without another responsible adult present.</li>
        <li>Report concerns immediately to the Lead Safeguarding Officer.</li>
      </ul>

      <h2 className="text-3xl text-[#F3EAE5] font-bold text-left px-8 mt-10 tracking-wide">9. Responding to Concerns</h2>
      <p className="max-w-4xl text-[#F3EAE5] text-left ml-8 mt-4">
        If a child or adult at risk is in immediate danger, call 999.
      </p>
      <p className="max-w-4xl text-[#F3EAE5] text-left ml-8 mt-4">
        Otherwise:
      </p>
      <ul className="list-disc text-[#F3EAE5] text-left ml-12 mt-4 space-y-3">
        <li>Recognise signs of harm or abuse.</li>
        <li>Respond by listening calmly and reassuring the individual.</li>
        <li>Report immediately to the Lead Safeguarding Officer (or Deputy if unavailable).</li>
        <li>Record the concern factually in writing, signed and dated.</li>
        <li>The Lead Safeguarding Officer will decide next steps, which may include contacting:</li>
        <ul className="list-disc ml-8 space-y-2">
          <li>Local Authority Children’s or Adult Safeguarding Services.</li>
          <li>Local Authority Designated Officer (LADO).</li>
          <li>Police (non-emergency: 101).</li>
        </ul>
      </ul>

      <p className="max-w-4xl text-[#F3EAE5] text-left ml-8 mt-4">
        Confidentiality will be respected, but safeguarding concerns may be shared with statutory agencies when necessary.
      </p>

      <h2 className="text-3xl text-[#F3EAE5] font-bold text-left px-8 mt-10 tracking-wide">10. Working with Children and Adults at Risk</h2>
      <ul className="list-disc text-[#F3EAE5] text-left ml-12 mt-4 space-y-3">
        <li>Obtain parental/guardian consent for under-18s.</li>
        <li>Use photography/recording only with written consent.</li>
        <li>Ensure venues are risk-assessed for safety and accessibility.</li>
        <li>Take extra care in projects dealing with sensitive topics.</li>
      </ul>

      <h2 className="text-3xl text-[#F3EAE5] font-bold text-left px-8 mt-10 tracking-wide">11. Whistleblowing</h2>
      <p className="max-w-4xl text-[#F3EAE5] text-left ml-8 mt-4">
        Staff, freelancers or volunteers who raise safeguarding concerns in good faith will be protected from victimisation. 
        Concerns about the Lead Safeguarding Officer should be raised directly with the Local Authority.
      </p>

      <h2 className="text-3xl text-[#F3EAE5] font-bold text-left px-8 mt-10 tracking-wide">12. Monitoring and Review</h2>
      <ul className="list-disc text-[#F3EAE5] text-left ml-12 mt-4 space-y-3">
        <li>This policy will be reviewed annually by the Lead Safeguarding Officer.</li>
        <li>Safeguarding practice will be monitored through staff training, project evaluations and feedback from participants.</li>
      </ul>

      <h2 className="text-3xl text-[#F3EAE5] font-bold text-left px-8 mt-10 tracking-wide">13. Key Contacts</h2>
      <ul className="list-disc text-[#F3EAE5] text-left ml-12 mt-4 space-y-3">
        <li>Lead Safeguarding Officer: Ashleigh-Ann — larkparktheatre@gmail.com</li>
        <li>Deputy Safeguarding Officer: Chloe — larkparktheatre@gmail.com</li>
        <li>West Sussex Safeguarding Children Partnership (WSSCP): 01403 229900</li>
        <li>West Sussex Safeguarding Adults Board (WSSAB): 01243 642121</li>
        <li>NSPCC Helpline: 0808 800 5000</li>
        <li>Childline: 0800 1111</li>
        <li>Police (emergency): 999</li>
        <li>Police (non-emergency): 101</li>
      </ul>

      <h2 className="text-3xl text-[#F3EAE5] font-bold text-left px-8 mt-10 tracking-wide mb-4">14. Contact Us</h2>
      <p className="max-w-4xl text-[#F3EAE5] text-left ml-8 mb-10">
        If you have any questions about this policy, please contact:<br />
        Ashleigh-Ann — larkparktheatre@gmail.com
      </p>
    </main>
  );
}
