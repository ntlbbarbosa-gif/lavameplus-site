import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Droplets,
  Wind,
  Clock,
  Settings,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const beneficios = [
  {
    icon: Droplets,
    titulo: "Sem Molhar",
    descricao: "Tecnologia a seco que não encharca seu estofado",
  },
  {
    icon: Wind,
    titulo: "Sem Cheiro Químico",
    descricao: "Produtos de qualidade com aroma suave e agradável",
  },
  {
    icon: Clock,
    titulo: "Atendimento Rápido",
    descricao: "Agendamento flexível e pontualidade garantida",
  },
  {
    icon: Settings,
    titulo: "Equipamentos Profissionais",
    descricao: "Máquinas de última geração para melhor resultado",
  },
  {
    icon: ShieldCheck,
    titulo: "Garantia de Satisfação",
    descricao: "Se não ficar satisfeito, refazemos sem custo",
  },
  {
    icon: Sparkles,
    titulo: "Resultado Imediato",
    descricao: "Veja a diferença no mesmo dia do serviço",
  },
];

function BeneficioCard({
  item,
  index,
}: {
  item: (typeof beneficios)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group text-center"
    >
      <motion.div
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ duration: 0.3 }}
        className="relative p-6 rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-500"
      >
        {/* Icon */}
        <div className="relative mx-auto mb-4 w-16 h-16">
          <div className="absolute inset-0 rounded-2xl bg-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-accent/20 group-hover:to-primary/20 transition-colors duration-500">
            <item.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
          </div>
        </div>

        {/* Content */}
        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
          {item.titulo}
        </h3>
        <p className="text-sm text-muted-foreground">{item.descricao}</p>
      </motion.div>
    </motion.div>
  );
}

export function Beneficios() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="beneficios" ref={ref} className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
            Por Que Nos Escolher
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Nossos <span className="text-gradient-coral">Diferenciais</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Qualidade, rapidez e compromisso com a sua satisfação em cada
            serviço
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {beneficios.map((item, index) => (
            <BeneficioCard key={item.titulo} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
