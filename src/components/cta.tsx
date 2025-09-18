import { MessageCircle, Phone, Clock } from 'lucide-react'

export default function CTA() {
  return (
    <section
      id="contato"
      className="section-padding bg-gradient-to-r from-yellow-600 to-yellow-500 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      <div className="absolute top-4 right-4 sm:top-10 sm:right-10 w-20 h-20 sm:w-32 sm:h-32 bg-white/10 rounded-full animate-float"></div>
      <div
        className="absolute bottom-8 left-8 sm:bottom-20 sm:left-16 w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container-custom relative z-10">
        <div className="text-center space-y-6 sm:space-y-8">
          {/* Header */}
          <div className="space-y-3 sm:space-y-4 px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white">
              Comece agora sua revitalização
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>com quem é{" "}
              <span className="text-yellow-300">especialista!</span>
            </h2>

            <p className="text-lg sm:text-xl text-yellow-100 max-w-2xl mx-auto">
              Transforme seus pisos com a experiência de mais de 10 anos no
              mercado. Atendimento rápido e gratuito.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
            <a
              href="https://wa.me/557192244171?text=Olá! Gostaria de solicitar um orçamento para polimento de piso."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white hover:bg-gray-50 text-yellow-600 font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-xl shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2 sm:space-x-3 text-sm sm:text-base lg:text-lg group"
            >
              <MessageCircle
                size={20}
                className="sm:w-6 sm:h-6 group-hover:scale-110 transition-transform"
              />
              <span className="text-center">CHAME NO WHATSAPP</span>
            </a>

            <a
              href="tel:+5571999999999"
              className="w-full sm:w-auto border-2 border-white hover:bg-white hover:text-yellow-600 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2 sm:space-x-3 text-sm sm:text-base lg:text-lg group"
            >
              <Phone
                size={20}
                className="sm:w-6 sm:h-6 group-hover:scale-110 transition-transform"
              />
              <span>LIGAR AGORA</span>
            </a>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12 px-4">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Clock size={20} className="text-white sm:w-6 sm:h-6" />
              </div>
              <h3 className="font-bold text-white mb-1 sm:mb-2 text-sm sm:text-base">
                Atendimento Rápido
              </h3>
              <p className="text-yellow-100 text-xs sm:text-sm">
                Resposta em até 30 minutos
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <MessageCircle size={20} className="text-white sm:w-6 sm:h-6" />
              </div>
              <h3 className="font-bold text-white mb-1 sm:mb-2 text-sm sm:text-base">
                Orçamento Gratuito
              </h3>
              <p className="text-yellow-100 text-xs sm:text-sm">
                Sem compromisso ou taxas
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Phone size={20} className="text-white sm:w-6 sm:h-6" />
              </div>
              <h3 className="font-bold text-white mb-1 sm:mb-2 text-sm sm:text-base">
                Suporte Completo
              </h3>
              <p className="text-yellow-100 text-xs sm:text-sm">
                Do orçamento à entrega
              </p>
            </div>
          </div>

          {/* Slogan */}
          <div className="mt-8 sm:mt-12 px-4">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-yellow-300 italic">
              &quot;Seu piso novo de novo — sem sujeira, sem demora.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}