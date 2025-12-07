import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const depoimentos = [
  {
    id: 1,
    nome: "Maria Helena",
    foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    texto:
      "Meu sofá estava com manchas de anos e eles conseguiram deixar como novo! Atendimento impecável e resultado surpreendente. Super recomendo!",
    estrelas: 5,
    local: "Praça Seca, RJ",
  },
  {
    id: 2,
    nome: "Carlos Eduardo",
    foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    texto:
      "Profissionais muito competentes! Limparam meu colchão e removeram aquele cheiro de mofo que me incomodava há meses. Nota 10!",
    estrelas: 5,
    local: "Vila Valqueire, RJ",
  },
  {
    id: 3,
    nome: "Ana Paula Oliveira",
    foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    texto:
      "Minha filha tem alergia e depois da limpeza com higienização ela melhorou muito! O serviço PLUS fez toda diferença. Agradeço demais!",
    estrelas: 5,
    local: "Bento Ribeiro, RJ",
  },
  {
    id: 4,
    nome: "Roberto Almeida",
    foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    texto:
      "Preço justo, trabalho rápido e resultado incrível. Os bancos do meu carro ficaram novos! Já indiquei para vários amigos.",
    estrelas: 5,
    local: "Vila Militar, RJ",
  },
  {
    id: 5,
    nome: "Fernanda Costa",
    foto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    texto:
      "Contratei para limpar 3 sofás e 2 colchões. Todos ficaram perfeitos! A equipe foi muito educada e cuidadosa. Trabalho impecável!",
    estrelas: 5,
    local: "Jacarepaguá, RJ",
  },
];

export function Depoimentos() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % depoimentos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % depoimentos.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(
      (prev) => (prev - 1 + depoimentos.length) % depoimentos.length
    );
  };

  return (
    <section id="depoimentos" ref={ref} className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            Clientes Satisfeitos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            O Que Dizem <span className="text-gradient-coral">Sobre Nós</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mais de 2.500 clientes satisfeitos em toda região. Veja o que eles
            têm a dizer!
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="relative overflow-hidden rounded-3xl bg-card border border-border p-8 md:p-12 shadow-xl">
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-16 h-16 text-accent/10" />

              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(depoimentos[currentIndex].estrelas)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-accent text-accent"
                      />
                    )
                  )}
                </div>

                {/* Text */}
                <motion.p
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-xl md:text-2xl text-foreground leading-relaxed mb-8"
                >
                  "{depoimentos[currentIndex].texto}"
                </motion.p>

                {/* Author */}
                <motion.div
                  key={`author-${currentIndex}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="flex items-center gap-4"
                >
                  <img
                    src={depoimentos[currentIndex].foto}
                    alt={depoimentos[currentIndex].nome}
                    loading="lazy"
                    className="w-14 h-14 rounded-full object-cover border-2 border-accent"
                  />
                  <div>
                    <h4 className="font-bold text-foreground">
                      {depoimentos[currentIndex].nome}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {depoimentos[currentIndex].local}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevSlide}
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {depoimentos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setCurrentIndex(index);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-accent w-8"
                        : "bg-border w-2 hover:bg-muted-foreground"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
