import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
      
            <span className="font-display font-bold text-2xl text-primary-500">
              <img src="/images/logokontaiverde.png" width={110} height={32} alt="Logo Kontai - Seu assistente financeiro inteligente" />
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#como-funciona"
              className="font-medium text-neutral-700 hover:text-primary-500 transition-colors"
            >
              Como Funciona
            </a>
            <a
              href="#planos"
              className="font-medium text-neutral-700 hover:text-primary-500 transition-colors"
            >
              Planos
            </a>
            <a
              href="#depoimentos"
              className="font-medium text-neutral-700 hover:text-primary-500 transition-colors"
            >
              Depoimentos
            </a>
            <a
              href="#faq"
              className="font-medium text-neutral-700 hover:text-primary-500 transition-colors"
            >
              FAQ
            </a>
            <Button variant="secondary" size="sm">
              Login
            </Button>
            <Button variant="primary" size="sm">
              Comece grátis
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-neutral-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute left-0 right-0 top-full shadow-lg py-4 px-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a
                href="#como-funciona"
                className="font-medium text-neutral-700 hover:text-primary-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Como Funciona
              </a>
              <a
                href="#planos"
                className="font-medium text-neutral-700 hover:text-primary-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Planos
              </a>
              <a
                href="#depoimentos"
                className="font-medium text-neutral-700 hover:text-primary-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Depoimentos
              </a>
              <a
                href="#faq"
                className="font-medium text-neutral-700 hover:text-primary-500 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <div className="flex flex-col space-y-3 pt-3">
                <Button variant="secondary" fullWidth>
                  Login
                </Button>
                <Button variant="primary" fullWidth>
                  Comece grátis
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;