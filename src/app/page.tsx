import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Process from "@/components/process";
import BeforeAfter from "@/components/before-after";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/wpp-button";

export const metadata = {
  title: "SOS Polimentos - Recupere o Brilho Original do Seu Piso",
  description:
    "Serviços especializados em polimento e restauração de pisos em Salvador e Região Metropolitana. Mais de 10 anos de experiência.",
  openGraph: {
    title: "SOS Polimentos - Recupere o Brilho Original do Seu Piso",
    description:
      "Serviços especializados em polimento e restauração de pisos em Salvador e Região Metropolitana.",
    type: "website"
  }
};

export default function Home() {
  return (
    <>
      <main className="overflow-x-hidden">
        <Header />
        <Hero />
        <Services />
        <Process />
        <BeforeAfter />
        <CTA />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  );
}
