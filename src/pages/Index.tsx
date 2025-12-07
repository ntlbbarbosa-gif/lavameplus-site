import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProblemasSolucoes } from "@/components/ProblemasSolucoes";
import { Precos } from "@/components/Precos";
import { OPlus } from "@/components/OPlus";
import { AntesDepois } from "@/components/AntesDepois";
import { Depoimentos } from "@/components/Depoimentos";
import { Beneficios } from "@/components/Beneficios";
import { FAQ } from "@/components/FAQ";
import { ContatoForm } from "@/components/ContatoForm";
import { ChamadaFinal } from "@/components/ChamadaFinal";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ProblemasSolucoes />
        <Precos />
        <OPlus />
        <AntesDepois />
        <Depoimentos />
        <Beneficios />
        <FAQ />
        <ContatoForm />
        <ChamadaFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
