import React from 'react';
import { MessageCircle, LineChart, LayoutDashboard } from 'lucide-react';

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const Step: React.FC<StepProps> = ({ icon, title, description, index }) => {
  return (
    <div className="flex flex-col items-center text-center md:text-left md:items-start">
      <div className="relative mb-6">
        <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-500">
          {icon}
        </div>
        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary-500 text-white flex items-center justify-center text-sm font-medium">
          {index}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-neutral-600 leading-relaxed">{description}</p>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Como o Kontai funciona
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Simplifique suas finanças em apenas três passos e tenha controle total do seu dinheiro com nossa tecnologia de IA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <Step
            icon={<MessageCircle size={32} />}
            title="Converse com a IA no WhatsApp"
            description="Interaja naturalmente pelo WhatsApp e registre suas finanças sem complicação, usando linguagem do dia a dia."
            index={1}
          />
          <Step
            icon={<LineChart size={32} />}
            title="Registre seus gastos com naturalidade"
            description="Basta enviar mensagens como 'Gastei R$15 no café' ou 'Recebi salário de R$3500' e a IA entende e organiza."
            index={2}
          />
          <Step
            icon={<LayoutDashboard size={32} />}
            title="Acesse relatórios e gráficos no painel"
            description="Visualize todos seus dados financeiros em um dashboard intuitivo com relatórios, gráficos e exportações em Excel."
            index={3}
          />
        </div>

        <div className="mt-16 p-4 md:p-8 bg-neutral-50 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3">
              <div className="flex items-center mb-3">
                <span className="bg-primary-500 text-white text-xs font-medium rounded px-2.5 py-1 mr-2">DICA PRO</span>
                <span className="text-sm text-neutral-500">Experimente comandos avançados</span>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3">Aproveite o poder da IA para análises automáticas</h3>
              <p className="text-neutral-600 mb-4">
                Experimente perguntar: "Quanto gastei com restaurantes este mês?", "Mostre meus maiores gastos", ou "Compare meus gastos deste mês com o anterior" para obter insights instantâneos.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center md:justify-end mt-6 md:mt-0">
              <img
                src="https://images.pexels.com/photos/5849577/pexels-photo-5849577.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="IA analisando finanças"
                className="rounded-xl w-full max-w-xs object-cover h-48 shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;