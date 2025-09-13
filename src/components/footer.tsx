import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="section-padding border-b border-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Company Info */}
            <div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-lg sm:text-xl">S</span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold">
                    SOS Polimentos
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Revitalização Profissional
                  </p>
                </div>
              </div>
              <p className="text-gray-300 text-sm sm:text-base">
                Mais de 10 anos transformando pisos em Salvador e Região
                Metropolitana com qualidade e excelência.
              </p>
            </div>

            {/* Services */}
            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-base sm:text-lg font-bold">Serviços</h4>
              <ul className="space-y-1 sm:space-y-2 text-gray-300 text-sm sm:text-base">
                <li>Restauração de Porcelanato</li>
                <li>Polimento de Granito</li>
                <li>Restauração de Mármore</li>
                <li>Polimento de Inox</li>
                <li>Pisos de Madeira</li>
                <li>Bancadas</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-base sm:text-lg font-bold">Contato</h4>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Phone size={16} className="text-blue-500 sm:w-5 sm:h-5" />
                  <span className="text-gray-300 text-sm sm:text-base">
                    (71) 99999-9999
                  </span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Mail size={16} className="text-blue-500 sm:w-5 sm:h-5" />
                  <span className="text-gray-300 text-sm sm:text-base break-all">
                    contato@sospolimentos.com.br
                  </span>
                </div>
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <MapPin
                    size={16}
                    className="text-blue-500 mt-1 sm:w-5 sm:h-5"
                  />
                  <span className="text-gray-300 text-sm sm:text-base">
                    Salvador e Região Metropolitana
                    <br />
                    Bahia - Brasil
                  </span>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-base sm:text-lg font-bold">
                Horário de Atendimento
              </h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Clock size={14} className="text-blue-500 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm">Segunda a Sexta</span>
                </div>
                <p className="text-xs sm:text-sm ml-5 sm:ml-6">
                  08:00 às 18:00
                </p>

                <div className="flex items-center space-x-2 mt-2">
                  <Clock size={14} className="text-blue-500 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm">Sábado</span>
                </div>
                <p className="text-xs sm:text-sm ml-5 sm:ml-6">
                  08:00 às 12:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="py-4 sm:py-6 bg-gray-950">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0 text-center sm:text-left">
            <div className="text-xs sm:text-sm text-gray-400">
              © 2024 SOS Polimentos. Todos os direitos reservados.
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-xs sm:text-sm text-gray-400">
              <a href="#" className="hover:text-blue-500 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}