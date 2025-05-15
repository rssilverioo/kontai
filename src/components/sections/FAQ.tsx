import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqItems: FAQItem[] = [
    {
      question: 'O que é o Kontai?',
      answer:
        'O Kontai é um assistente financeiro pessoal baseado em IA que permite que você gerencie suas finanças através do WhatsApp e um dashboard web. Você pode registrar seus gastos e receitas facilmente pelo WhatsApp e obter insights através de relatórios personalizados.',
    },
    {
      question: 'Como funciona a IA do Kontai?',
      answer:
        'Nossa IA é treinada para entender linguagem natural sobre finanças. Quando você envia uma mensagem como "Gastei R$50 com almoço", a IA identifica o valor, a categoria (almoço) e registra automaticamente. Ela também consegue responder perguntas como "Quanto gastei em alimentação este mês?" analisando seus dados.',
    },
    {
      question: 'O que acontece após o período de trial?',
      answer:
        'Após os 7 dias de trial, você pode optar por assinar o plano Premium ou continuar com a versão gratuita limitada. Não fazemos cobranças automáticas - você decide se quer continuar ou não. Seus dados permanecem salvos mesmo na versão gratuita.',
    },
    {
      question: 'Posso usar o Kontai apenas pelo WhatsApp?',
      answer:
        'Sim! A versão gratuita permite até 3 mensagens por dia exclusivamente pelo WhatsApp. O plano Premium desbloqueia recursos adicionais como o dashboard web completo e relatórios avançados, mas você pode perfeitamente usar o serviço básico apenas pelo WhatsApp.',
    },
    {
      question: 'Minhas informações financeiras estão seguras?',
      answer:
        'Absolutamente. Utilizamos criptografia de ponta a ponta e não compartilhamos seus dados com terceiros. Seguimos rigorosos protocolos de segurança e privacidade, e você pode solicitar a exclusão de todos os seus dados a qualquer momento.',
    },
    {
      question: 'Como faço para cancelar minha assinatura?',
      answer:
        'Você pode cancelar sua assinatura a qualquer momento através do seu painel de controle no dashboard web. Após o cancelamento, você ainda terá acesso aos recursos Premium até o final do período pago e depois sua conta será automaticamente convertida para o plano gratuito.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Perguntas frequentes
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Tudo o que você precisa saber sobre o Kontai
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  className="flex justify-between items-center w-full p-6 text-left"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="text-lg font-medium">{item.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="text-neutral-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="text-neutral-500 flex-shrink-0" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 pt-0 text-neutral-600">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center p-6 bg-primary-50 rounded-2xl">
            <h3 className="text-xl font-semibold mb-3">
              Ainda tem dúvidas?
            </h3>
            <p className="text-neutral-600 mb-6">
              Nossa equipe de suporte está pronta para ajudar com qualquer pergunta que você tenha.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-white text-primary-500 rounded-lg font-medium hover:bg-neutral-100 transition-colors"
              >
                Fale conosco
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors"
              >
                Ver tutoriais
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;