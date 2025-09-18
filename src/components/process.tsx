import { CheckCircle, Clock, Shield, Users } from 'lucide-react'

export default function Process() {
  const features = [
    {
      icon: <Clock size={24} />,
      title: "Atendimento Rápido",
      description: "Resposta em até 30 minutos"
    },
    {
      icon: <Shield size={24} />,
      title: "Sem Sujeira",
      description: "Equipamentos profissionais e limpeza garantida"
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Resultado Visível",
      description: "Transformação no mesmo dia"
    },
    {
      icon: <Users size={24} />,
      title: "Equipe Especializada",
      description: "Profissionais treinados e experientes"
    }
  ]

  return (
    <section id="processo" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-700 px-3 py-2 sm:px-4 rounded-full text-xs sm:text-sm font-medium">
                <Shield size={14} className="sm:w-4 sm:h-4" />
                <span>Nosso Processo</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800">
                Serviço <span className="gradient-text">limpo, ágil</span>
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>e sem dor de cabeça
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-gray-600">
                Nossa equipe é treinada, pontual e utiliza equipamentos
                profissionais que garantem brilho sem causar sujeira no
                ambiente. O resultado aparece nas primeiras horas!
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4 sm:space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 sm:space-x-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg flex items-center justify-center text-white">
                    <div className="scale-75 sm:scale-100">{feature.icon}</div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-slate-800 text-base sm:text-lg">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-2">
              <a
                href="https://wa.me/557192244171?text=Olá! Gostaria de saber mais sobre o processo de polimento."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto inline-flex justify-center"
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>

          {/* Visual */}
          <div className="relative mt-8 lg:mt-0 order-first lg:order-last">
            <div className="relative">
              {/* Main Image */}
              <div
                className="w-full h-64 sm:h-80 lg:h-96 rounded-2xl shadow-2xl relative overflow-hidden"
                style={{
                  backgroundImage: "url('/piso-2.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat"
                }}
              >
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-black/40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white space-y-2 text-center">
                    <Shield
                      size={32}
                      className="mx-auto text-yellow-400 sm:w-12 sm:h-12 drop-shadow-lg"
                    />
                    <p className="font-bold text-sm sm:text-base drop-shadow-lg">
                      Processo Profissional
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center text-white shadow-lg animate-float">
                <CheckCircle
                  size={20}
                  className="sm:w-6 sm:h-6 lg:w-8 lg:h-8"
                />
              </div>

              <div
                className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center text-white shadow-lg animate-float"
                style={{ animationDelay: "1s" }}
              >
                <Clock size={16} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}