"use client"

import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 bg-white/95 backdrop-blur-md shadow-lg z-50 transition-all duration-300">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-primary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">SOS</h1>
              <p className="text-xs text-gray-600">Polimentos</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#servicos" className="text-gray-700 hover:text-primary-600 transition-colors">
              Serviços
            </a>
            <a href="#processo" className="text-gray-700 hover:text-primary-600 transition-colors">
              Como Trabalhamos
            </a>
            <a href="#antes-depois" className="text-gray-700 hover:text-primary-600 transition-colors">
              Antes e Depois
            </a>
            <a 
              href="#contato" 
              className="btn-primary flex items-center space-x-2"
            >
              <Phone size={18} />
              <span>Orçamento</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <nav className="py-4 space-y-4 border-t">
            <a 
              href="#servicos" 
              className="block py-2 text-gray-700 hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </a>
            <a 
              href="#processo" 
              className="block py-2 text-gray-700 hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Como Trabalhamos
            </a>
            <a 
              href="#antes-depois" 
              className="block py-2 text-gray-700 hover:text-primary-600 transition-colors"
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
  )
}