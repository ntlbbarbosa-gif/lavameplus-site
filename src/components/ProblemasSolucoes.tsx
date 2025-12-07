import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Droplets,
  Wind,
  Bug,
  Trash2,
  Clock,
  Sparkles,
  Shield,
  Zap,
  Heart,
  AlertCircle,
} from "lucide-react";

const problemas = [
  { icon: Droplets, title: "Manchas", desc: "Café, vinho, gordura e mais" },
  { icon: Wind, title: "Cheiro Ruim", desc: "Odores persistentes e desagradáveis" },
  { icon: Trash2, title: "Poeira e Mofo", desc: "Acúmulo invisível que prejudica" },
  { icon: Bug, title: "Ácaros", desc: "Causadores de alergias e irritações" },
  { icon: Clock, title: "Aparência Velha", desc: "Estofado sem brilho e envelhecido" },
];

const solucoes = [
  { icon: Sparkles, title: "Limpeza Profunda", desc: "Remoção total de sujeira a seco" },
  { icon: Shield, title: "Higienização", desc: "Eliminação de bactérias e fungos" },
  { icon: Wind, title: "Sem Odores", desc: "Tecnologia que neutraliza cheiros" },
  { icon: Zap, title: "Secagem Rápida", desc: "Use seu estofado em poucas horas" },
  { icon: Heart, title: "Revitalização", desc: "Aparência renovada e protegida" },
];

function AnimatedCard({
  item,
  index,
  variant,
}: {
  item: { icon: any; title: string; desc: string };
  index: number;
  variant: "problema" | "solucao";
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const isProblem = variant === "problema";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, x: isProblem ? -20 : 20 }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative p-6 rounded-2xl border transition-all duration-500 ${
        isProblem
          ? "bg-destructive/5 border-destructive/20 hover:border-destructive/40"
          : "bg-primary/5 border-primary/20 hover:border-accent/50 hover:bg-accent/5"
      }`}
    >
      <div
        className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 ${
          isProblem
            ? "bg-destructive/10 text-destructive"
            : "bg-primary/10 text-primary group-hover:bg-accent/20 group-hover:text-accent"
        }`}
      >
        <item.icon className="w-7 h-7" />
      </div>
      <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
      <p className="text-muted-foreground text-sm">{item.desc}</p>

      {!isProblem && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      )}
    </motion.div>
  );
}

export function ProblemasSolucoes() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="servicos" ref={sectionRef} className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
            Transformação Garantida
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Do <span className="text-destructive">Problema</span> à{" "}
            <span className="text-gradient-coral">Solução</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Identificamos e resolvemos todos os problemas do seu estofado com
            tecnologia profissional
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Problemas */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Problemas Comuns
              </h3>
            </motion.div>
            <div className="space-y-4">
              {problemas.map((item, index) => (
                <AnimatedCard
                  key={item.title}
                  item={item}
                  index={index}
                  variant="problema"
                />
              ))}
            </div>
          </div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center shadow-lg">
              <svg
                className="w-8 h-8 text-accent-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </motion.div>

          {/* Soluções */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Nossas Soluções
              </h3>
            </motion.div>
            <div className="space-y-4">
              {solucoes.map((item, index) => (
                <AnimatedCard
                  key={item.title}
                  item={item}
                  index={index}
                  variant="solucao"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
