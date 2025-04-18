
import { Shield, Cpu, Network, Zap, Clock, Headphones, Server, Globe } from "lucide-react";

export function FeaturesExpanded() {
  const features = [
    {
      icon: Shield,
      title: "Protección DDoS",
      description: "Filtrado automático de ataques DDoS Layer 4 y 7 en tiempo real"
    },
    {
      icon: Cpu,
      title: "Hardware Premium",
      description: "Procesadores Intel Xeon y AMD EPYC de última generación"
    },
    {
      icon: Network,
      title: "Red Global",
      description: "Múltiples ubicaciones para menor latencia y mejor rendimiento"
    },
    {
      icon: Zap,
      title: "NVMe SSD",
      description: "Almacenamiento ultrarrápido para un rendimiento excepcional"
    },
    {
      icon: Clock,
      title: "Activación Instantánea",
      description: "Tu servidor listo en segundos, sin esperas innecesarias"
    },
    {
      icon: Headphones,
      title: "Soporte 24/7",
      description: "Asistencia técnica experta disponible en todo momento"
    },
    {
      icon: Server,
      title: "Panel de Control",
      description: "Interface intuitiva para gestionar tu servidor fácilmente"
    },
    {
      icon: Globe,
      title: "Conectividad Premium",
      description: "Conexiones de alta velocidad con los mejores proveedores"
    }
  ];

  return (
    <section id="features" className="py-24 bg-[#001132]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Características <span className="text-fenix-orange">Premium</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tecnología de vanguardia para tu servidor
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-fenix-orange/50 transition-colors"
              >
                <Icon className="w-12 h-12 text-fenix-orange mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
