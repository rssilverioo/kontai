import React, { useState } from 'react';
import Button from '../ui/Button';
import { Check, AlertCircle } from 'lucide-react';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: PricingFeature[];
  cta: string;
  popular?: boolean;
  disabled?: boolean;
}

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const pricingTiers: PricingTier[] = [
    {
      name: 'Free',
      price: 'R$ 0',
      description: 'Para quem quer experimentar o básico da organização financeira',
      features: [
        { text: 'Até 3 mensagens por dia', included: true },
        { text: 'Converse com a IA no WhatsApp', included: true },
        { text: 'Registro de gastos e receitas', included: true },
        { text: 'Dashboard básico', included: false },
        { text: 'Exportação de relatórios', included: false },
        { text: 'Categorização automática', included: false },
      ],
      cta: 'Começar grátis',
    },
    {
      name: 'Trial',
      price: isAnnual ? 'R$ 0 por 7 dias' : 'R$ 0 por 7 dias',
      description: 'Experimente todos os recursos premium por 7 dias',
      features: [
        { text: 'Até 10 mensagens por dia', included: true },
        { text: 'Converse com a IA no WhatsApp', included: true },
        { text: 'Registro de gastos e receitas', included: true },
        { text: 'Dashboard parcial', included: true },
        { text: 'Exportação de relatórios', included: false },
        { text: 'Categorização automática', included: true },
      ],
      cta: 'Começar trial',
      popular: true,
    },
    {
      name: 'Premium',
      price: isAnnual ? 'R$ 29,90/mês' : 'R$ 39,90/mês',
      description: isAnnual ? 'Cobrado anualmente (R$ 358,80)' : 'Cobrado mensalmente',
      features: [
        { text: 'Mensagens ilimitadas', included: true },
        { text: 'Converse com a IA no WhatsApp', included: true },
        { text: 'Registro de gastos e receitas', included: true },
        { text: 'Dashboard completo', included: true },
        { text: 'Exportação de relatórios Excel/PDF', included: true },
        { text: 'Categorização avançada com IA', included: true },
      ],
      cta: 'Assinar Plano Premium',
    },
  ];

  return (
    <section id="planos" className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Escolha o plano ideal para você
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Comece gratuitamente e atualize conforme suas necessidades crescem. Sem compromissos de longo prazo.
          </p>

          <div className="mt-8 inline-flex p-1 bg-white rounded-lg shadow">
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                isAnnual
                  ? 'bg-primary-500 text-white'
                  : 'bg-transparent text-neutral-600 hover:text-neutral-900'
              }`}
              onClick={() => setIsAnnual(true)}
            >
              Anual <span className="text-xs opacity-80">(2 meses grátis)</span>
            </button>
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                !isAnnual
                  ? 'bg-primary-500 text-white'
                  : 'bg-transparent text-neutral-600 hover:text-neutral-900'
              }`}
              onClick={() => setIsAnnual(false)}
            >
              Mensal
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:transform hover:-translate-y-1 ${
                tier.popular ? 'ring-2 ring-primary-500 relative' : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 mt-4 mr-4 bg-primary-500 text-white text-xs font-bold py-1 px-2 rounded-full uppercase">
                  Popular
                </div>
              )}
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{tier.price}</span>
                </div>
                <p className="text-neutral-600 text-sm mb-6">{tier.description}</p>

                <Button
                  variant={tier.popular ? 'primary' : 'outline'}
                  fullWidth
                  className="mb-8"
                  disabled={tier.disabled}
                >
                  {tier.cta}
                </Button>

                <div className="space-y-3">
                  {tier.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start">
                      {feature.included ? (
                        <Check
                          size={18}
                          className="text-primary-500 mr-2 mt-0.5 flex-shrink-0"
                        />
                      ) : (
                        <AlertCircle
                          size={18}
                          className="text-neutral-400 mr-2 mt-0.5 flex-shrink-0"
                        />
                      )}
                      <span
                        className={
                          feature.included
                            ? 'text-neutral-800'
                            : 'text-neutral-500'
                        }
                      >
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-neutral-600 text-sm mb-2">
            Tem dúvidas sobre qual plano escolher?
          </p>
          <Button variant="text">Fale com nosso suporte</Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;