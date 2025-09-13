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
    <section id="servicos" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
            <Sparkles size={16} />
            <span>Nossos Serviços</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 animate-slide-up">
            Soluções completas para restaurar pisos 
            <span className="gradient-text"> com perfeição</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: '0.1s'}}>
            Com mais de 10 anos de experiência, a SOS Polimentos é especialista em 
            devolver a beleza e o brilho de diversos tipos de pisos e bancadas — 
            com rapidez, limpeza e alto padrão de acabamento.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up card-hover"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

              {/* Hover Effect */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-full h-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-slide-up" style={{animationDelay: '0.8s'}}>
          <a 
            href="https://wa.me/5571999999999?text=Olá! Gostaria de saber mais sobre os serviços de polimento."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>Ver Todos os Serviços</span>
          </a>
        </div>
      </div>
    </section>
  )
}