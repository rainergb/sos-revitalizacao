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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                <Shield size={16} />
                <span>Nosso Processo</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 animate-slide-right">
                Serviço <span className="gradient-text">limpo, ágil</span>
                <br />e sem dor de cabeça
              </h2>
              
              <p className="text-xl text-gray-600 animate-slide-right" style={{animationDelay: '0.1s'}}>
                Nossa equipe é treinada, pontual e utiliza equipamentos profissionais que 
                garantem brilho sem causar sujeira no ambiente. O resultado aparece nas 
                primeiras horas!
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 animate-slide-right"
                  style={{animationDelay: `${0.2 + index * 0.1}s`}}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex items-center justify-center text-white">
                    {feature.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-gray-900 text-lg">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="animate-slide-right" style={{animationDelay: '0.6s'}}>
              <a 
                href="https://wa.me/5571999999999?text=Olá! Gostaria de saber mais sobre o processo de polimento."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-slide-up" style={{animationDelay: '0.3s'}}>
            <div className="relative">
              {/* Main Image Placeholder */}
              <div className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center text-gray-500 shadow-2xl">
                <div className="text-center space-y-2">
                  <Shield size={48} className="mx-auto text-primary-500" />
                  <p className="font-medium">Processo Profissional</p>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white shadow-lg animate-float">
                <CheckCircle size={32} />
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full flex items-center justify-center text-white shadow-lg animate-float" style={{animationDelay: '1s'}}>
                <Clock size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}