import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const comparisons = [
  {
    id: 1,
    antes:
      "https://res.cloudinary.com/di7wp3ajp/image/upload/v1765125140/lavagem-de-sofa-antes-e-depois_efa8pf.jpg",
    depois:
      "https://res.cloudinary.com/di7wp3ajp/image/upload/v1765125140/lavagem-de-sofa-antes-e-depois_efa8pf.jpg",
    titulo: "Sofá de Tecido",
  },
  {
    id: 2,
    antes:
      "https://res.cloudinary.com/di7wp3ajp/image/upload/v1765127361/limpeza-de-sofa-no-analia-franco-2_orf4ix.jpg",
    depois:
      "https://res.cloudinary.com/di7wp3ajp/image/upload/v1765127361/limpeza-de-sofa-no-analia-franco-2_orf4ix.jpg",
    titulo: "Sofá Retrátil",
  },
  {
    id: 3,
    antes:
      "https://res.cloudinary.com/di7wp3ajp/image/upload/v1765125766/138e64b4c93cb1c16565888e19f0d311_wfjibl.jpg",
    depois:
      "https://res.cloudinary.com/di7wp3ajp/image/upload/v1765125766/138e64b4c93cb1c16565888e19f0d311_wfjibl.jpg",
    titulo: "Colchão",
  },
];

export function AntesDepois() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % comparisons.length);
    setSliderPosition(50);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + comparisons.length) % comparisons.length
    );
    setSliderPosition(50);
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  const current = comparisons[currentIndex];

  return (
    <section
      id="antes-depois"
      ref={ref}
      className="section-padding bg-secondary/30"
    >
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
            Resultados Reais
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-muted-foreground">Antes</span> &{" "}
            <span className="text-gradient-coral">Depois</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja a transformação que fazemos em cada estofado. Arraste o
            controle para comparar!
          </p>
        </motion.div>

        {/* Comparison Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
            {/* Before Image */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={current.antes}
                alt={`${current.titulo} - Antes`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover saturate-50 contrast-90"
              />

              {/* After Image Overlay */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={current.depois}
                  alt={`${current.titulo} - Depois`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover saturate-125 brightness-110"
                  style={{
                    width: `${(100 / sliderPosition) * 100}%`,
                    maxWidth: "none",
                  }}
                />
              </div>

              {/* Slider Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-accent shadow-lg z-20"
                style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-accent flex items-center justify-center shadow-xl">
                  <ChevronLeft className="w-4 h-4 text-accent-foreground absolute -left-0.5" />
                  <ChevronRight className="w-4 h-4 text-accent-foreground absolute -right-0.5" />
                </div>
              </div>

              {/* Labels */}
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-foreground/80 text-background text-sm font-semibold">
                Antes
              </div>
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold">
                Depois
              </div>

              {/* Range Input */}
              <input
                type="range"
                min="5"
                max="95"
                value={sliderPosition}
                onChange={handleSliderChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
              />
            </div>

            {/* Title */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/80 to-transparent">
              <h3 className="text-xl font-bold text-background">
                {current.titulo}
              </h3>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {comparisons.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setSliderPosition(50);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-accent w-8"
                      : "bg-border hover:bg-muted-foreground"
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
    </section>
  );
}




