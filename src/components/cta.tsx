import { MessageCircle, Phone, Clock } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contato" className="section-padding bg-gradient-to-r from-primary-600 to-primary-500 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 left-16 w-20 h-20 bg-white/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>

      <div className="container-custom relative z-10">
        <div className="text-center space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white animate-slide-up">
              Comece agora sua revitalização
              <br />com quem é <span className="text-gold-300">especialista!</span>
            </h2>
            
            <p className="text-xl text-primary-100 max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '0.1s'}}>
              Transforme seus pisos com a experiência de mais de 10 anos no mercado. 
              Atendimento rápido e gratuito.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <a 
              href="https://wa.me/5571999999999?text=Olá! Gostaria de solicitar um orçamento para polimento de piso."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white hover:bg-gray-50 text-primary-600 font-bold py-4 px-8 rounded-xl shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-3 text-lg group"
            >
              <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
              <span>CHAME NO WHATSAPP AGORA MESMO</span>
            </a>

            <a 
              href="tel:+5571999999999"
              className="w-full sm:w-auto border-2 border-white hover:bg-white hover:text-primary-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-3 text-lg group"
            >
              <Phone size={24} className="group-hover:scale-110 transition-transform" />
              <span>LIGAR AGORA</span>
            </a>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 animate-slide-up" style={{animationDelay: '0.4s'}}>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={24} className="text-white" />
              </div>
              <h3 className="font-bold text-white mb-2">Atendimento Rápido</h3>
              <p className="text-primary-100">Resposta em até 30 minutos</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle size={24} className="text-white" />
              </div>
              <h3 className="font-bold text-white mb-2">Orçamento Gratuito</h3>
              <p className="text-primary-100">Sem compromisso ou taxas</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone size={24} className="text-white" />
              </div>
              <h3 className="font-bold text-white mb-2">Suporte Completo</h3>
              <p className="text-primary-100">Do orçamento à entrega</p>
            </div>
          </div>

          {/* Slogan */}
          <div className="mt-12 animate-slide-up" style={{animationDelay: '0.6s'}}>
            <p className="text-2xl md:text-3xl font-bold text-gold-300 italic">
              &quot;Seu piso novo de novo — sem sujeira, sem demora.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}