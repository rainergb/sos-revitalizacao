import { Eye, ArrowRight } from 'lucide-react'

export default function BeforeAfter() {
  const examples = [
    {
      title: "Mármore",
      subtitle: "Fosco vs. Brilho Espelhado",
      beforeText: "antes",
      afterText: "depois"
    },
    {
      title: "Porcelanato", 
      subtitle: "Encardido vs. Restaurado",
      beforeText: "antes",
      afterText: "depois"
    },
    {
      title: "Piso de Madeira",
      subtitle: "Danificado vs. Revitalizado", 
      beforeText: "antes",
      afterText: "depois"
    },
    {
      title: "Bancada de Granito",
      subtitle: "Arranhada vs. Polida",
      beforeText: "antes", 
      afterText: "depois"
    },
    {
      title: "Inox",
      subtitle: "Manchado vs. Reluzente",
      beforeText: "antes",
      afterText: "depois"
    },
    {
      title: "Granilite",
      subtitle: "Desgastado vs. Renovado",
      beforeText: "antes",
      afterText: "depois"
    }
  ]

  return (
    <section id="antes-depois" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 bg-gold-100 text-gold-700 px-4 py-2 rounded-full text-sm font-medium">
            <Eye size={16} />
            <span>Resultados Comprovados</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 animate-slide-up">
            Veja com seus próprios olhos
            <br />o que <span className="gradient-text">podemos fazer</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: '0.1s'}}>
            Cada imagem é um exemplo real do tipo de transformação que você pode ter 
            na sua casa ou empresa.
          </p>
        </div>

        {/* Before/After Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {examples.map((example, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 card-hover animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Image Container */}
              <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200">
                {/* Before/After Overlay */}
                <div className="absolute inset-0 flex">
                  <div className="w-1/2 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center relative">
                    <span className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {example.beforeText}
                    </span>
                    <div className="text-gray-600 text-center">
                      <div className="w-16 h-16 bg-gray-400 rounded-full mx-auto mb-2"></div>
                      <p className="text-xs">Antes</p>
                    </div>
                  </div>
                  <div className="w-1/2 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center relative">
                    <span className="absolute bottom-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {example.afterText}
                    </span>
                    <div className="text-primary-700 text-center">
                      <div className="w-16 h-16 bg-primary-300 rounded-full mx-auto mb-2 shadow-lg"></div>
                      <p className="text-xs font-medium">Depois</p>
                    </div>
                  </div>
                </div>

                {/* Divider Line */}
                <div className="absolute top-0 left-1/2 w-0.5 h-full bg-white transform -translate-x-0.5"></div>
                
                {/* Arrow Indicator */}
                <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 shadow-lg group-hover:scale-110 transition-transform">
                  <ArrowRight size={16} className="text-primary-600" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {example.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {example.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-slide-up" style={{animationDelay: '0.8s'}}>
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Pronto para essa transformação?
            </h3>
            <p className="text-gray-600 mb-6">
              Solicite seu orçamento gratuito e veja como podemos revitalizar seus pisos
            </p>
            <a 
              href="https://wa.me/5571999999999?text=Olá! Vi os resultados antes e depois e gostaria de um orçamento!"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Quero Essa Transformação</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}