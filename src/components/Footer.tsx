import { motion } from "framer-motion";
import { Instagram, MapPin, Phone, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer id="contato" className="bg-foreground text-background">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-coral flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">
                  L+
                </span>
              </div>
              <span className="text-xl font-bold">
                LAVAME<span className="text-coral">PLUS</span>
              </span>
            </a>
            <p className="text-background/70 mb-6 max-w-md">
              Especialistas em limpeza a seco de estofados. Recuperamos o
              conforto e a higiene do seu lar com tecnologia profissional e
              resultados garantidos.
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/5521979511720"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/lavameplus"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              {[
                { label: "Serviços", href: "#servicos" },
                { label: "Preços", href: "#precos" },
                { label: "Depoimentos", href: "#depoimentos" },
                { label: "Benefícios", href: "#beneficios" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-background/70">
                <Phone className="w-4 h-4 text-accent" />
                <span>(21) 97951-1720</span>
              </li>
              <li className="flex items-center gap-3 text-background/70">
                <Mail className="w-4 h-4 text-accent" />
                <span>contato@lavameplus.com.br</span>
              </li>
              <li className="flex items-start gap-3 text-background/70">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-1" />
                <span>Jacarepaguá - RJ e Região</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/50 text-sm">
              © {new Date().getFullYear()} LAVAMEPLUS. Todos os direitos
              reservados.
            </p>
            <div className="flex items-center gap-4 text-background/50 text-sm">
              <a href="#" className="hover:text-accent transition-colors">
                Política de Privacidade
              </a>
              <span>|</span>
              <a href="#" className="hover:text-accent transition-colors">
                Termos de Uso
              </a>
            </div>
            <p className="text-background/50 text-sm flex items-center gap-1">
              Feito com <Heart className="w-4 h-4 text-accent" /> para você
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
