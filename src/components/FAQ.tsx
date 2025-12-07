import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    id: 1,
    pergunta: "Como funciona a limpeza a seco?",
    resposta:
      "A limpeza a seco profissional utiliza produtos especializados e máquinas de extração a vácuo que removem a sujeira profunda sem usar muita água. Primeiro, aplicamos o produto específico para o tipo de tecido e manchas, deixamos agir, e depois extraímos tudo com a máquina profissional. O resultado é um sofá limpo, seco e pronto para usar em poucas horas!",
  },
  {
    id: 2,
    pergunta: "Quanto tempo demora a secagem?",
    resposta:
      "Normalmente o sofá fica pronto em 2 a 4 horas, dependendo do tamanho e tipo de tecido. Usamos equipamentos profissionais que aceleram muito o processo. Você recebe seu móvel praticamente seco e pode usar normalmente no mesmo dia!",
  },
  {
    id: 3,
    pergunta: "A limpeza é segura para crianças e animais?",
    resposta:
      "100% seguro! Usamos apenas produtos hipoalergênicos, certificados e testados dermatologicamente. Não contêm substâncias tóxicas, corantes prejudiciais ou alérgenos. Após a limpeza, é completamente seguro para crianças, bebês e animais de estimação brincarem no sofá.",
  },
  {
    id: 4,
    pergunta: "Vocês removem todos os tipos de manchas?",
    resposta:
      "Removemos a maioria das manchas: café, chocolate, vinho, tinta, gordura, sangue e muito mais. Algumas manchas muito antigas ou danificadas podem deixar um leve sinal, mas aplicamos tratamento especial. Se não sair completamente, oferecemos garantia de satisfação ou refazemos GRÁTIS!",
  },
  {
    id: 5,
    pergunta: "Qual é o preço? Tem promoção?",
    resposta:
      "Os preços variam conforme o tamanho e tipo do móvel. Um sofá retrátil sai a partir de R$150. Temos promoções especiais o tempo todo! Clique em 'Ver Preços' ou mande uma mensagem no WhatsApp que fazemos um orçamento personalizado.",
  },
  {
    id: 6,
    pergunta: "Vocês atendem minha região?",
    resposta:
      "Atendemos toda Jacarepaguá e região metropolitana do Rio de Janeiro. Se você mora fora dessa área, mande uma mensagem! Às vezes conseguimos fazer atendimento especial. Quanto maior a quantidade de serviços, mais fácil é agendar.",
  },
  {
    id: 7,
    pergunta: "Preciso remover o sofá de casa?",
    resposta:
      "Não! A gente trabalha com o sofá no seu lugar. Levamos toda a estrutura profissional para limpá-lo na hora. O único cuidado é deixar um espaço livre para a gente trabalhar confortavelmente.",
  },
  {
    id: 8,
    pergunta: "O produto mancha o sofá?",
    resposta:
      "Não mancha! Usamos apenas produtos neutros próprios para o serviço. Todos os nossos produtos são testados e certificados, não deixam manchas residuais ou descoloração no tecido. Você recebe seu sofá limpo, higienizado e sem qualquer marca do nosso trabalho!",
  },
  {
    id: 9,
    pergunta: "Qual é o diferencial da LAVAMEPLUS?",
    resposta:
      "Somos a melhor relação custo-benefício da região! Temos 5.0★ no Google com 65+ avaliações, use apenas produtos premium e seguros, resultado garantido, atendimento impecável e preços justos. Além disso, damos garantia de satisfação 100%!",
  },
  {
    id: 10,
    pergunta: "Como agendar? Qual é o horário de atendimento?",
    resposta:
      "Super fácil! Clique no botão 'Agendar via WhatsApp' e mande uma mensagem. Respondemos rapidinho! Atendemos de segunda a sábado, 7h às 19h. Para agendamentos de domingo ou horários especiais, mande uma mensagem que a gente vê a possibilidade.",
  },
];

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="section-padding bg-gradient-to-b from-background to-primary/5">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Perguntas e <span className="text-gradient-coral">Respostas</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Respondemos as principais dúvidas dos nossos clientes. Não encontrou sua pergunta? 
            <a href="https://wa.me/5521979511720" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold hover:underline">
              {" "}mande uma mensagem!
            </a>
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-card border border-border rounded-xl overflow-hidden hover:border-accent/50 transition-colors"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full flex items-center justify-between p-6 hover:bg-primary/5 transition-colors text-left"
              >
                <span className="text-lg font-semibold text-foreground pr-8">
                  {faq.pergunta}
                </span>
                <motion.div
                  animate={{ rotate: openId === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-6 h-6 text-accent" />
                </motion.div>
              </button>

              {/* Answer */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openId === faq.id ? "auto" : 0,
                  opacity: openId === faq.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 text-muted-foreground leading-relaxed border-t border-border pt-6">
                  {faq.resposta}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Ainda tem dúvidas?</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Não deixe suas dúvidas para depois! Nosso time está pronto para responder tudo que você precisa saber.
            </p>
            <a
              href="https://wa.me/5521979511720"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-coral inline-flex items-center justify-center gap-2 text-lg"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>Conversar com Especialista</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
