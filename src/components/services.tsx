import { Sparkles, Home, Building, Gem } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: <Gem size={32} />,
      title: "Restauração de Porcelanato",
      description: "Devolve o brilho e remove riscos e manchas"
    },
    {
      icon: <Sparkles size={32} />,
      title: "Restauração de Granito",
      description: "Polimento profissional com acabamento espelhado"
    },
    {
      icon: <Home size={32} />,
      title: "Restauração de Mármore",
      description: "Recuperação completa da beleza natural"
    },
    {
      icon: <Building size={32} />,
      title: "Restauração de Bancadas",
      description: "Cozinhas e banheiros como novos"
    },
    {
      icon: <Sparkles size={32} />,
      title: "Polimento de Inox",
      description: "Brilho profissional sem riscos"
    },
    {
      icon: <Home size={32} />,
      title: "Pisos de Madeira",
      description: "Restauração e revitalização completa"
    }
  ]

  return (
    <section id="servicos" className="section-padding bg-amber-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-700 px-3 py-2 sm:px-4 rounded-full text-xs sm:text-sm font-medium">
            <Sparkles size={14} className="sm:w-4 sm:h-4" />
            <span>Nossos Serviços</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 px-4">
            Soluções completas para restaurar pisos
            <span className="gradient-text"> com perfeição</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Com mais de 10 anos de experiência, a SOS Polimentos é especialista
            em devolver a beleza e o brilho de diversos tipos de pisos e
            bancadas — com rapidez, limpeza e alto padrão de acabamento.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 card-hover"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="scale-75 sm:scale-100">{service.icon}</div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 sm:mb-3 group-hover:text-yellow-600 transition-colors">
                {service.title}
              </h3>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {service.description}
              </p>

              {/* Hover Effect */}
              <div className="mt-4 sm:mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-full h-1 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16 px-4">
          <a
            href="https://wa.me/5571999999999?text=Olá! Gostaria de saber mais sobre os serviços de polimento."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center space-x-2 w-full sm:w-auto justify-center"
          >
            <span>Ver Todos os Serviços</span>
          </a>
        </div>
      </div>
    </section>
  );
}