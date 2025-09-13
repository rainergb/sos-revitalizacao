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
    <section
      id="antes-depois"
      className="section-padding bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-700 px-3 py-2 sm:px-4 rounded-full text-xs sm:text-sm font-medium">
            <Eye size={14} className="sm:w-4 sm:h-4" />
            <span>Resultados Comprovados</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 px-4">
            Veja com seus próprios olhos
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>o que{" "}
            <span className="gradient-text">podemos fazer</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Cada imagem é um exemplo real do tipo de transformação que você pode
            ter na sua casa ou empresa.
          </p>
        </div>

        {/* Before/After Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {examples.map((example, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 card-hover"
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-56 md:h-64 bg-gradient-to-br from-gray-100 to-gray-200">
                {/* Before/After Overlay */}
                <div className="absolute inset-0 flex">
                  <div className="w-1/2 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center relative">
                    <span className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 bg-black/70 text-white px-2 py-1 sm:px-3 rounded-full text-xs sm:text-sm font-medium">
                      {example.beforeText}
                    </span>
                    <div className="text-gray-600 text-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-400 rounded-full mx-auto mb-1 sm:mb-2"></div>
                      <p className="text-xs">Antes</p>
                    </div>
                  </div>
                  <div className="w-1/2 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center relative">
                    <span className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 bg-blue-600 text-white px-2 py-1 sm:px-3 rounded-full text-xs sm:text-sm font-medium">
                      {example.afterText}
                    </span>
                    <div className="text-blue-700 text-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-300 rounded-full mx-auto mb-1 sm:mb-2 shadow-lg"></div>
                      <p className="text-xs font-medium">Depois</p>
                    </div>
                  </div>
                </div>

                {/* Divider Line */}
                <div className="absolute top-0 left-1/2 w-0.5 h-full bg-white transform -translate-x-0.5"></div>

                {/* Arrow Indicator */}
                <div className="absolute top-1/2 left-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 shadow-lg group-hover:scale-110 transition-transform">
                  <ArrowRight
                    size={14}
                    className="text-blue-600 sm:w-4 sm:h-4"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-blue-600 transition-colors">
                  {example.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  {example.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center px-4">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              Pronto para essa transformação?
            </h3>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
              Solicite seu orçamento gratuito e veja como podemos revitalizar
              seus pisos
            </p>
            <a
              href="https://wa.me/5571999999999?text=Olá! Vi os resultados antes e depois e gostaria de um orçamento!"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center space-x-2 w-full sm:w-auto justify-center"
            >
              <span>Quero Essa Transformação</span>
              <ArrowRight size={16} className="sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}