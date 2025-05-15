'use client'
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
  avatarUrl: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      content: "Desde que comecei a usar o Kontai, nunca mais perdi o controle dos meus gastos! A interface do WhatsApp torna tudo muito simples, posso registrar gastos em segundos.",
      author: "Ana Luiza Silva",
      role: "Profissional Autônoma",
      avatarUrl: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 5,
    },
    {
      id: 2,
      content: "O Kontai me ajudou a identificar padrões de gastos que eu nem percebia. Em apenas 2 meses, consegui economizar quase 20% do meu salário!",
      author: "Ricardo Mendes",
      role: "Analista de Marketing",
      avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 5,
    },
    {
      id: 3,
      content: "Usar o WhatsApp para gerenciar minhas finanças foi uma revolução. O dashboard é incrivelmente intuitivo e me dá uma visão clara de onde meu dinheiro está indo.",
      author: "Juliana Costa",
      role: "Estudante Universitária",
      avatarUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 4,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (current) => (current - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            O que nossos usuários dizem
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Centenas de pessoas já transformaram suas finanças com o Kontai
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="relative w-full h-full min-h-[280px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute inset-0 w-full transition-all duration-500 ease-in-out 
                  ${index === activeIndex ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
              >
                <div className="bg-neutral-50 rounded-2xl p-6 md:p-8 shadow-sm h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center">
                      <img
                        src={testimonial.avatarUrl}
                        alt={testimonial.author}
                        className="w-14 h-14 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-semibold text-lg">{testimonial.author}</h4>
                        <p className="text-neutral-600 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={`${
                            i < testimonial.rating
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-neutral-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-lg italic text-neutral-700 mb-4">
                    "{testimonial.content}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full border border-neutral-200 hover:bg-neutral-100 transition-colors"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === activeIndex
                      ? 'bg-primary-500'
                      : 'bg-neutral-300 hover:bg-neutral-400'
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full border border-neutral-200 hover:bg-neutral-100 transition-colors"
              aria-label="Próximo depoimento"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-xl bg-neutral-50">
              <div className="text-3xl font-bold text-primary-500 mb-2">+25.000</div>
              <p className="text-neutral-700">Usuários ativos</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-neutral-50">
              <div className="text-3xl font-bold text-primary-500 mb-2">R$ 15M+</div>
              <p className="text-neutral-700">Gastos gerenciados</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-neutral-50">
              <div className="text-3xl font-bold text-primary-500 mb-2">4.8/5</div>
              <p className="text-neutral-700">Avaliação média</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
