
import { Shield, Gauge, Clock, HeartHandshake, Cpu, Network, Lock, Zap } from "lucide-react";

export function Features() {
  return (
    <section id="caracteristicas" className="py-24 bg-gradient-to-b from-fenix-dark to-fenix-dark/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-fenix-orange">
            Tecnología de Vanguardia
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Infraestructura de última generación para tu servidor de juegos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-fenix-orange/50 transition-colors">
            <Shield className="w-12 h-12 text-fenix-orange mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-white mb-2">Protección DDoS</h3>
            <p className="text-gray-400">Filtrado automático de ataques DDoS Layer 4 y 7</p>
          </div>
          
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-fenix-orange/50 transition-colors">
            <Cpu className="w-12 h-12 text-fenix-orange mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-white mb-2">Hardware Premium</h3>
            <p className="text-gray-400">Procesadores Intel Xeon y AMD EPYC de última generación</p>
          </div>

          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-fenix-orange/50 transition-colors">
            <Network className="w-12 h-12 text-fenix-orange mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-white mb-2">Red Global</h3>
            <p className="text-gray-400">Múltiples ubicaciones para menor latencia</p>
          </div>

          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-fenix-orange/50 transition-colors">
            <Zap className="w-12 h-12 text-fenix-orange mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-white mb-2">NVMe SSD</h3>
            <p className="text-gray-400">Almacenamiento ultrarrápido para mejor rendimiento</p>
          </div>
        </div>
      </div>
    </section>
  );
}
