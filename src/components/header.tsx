"use client"

import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 bg-amber-50/95 backdrop-blur-md shadow-lg z-50 transition-all duration-300">
      <div className="container-custom">
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center space-x-2 sm:space-x-3 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16">
              <Image
                src="/SOS.png"
                alt="SOS Polimentos - Revitalização e Polimento"
                width={64}
                height={64}
                className="w-full h-full object-contain"
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <a
              href="#servicos"
              className="text-sm lg:text-base text-gray-700 hover:text-yellow-600 transition-colors"
            >
              Serviços
            </a>
            <a
              href="#processo"
              className="text-sm lg:text-base text-gray-700 hover:text-yellow-600 transition-colors"
            >
              Como Trabalhamos
            </a>
            <a
              href="#antes-depois"
              className="text-sm lg:text-base text-gray-700 hover:text-yellow-600 transition-colors"
            >
              Antes e Depois
            </a>
            <a
              href="#contato"
              className="btn-primary flex items-center space-x-2"
            >
              <Phone size={16} className="sm:inline hidden" />
              <span className="text-sm lg:text-base">Orçamento</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-yellow-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <nav className="py-4 space-y-4 border-t">
            <a
              href="#servicos"
              className="block py-2 text-gray-700 hover:text-yellow-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </a>
            <a
              href="#processo"
              className="block py-2 text-gray-700 hover:text-yellow-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Como Trabalhamos
            </a>
            <a
              href="#antes-depois"
              className="block py-2 text-gray-700 hover:text-yellow-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Antes e Depois
            </a>
            <a
              href="#contato"
              className="btn-primary inline-flex items-center space-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Phone size={18} />
              <span>Orçamento</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}