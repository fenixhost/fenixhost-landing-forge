
import { Shield, Gauge, Clock, HeartHandshake } from "lucide-react";

export function Features() {
  return (
    <section id="caracteristicas" className="py-24 bg-fenix-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-fenix-dark mb-4">
            Por qué elegir FenixHost
          </h2>
          <p className="text-fenix-gray text-lg max-w-2xl mx-auto">
            Nos dedicamos a ofrecer la mejor experiencia en hosting de juegos y VPS
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6">
            <Shield className="w-12 h-12 text-fenix-orange mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-fenix-dark mb-2">Protección DDoS</h3>
            <p className="text-fenix-gray">Protección avanzada contra ataques DDoS 24/7</p>
          </div>
          
          <div className="text-center p-6">
            <Gauge className="w-12 h-12 text-fenix-orange mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-fenix-dark mb-2">Alto Rendimiento</h3>
            <p className="text-fenix-gray">Hardware de última generación para máxima velocidad</p>
          </div>

          <div className="text-center p-6">
            <Clock className="w-12 h-12 text-fenix-orange mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-fenix-dark mb-2">Uptime 99.9%</h3>
            <p className="text-fenix-gray">Garantizamos la disponibilidad de tu servidor</p>
          </div>

          <div className="text-center p-6">
            <HeartHandshake className="w-12 h-12 text-fenix-orange mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-fenix-dark mb-2">Soporte 24/7</h3>
            <p className="text-fenix-gray">Equipo técnico disponible en todo momento</p>
          </div>
        </div>
      </div>
    </section>
  );
}
