import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Ledger from "@/components/Ledger";
import Nav from "@/components/Nav";
import Plan from "@/components/Plan";
import Process from "@/components/Process";
import Proof from "@/components/Proof";
import Reel from "@/components/Reel";
import Strip from "@/components/Strip";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  alternateName: site.legalName,
  url: site.url,
  image: `${site.url}/img/toosie.jpg`,
  jobTitle: "Web3 growth marketer",
  description: site.description,
  sameAs: [site.x, site.telegram],
  knowsAbout: ["Web3 marketing", "Community growth", "Content creation", "KOL outreach", "Business development"],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    name: "Certificate of Achievement, Project Management and Marketing",
    recognizedBy: { "@type": "Organization", name: "Profunda W3 Academy" },
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main id="top">
        <Hero />
        <Strip />
        <Reel />
        <Ledger />
        <Proof />
        <Plan />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
