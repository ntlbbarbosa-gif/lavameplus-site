import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, Clock, AlertTriangle } from "lucide-react";

export function ChamadaFinal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Countdown timer - resets every day at midnight
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);

      const diff = endOfDay.getTime() - now.getTime();

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      return { hours, minutes, seconds };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, "0");

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent via-accent-dark to-accent" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-accent-foreground/10 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-accent-foreground/10 blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          {/* Urgency Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-foreground/20 backdrop-blur-sm mb-8"
          >
            <AlertTriangle className="w-4 h-4 text-accent-foreground animate-pulse" />
            <span className="text-accent-foreground font-semibold text-sm">
              Vagas Limitadas Hoje!
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent-foreground mb-6 text-balance"
          >
            Aproveite o Preço Promocional
            <br />
            <span className="text-accent-foreground/80">Antes que Acabe!</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-accent-foreground/90 mb-10 max-w-2xl mx-auto"
          >
            Sofá Retrátil até 2,00m por apenas{" "}
            <strong className="text-accent-foreground">R$150</strong> — oferta
            válida somente hoje!
          </motion.p>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center gap-3 md:gap-4 mb-12"
          >
            <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-accent-foreground/10 backdrop-blur-sm">
              <Clock className="w-4 h-4 text-accent-foreground/80" />
              <span className="text-sm text-accent-foreground/80">
                Termina em:
              </span>
            </div>

            {[
              { value: timeLeft.hours, label: "Horas" },
              { value: timeLeft.minutes, label: "Min" },
              { value: timeLeft.seconds, label: "Seg" },
            ].map((item, index) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="flex flex-col items-center">
                  <motion.div
                    key={item.value}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    className="w-16 md:w-20 h-16 md:h-20 rounded-xl bg-accent-foreground/20 backdrop-blur-sm flex items-center justify-center"
                  >
                    <span className="text-3xl md:text-4xl font-bold text-accent-foreground">
                      {formatNumber(item.value)}
                    </span>
                  </motion.div>
                  <span className="text-xs text-accent-foreground/70 mt-1">
                    {item.label}
                  </span>
                </div>
                {index < 2 && (
                  <span className="text-2xl font-bold text-accent-foreground/50 -mt-6">
                    :
                  </span>
                )}
              </div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="https://wa.me/5521979511720?text=Olá! Quero aproveitar a promoção do sofá retrátil por R$150!"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-accent-foreground text-accent font-bold text-lg shadow-2xl hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 animate-pulse-glow"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>Agendar Agora</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
