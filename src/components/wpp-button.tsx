import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5571999999999?text=Olá! Vim pelo site e gostaria de solicitar um orçamento para polimento de piso."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-110 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle
        size={24}
        className="sm:w-7 sm:h-7 group-hover:scale-110 transition-transform"
      />

      {/* Tooltip - Only show on desktop */}
      <div className="hidden sm:block absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Fale conosco no WhatsApp
        <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
      </div>

      {/* Pulse Animation */}
      <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"></div>
    </a>
  );
}