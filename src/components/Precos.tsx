import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Sparkles, Gift } from "lucide-react";

const precos = [
  {
    nome: "Sofá Retrátil",
    descricao: "Até 2,00m",
    preco: "150",
    destaque: true,
    popular: true,
  },
  {
    nome: "Colchão Casal",
    descricao: "1 lado",
    preco: "100",
    destaque: false,
    popular: false,
  },
  {
    nome: "Poltrona",
    descricao: "1 lugar",
    preco: "80",
    destaque: false,
    popular: false,
  },
  {
    nome: "Banco de Carro",
    descricao: "Por banco",
    preco: "100",
    destaque: false,
    popular: false,
  },
  {
    nome: "Tapete",
    descricao: "Por m²",
    preco: "20",
    destaque: false,
    popular: false,
  },
  {
    nome: "Puff",
    descricao: "Brinde*",
    preco: "Grátis",
    destaque: false,
    popular: false,
    isGift: true,
  },
];

function PriceCard({
  item,
  index,
}: {
  item: (typeof precos)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative group ${item.destaque ? "lg:-mt-4 lg:mb-4" : ""}`}
    >
      {item.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider shadow-lg">
            <Sparkles className="w-3 h-3" />
            Mais Popular
          </span>
        </div>
      )}

      <div
        className={`relative overflow-hidden rounded-2xl p-6 transition-all duration-500 h-full ${
          item.destaque
            ? "bg-gradient-to-br from-primary to-primary-dark text-primary-foreground shadow-xl scale-105"
            : "bg-card border border-border hover:border-accent/50 hover:shadow-xl"
        } ${item.isGift ? "border-accent/30 bg-accent/5" : ""}`}
      >
        {/* Shine effect for highlighted */}
        {item.destaque && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        )}

        {item.isGift && (
          <div className="absolute top-4 right-4">
            <Gift className="w-6 h-6 text-accent" />
          </div>
        )}

        <div className="relative z-10">
          <h3
            className={`text-xl font-bold mb-1 ${
              item.destaque ? "text-primary-foreground" : "text-foreground"
            }`}
          >
            {item.nome}
          </h3>
          <p
            className={`text-sm mb-4 ${
              item.destaque
                ? "text-primary-foreground/80"
                : "text-muted-foreground"
            }`}
          >
            {item.descricao}
          </p>

          <div className="flex items-baseline gap-1">
            {item.preco !== "Grátis" && (
              <span
                className={`text-sm ${
                  item.destaque
                    ? "text-primary-foreground/80"
                    : "text-muted-foreground"
                }`}
              >
                R$
              </span>
            )}
            <span
              className={`text-4xl font-bold ${
                item.destaque
                  ? "text-primary-foreground"
                  : item.isGift
                  ? "text-accent"
                  : "text-foreground"
              }`}
            >
              {item.preco}
            </span>
          </div>

          {item.isGift && (
            <p className="text-xs text-muted-foreground mt-2">
              *Dependendo do serviço contratado
            </p>
          )}

          {item.destaque && (
            <div className="mt-4 pt-4 border-t border-primary-foreground/20">
              <div className="flex items-center gap-2 text-sm text-primary-foreground/90">
                <Check className="w-4 h-4" />
                <span>Inclui higienização</span>
              </div>
            </div>
          )}
        </div>

        {/* Hover glow effect */}
        <div
          className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
            item.destaque
              ? "shadow-[inset_0_0_30px_rgba(255,255,255,0.1)]"
              : "shadow-[0_0_30px_hsl(var(--coral)/0.15)]"
          }`}
        />
      </div>
    </motion.div>
  );
}

export function Precos() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="precos" ref={sectionRef} className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            Preços Acessíveis
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Tabela de <span className="text-gradient-coral">Preços</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Valores justos com qualidade profissional garantida. Invista na
            saúde da sua família!
          </p>
        </motion.div>

        {/* Price Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {precos.map((item, index) => (
            <PriceCard key={item.nome} item={item} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/5521979511720"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-coral inline-flex items-center gap-2"
          >
            <span>Solicitar Orçamento</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
