import Head from "next/head";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Process from "@/components/process";
import BeforeAfter from "@/components/before-after";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/wpp-button";

export default function Home() {
  return (
    <>
      <Head>
        <title>SOS Polimentos - Recupere o Brilho Original do Seu Piso</title>
        <meta
          name="description"
          content="Serviços especializados em polimento e restauração de pisos em Salvador e Região Metropolitana. Mais de 10 anos de experiência."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="SOS Polimentos - Recupere o Brilho Original do Seu Piso"
        />
        <meta
          property="og:description"
          content="Serviços especializados em polimento e restauração de pisos em Salvador e Região Metropolitana."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://sospolimentos.com.br" />
      </Head>
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
