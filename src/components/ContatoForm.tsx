import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { useState } from "react";

export function ContatoForm() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    servico: "sofá",
    mensagem: "",
  });

  const [enviado, setEnviado] = useState(false);
  const [carregando, setCarregando] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCarregando(true);

    // Simular envio (em produção, integrar com backend)
    setTimeout(() => {
      // Enviar via WhatsApp
      const mensagemWhatsApp = `*Novo Lead - LAVAMEPLUS*\n\n📝 Nome: ${formData.nome}\n📧 Email: ${formData.email}\n📱 Telefone: ${formData.telefone}\n🛋️ Serviço: ${formData.servico}\n💬 Mensagem: ${formData.mensagem}`;
      const urlWhatsApp = `https://wa.me/5521979511720?text=${encodeURIComponent(mensagemWhatsApp)}`;
      window.open(urlWhatsApp, "_blank");

      setCarregando(false);
      setEnviado(true);

      // Resetar formulário após 3 segundos
      setTimeout(() => {
        setFormData({
          nome: "",
          email: "",
          telefone: "",
          servico: "sofá",
          mensagem: "",
        });
        setEnviado(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contato" className="section-padding bg-gradient-to-b from-background to-accent/5">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
              Entre em Contato
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Fale com <span className="text-gradient-coral">Nosso Time</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Tem dúvidas? Quer agendar um serviço? Ou prefere receber um orçamento personalizado? 
              Estamos aqui para ajudar! Preencha o formulário ou nos contate diretamente.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-6">
              {/* WhatsApp */}
              <motion.a
                href="https://wa.me/5521979511720"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:border-accent hover:bg-primary/5 transition-all cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">WhatsApp</h4>
                  <p className="text-sm text-muted-foreground">(21) 97951-1720</p>
                  <p className="text-xs text-accent font-semibold mt-2">💬 Resposta rápida!</p>
                </div>
              </motion.a>

              {/* Email */}
              <motion.a
                href="mailto:contato@lavameplus.com.br"
                whileHover={{ scale: 1.05 }}
                className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:border-accent hover:bg-primary/5 transition-all cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Email</h4>
                  <p className="text-sm text-muted-foreground">contato@lavameplus.com.br</p>
                  <p className="text-xs text-accent font-semibold mt-2">📧 Resposta em 2 horas</p>
                </div>
              </motion.a>

              {/* Localização */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:border-accent hover:bg-primary/5 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Localização</h4>
                  <p className="text-sm text-muted-foreground">Jacarepaguá, Rio de Janeiro</p>
                  <p className="text-xs text-accent font-semibold mt-2">🚗 Atendimento a domicílio</p>
                </div>
              </motion.div>
            </div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-10 pt-10 border-t border-border"
            >
              <p className="text-sm text-muted-foreground font-semibold mb-4">✅ Por que escolher a LAVAMEPLUS?</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm text-foreground">5.0★ Google com 65+ avaliações</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm text-foreground">Garantia 100% Satisfação</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm text-foreground">Produtos Premium e Seguros</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm text-foreground">Melhor Relação Custo-Benefício</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-card border border-border rounded-2xl p-8 shadow-xl"
          >
            {!enviado ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nome */}
                <div>
                  <label htmlFor="nome" className="block text-sm font-semibold text-foreground mb-2">
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="João Silva"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:outline-none transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:outline-none transition-colors"
                  />
                </div>

                {/* Telefone */}
                <div>
                  <label htmlFor="telefone" className="block text-sm font-semibold text-foreground mb-2">
                    Telefone/WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    placeholder="(21) 99999-9999"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:outline-none transition-colors"
                  />
                </div>

                {/* Serviço */}
                <div>
                  <label htmlFor="servico" className="block text-sm font-semibold text-foreground mb-2">
                    Qual serviço você precisa? *
                  </label>
                  <select
                    id="servico"
                    name="servico"
                    value={formData.servico}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:outline-none transition-colors"
                  >
                    <option value="sofá">Limpeza de Sofá</option>
                    <option value="colchão">Limpeza de Colchão</option>
                    <option value="cadeira">Limpeza de Cadeira</option>
                    <option value="tapete">Limpeza de Tapete</option>
                    <option value="almofada">Limpeza de Almofada</option>
                    <option value="outro">Outro Serviço</option>
                  </select>
                </div>

                {/* Mensagem */}
                <div>
                  <label htmlFor="mensagem" className="block text-sm font-semibold text-foreground mb-2">
                    Deixe sua mensagem (opcional)
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    placeholder="Descreva seu sofá, o tipo de mancha ou qualquer detalhe importante..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={carregando}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-coral py-4 text-lg font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {carregando ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Enviar Solicitação</span>
                    </>
                  )}
                </motion.button>

                <p className="text-xs text-muted-foreground text-center">
                  * Campos obrigatórios. Seus dados são seguros e não compartilhados.
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4"
                >
                  <CheckCircle className="w-8 h-8 text-accent" />
                </motion.div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Sucesso!</h3>
                <p className="text-muted-foreground mb-6">
                  Sua solicitação foi enviada com sucesso! Entraremos em contato via WhatsApp em breve.
                </p>
                <p className="text-sm text-accent font-semibold">
                  ✅ Redirecionando para WhatsApp...
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
