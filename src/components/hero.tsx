import { Wrench, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900 pt-16 sm:pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-10"></div>

      {/* Animated Background Elements */}
      <div className="absolute top-20 left-4 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full opacity-30 animate-float"></div>
      <div
        className="absolute bottom-32 right-8 sm:right-16 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full opacity-25 animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 right-4 sm:right-20 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full opacity-35 animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container-custom relative z-10 px-4">
        <div className="text-center space-y-6 sm:space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-amber-900/20 backdrop-blur-sm rounded-full px-3 py-2 sm:px-4 text-yellow-300 border border-yellow-400/30">
            <Star size={14} className="fill-current sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm font-medium">
              +10 Anos de Experiência
            </span>
          </div>

          {/* Main Heading */}
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Recupere o<span className="gradient-text"> Brilho Original</span>
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>do Seu Piso!
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto px-4">
              Serviços especializados em polimento e restauração de pisos em
              <span className="text-yellow-300 font-semibold">
                {" "}
                Salvador e Região Metropolitana
              </span>
            </p>
          </div>

          {/* CTA Button */}
          <div className="px-4">
            <a
              href="https://wa.me/5571999999999?text=Olá! Gostaria de solicitar um orçamento para polimento de piso."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 sm:space-x-3 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-xl shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base lg:text-lg w-full sm:w-auto max-w-md sm:max-w-none animate-glow"
            >
              <Wrench size={20} className="sm:w-6 sm:h-6" />
              <span className="text-center">PEÇA SEU ORÇAMENTO AGORA</span>
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 mt-8 sm:mt-12 px-4">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-300">
                1000+
              </div>
              <div className="text-amber-200 text-sm sm:text-base">
                Pisos Restaurados
              </div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-amber-600"></div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-300">
                10+
              </div>
              <div className="text-amber-200 text-sm sm:text-base">
                Anos de Experiência
              </div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-amber-600"></div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-300">
                500+
              </div>
              <div className="text-amber-200 text-sm sm:text-base">
                Clientes Satisfeitos
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}