import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Clock, CheckCircle, TrendingUp, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-hero-pattern">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-[10%] w-72 h-72 rounded-full bg-accent/10 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-[5%] w-96 h-96 rounded-full bg-primary/10 blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Flash Promo Badge - MELHORADO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="text-accent font-semibold text-sm">
                🔥 PROMOÇÃO: Sofá Retrátil (até 2m) + Higienização por R$150
              </span>
            </motion.div>

            {/* Headline - MUITO MAIS IMPACTANTE */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance"
            >
              Seu Sofá Está 
              <span className="text-gradient-coral"> Manchado, Fedorento</span>
              {" "}ou Cheio de 
              <span className="text-gradient-blue"> Ácaros</span>?
              <br />
              <span className="text-2xl md:text-3xl lg:text-4xl text-accent font-semibold block mt-3">
                ✨ Deixe com NOSOTROS! Recupere HOJE!
              </span>
            </motion.h1>

            {/* Subheadline - ORIENTADO AO BENEFÍCIO */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl"
            >
              Tecnologia <strong className="text-foreground">a seco profissional</strong> que remove manchas profundas, 
              odores persistentes e 100% dos ácaros — 
              <strong className="text-accent"> sem molhar um fio</strong> e com resultado 
              <strong className="text-foreground"> GARANTIDO NA HORA</strong>.
            </motion.p>

            {/* Social Proof - ADICIONADO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-col sm:flex-row gap-6 mb-10 items-center lg:items-start"
            >
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-accent" />
                <span className="text-sm font-semibold text-foreground">+2.500 Clientes Satisfeitos</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-accent" />
                <span className="text-sm font-semibold text-foreground">5.0★ Google (65 avaliações)</span>
              </div>
            </motion.div>

            {/* Feature Tags - MELHORADO */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10"
            >
              {[
                { icon: CheckCircle, text: "✓ Sem molhar" },
                { icon: Clock, text: "⚡ Pronto em 2 horas" },
                { icon: Sparkles, text: "✨ Resultado imediato" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/20 text-foreground font-medium text-sm"
                >
                  {item.text}
                </div>
              ))}
            </motion.div>

            {/* Trust Indicators - NOVO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mb-10 p-4 rounded-2xl bg-primary/5 border border-primary/20"
            >
              <p className="text-sm text-muted-foreground mb-2">
                <strong className="text-foreground">✅ Garantia 100% Satisfação:</strong> Se não ficar perfeito, refazemos GRÁTIS!
              </p>
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">🛡️ Produtos Seguros:</strong> Hipoalergênicos, seguros para crianças e animais
              </p>
            </motion.div>

            {/* CTAs - MAIS ASSERTIVOS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://wa.me/5521979511720"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-coral inline-flex items-center justify-center gap-2 text-lg hover:shadow-lg hover:scale-105 transition-transform"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>💬 Agendar Agora via WhatsApp</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#precos" 
                className="btn-outline-blue inline-flex items-center justify-center gap-2 hover:shadow-lg transition-all"
              >
                <span>📊 Ver Preços e Promoções</span>
              </a>
            </motion.div>

            {/* CTA Copy - SENSO DE URGÊNCIA */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-sm text-accent font-semibold mt-6"
            >
              ⏰ Agende HOJE e ganhe R$50 em desconto + brinde especial!
            </motion.p>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://res.cloudinary.com/di7wp3ajp/image/upload/v1765122267/images_josrz3.jpg"
                alt="Sofá limpo e higienizado pela LAVAMEPLUS"
                loading="lazy"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-deep/30 to-transparent" />
              
              {/* "Antes e Depois" Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute top-4 right-4 bg-gradient-coral text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg"
              >
                ✨ ANTES → DEPOIS
              </motion.div>
            </div>

            {/* Floating Card - MELHORADO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-coral flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-semibold">Resultado</p>
                  <p className="font-bold text-foreground text-lg">NA HORA! ⚡</p>
                </div>
              </div>
            </motion.div>

            {/* Stats Card - REDESENHADO */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -top-4 -right-4 glass rounded-2xl p-4 shadow-xl"
            >
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">5.0 ⭐</p>
                <p className="text-xs text-muted-foreground font-semibold">65 Avaliações</p>
                <p className="text-xs text-accent font-bold mt-1">Google Reviews</p>
              </div>
            </motion.div>

            {/* Side Badge - NOVO */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="absolute -left-4 top-1/2 transform -translate-y-1/2 glass rounded-2xl p-3 shadow-xl hidden lg:block"
            >
              <p className="text-xs font-bold text-accent text-center">5.0 ⭐</p>
              <p className="text-[10px] text-muted-foreground text-center">65<br/>Google Reviews</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
