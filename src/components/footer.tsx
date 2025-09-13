import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="section-padding border-b border-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-primary-500 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-xl">S</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">SOS Polimentos</h3>
                  <p className="text-sm text-gray-400">Revitalização Profissional</p>
                </div>
              </div>
              <p className="text-gray-300">
                Mais de 10 anos transformando pisos em Salvador e Região Metropolitana 
                com qualidade e excelência.
              </p>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold">Serviços</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Restauração de Porcelanato</li>
                <li>Polimento de Granito</li>
                <li>Restauração de Mármore</li>
                <li>Polimento de Inox</li>
                <li>Pisos de Madeira</li>
                <li>Bancadas</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold">Contato</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone size={18} className="text-primary-500" />
                  <span className="text-gray-300">(71) 99999-9999</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={18} className="text-primary-500" />
                  <span className="text-gray-300">contato@sospolimentos.com.br</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin size={18} className="text-primary-500 mt-1" />
                  <span className="text-gray-300">
                    Salvador e Região Metropolitana<br />
                    Bahia - Brasil
                  </span>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold">Horário de Atendimento</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Clock size={16} className="text-primary-500" />
                  <span className="text-sm">Segunda a Sexta</span>
                </div>
                <p className="text-sm ml-6">08:00 às 18:00</p>
                
                <div className="flex items-center space-x-2 mt-2">
                  <Clock size={16} className="text-primary-500" />
                  <span className="text-sm">Sábado</span>
                </div>
                <p className="text-sm ml-6">08:00 às 12:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="py-6 bg-gray-950">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 SOS Polimentos. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-primary-500 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary-500 transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}