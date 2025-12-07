import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, ArrowRight, Shield, Droplets, Star } from "lucide-react";

export function OPlus() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-gradient-to-b from-primary/5 to-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-3xl bg-accent/20 blur-3xl opacity-50" />

          {/* Card */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-card via-card to-accent/5 border border-accent/30 p-8 md:p-12 shadow-2xl">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            {/* Shine Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent -translate-x-full animate-shimmer" />

            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6"
                >
                  <Star className="w-4 h-4 text-accent" />
                  <span className="text-accent font-semibold text-sm">
                    Exclusivo LAVAMEPLUS
                  </span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-3xl md:text-4xl font-bold mb-4"
                >
                  O <span className="text-gradient-coral">PLUS</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-xl text-muted-foreground mb-6"
                >
                  Pano de Higienização Premium
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-muted-foreground mb-8"
                >
                  Nosso diferencial que mantém seu estofado protegido e
                  higienizado por mais tempo. Tecnologia exclusiva que elimina
                  99% das bactérias.
                </motion.p>

                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  href="https://wa.me/5521979511720?text=Quero saber mais sobre O PLUS!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent font-semibold group hover:gap-4 transition-all duration-300"
                >
                  <span>Saiba Mais</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </motion.a>
              </div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="grid gap-4"
              >
                {[
                  {
                    icon: Shield,
                    title: "Proteção Duradoura",
                    desc: "Mantém o estofado protegido por semanas",
                  },
                  {
                    icon: Droplets,
                    title: "Fórmula Premium",
                    desc: "Composição exclusiva e eficiente",
                  },
                  {
                    icon: Sparkles,
                    title: "99% Bactérias",
                    desc: "Eliminação comprovada de microorganismos",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-background/50 border border-border/50 hover:border-accent/30 transition-colors duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
