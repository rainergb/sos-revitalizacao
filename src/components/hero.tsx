import { Wrench, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 bg-gradient-to-r from-gold-400 to-gold-500 rounded-full opacity-30 animate-float" style={{animationDelay: '2s'}}></div>

      <div className="container-custom relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-gold-400 border border-gold-500/30">
            <Star size={16} className="fill-current" />
            <span className="text-sm font-medium">+10 Anos de Experiência</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight animate-slide-up">
              Recupere o
              <span className="gradient-text"> Brilho Original</span>
              <br />do Seu Piso!
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>
              Serviços especializados em polimento e restauração de pisos em 
              <span className="text-gold-400 font-semibold"> Salvador e Região Metropolitana</span>
            </p>
          </div>

          {/* CTA Button */}
          <div className="animate-slide-up" style={{animationDelay: '0.4s'}}>
            <a 
              href="https://wa.me/5571999999999?text=Olá! Gostaria de solicitar um orçamento para polimento de piso."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white font-bold py-4 px-8 rounded-xl shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:-translate-y-1 animate-glow text-lg"
            >
              <Wrench size={24} />
              <span>PEÇA SEU ORÇAMENTO AGORA</span>
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-12 animate-slide-up" style={{animationDelay: '0.6s'}}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold-400">1000+</div>
              <div className="text-gray-400">Pisos Restaurados</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-600"></div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold-400">10+</div>
              <div className="text-gray-400">Anos de Experiência</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-600"></div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold-400">500+</div>
              <div className="text-gray-400">Clientes Satisfeitos</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}