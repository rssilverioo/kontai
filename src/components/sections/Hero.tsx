import React from 'react';
import Button from '../ui/Button';
import { MessageSquare, BarChart2, ChevronDown } from 'lucide-react';
const Hero: React.FC = () => {
  const scrollToNextSection = () => {
    const howItWorksSection = document.getElementById('como-funciona');
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50 to-white z-0" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-6 animate-fade-in">
              Seu novo assistente financeiro pessoal
            </h1>
            <p className="text-xl text-neutral-700 mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Organize suas contas, receba relatórios no WhatsApp e veja tudo em um painel inteligente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Button variant="primary" onClick={() => window.location.href = 'https://api.whatsapp.com/send?phone=5511988919770'} size="lg">
                Comece grátis
              </Button>

              <Button variant="outline" size="lg">
                Saiba mais
              </Button>
            </div>
            <div className="flex items-center gap-6 text-sm text-neutral-600 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Sem cartão de crédito</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Cancele quando quiser</span>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="relative z-10 bg-white rounded-2xl shadow-xl p-2 md:p-4 flex">
              {/* WhatsApp mockup */}
              <div className="w-1/2 bg-neutral-50 rounded-xl p-3 mr-2">
                <div className="bg-primary-500 text-white rounded-lg py-2 px-3 mb-3 max-w-[85%]">
                  <div className="flex items-center mb-1">
                    <MessageSquare size={14} className="mr-1" />
                    <span className="text-xs font-medium">Kontai</span>
                  </div>
                  <p className="text-sm">Olá! Como posso ajudar com suas finanças hoje?</p>
                </div>
                <div className="bg-neutral-200 text-neutral-800 rounded-lg py-2 px-3 mb-3 ml-auto max-w-[85%]">
                  <p className="text-sm">Registrar compra no mercado R$157,50</p>
                </div>
                <div className="bg-primary-500 text-white rounded-lg py-2 px-3 max-w-[85%]">
                  <div className="flex items-center mb-1">
                    <MessageSquare size={14} className="mr-1" />
                    <span className="text-xs font-medium">Kontai</span>
                  </div>
                  <p className="text-sm">Registrei sua compra de R$157,50 na categoria "Mercado". Seu gasto mensal nesta categoria já chegou a R$430,25.</p>
                </div>
              </div>

              {/* Dashboard mockup */}
              <div className="w-1/2 bg-white rounded-xl shadow-sm">
                <div className="h-3 w-full bg-neutral-100 rounded-t-xl mb-2"></div>
                <div className="p-3">
                  <div className="mb-3">
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-xs font-medium text-neutral-800">Gastos por categoria</div>
                      <div className="text-xs text-neutral-500">Abril 2025</div>
                    </div>
                    <div className="bg-neutral-100 h-28 rounded-lg p-2">
                      <div className="flex items-end h-full w-full gap-1">
                        <div className="h-[60%] w-1/5 bg-primary-500 rounded-sm"></div>
                        <div className="h-[40%] w-1/5 bg-primary-400 rounded-sm"></div>
                        <div className="h-[75%] w-1/5 bg-primary-300 rounded-sm"></div>
                        <div className="h-[30%] w-1/5 bg-secondary-400 rounded-sm"></div>
                        <div className="h-[25%] w-1/5 bg-secondary-300 rounded-sm"></div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-xs font-medium text-neutral-800">Resumo</div>
                      <BarChart2 size={14} className="text-neutral-500" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs p-1.5 bg-neutral-50 rounded">
                        <span>Receitas</span>
                        <span className="font-medium text-primary-500">R$ 4.250,00</span>
                      </div>
                      <div className="flex justify-between text-xs p-1.5 bg-neutral-50 rounded">
                        <span>Despesas</span>
                        <span className="font-medium text-neutral-700">R$ 2.830,75</span>
                      </div>
                      <div className="flex justify-between text-xs p-1.5 bg-neutral-50 rounded">
                        <span>Saldo</span>
                        <span className="font-medium text-primary-500">R$ 1.419,25</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-primary-200 rounded-full opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-secondary-200 rounded-full opacity-70"></div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow cursor-pointer" onClick={scrollToNextSection}>
          <ChevronDown size={24} className="text-primary-500" />
        </div>
      </div>
    </section>
  );
};

export default Hero;