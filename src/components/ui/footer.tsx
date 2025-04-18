
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-fenix-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-fenix-orange mb-4">FenixHost</h3>
            <p className="text-gray-400">
              Soluciones de hosting profesional para tus juegos y aplicaciones
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                +34 900 123 456
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                info@fenixhost.com
              </li>
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                Madrid, España
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Servidores VPS</li>
              <li>Hosting de Juegos</li>
              <li>Servidores Dedicados</li>
              <li>Dominios</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Términos y Condiciones</li>
              <li>Política de Privacidad</li>
              <li>Política de Cookies</li>
              <li>Aviso Legal</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} FenixHost. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
