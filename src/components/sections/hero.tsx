
import { Button } from "../ui/button";
import { Server, Shield, Gauge, Terminal } from "lucide-react";

export function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-fenix-dark via-fenix-dark/95 to-fenix-orange/20">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Terminal className="text-fenix-orange w-8 h-8" />
            <span className="text-white text-xl font-semibold">FenixHost</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-fenix-orange">
            Hosting de Alto Rendimiento para Gamers
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Servidores optimizados para gaming con protección DDoS y soporte 24/7. Despliega tu servidor en segundos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-fenix-orange hover:bg-fenix-orange/90 text-lg gap-2">
              <Server className="w-5 h-5" />
              Comenzar ahora
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10 text-lg gap-2">
              <Shield className="w-5 h-5" />
              Ver planes
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <Server className="w-12 h-12 text-fenix-orange mb-4 mx-auto" />
              <h3 className="text-white text-xl font-semibold mb-2">Alta Disponibilidad</h3>
              <p className="text-gray-400">Servidores optimizados para máximo rendimiento 24/7</p>
            </div>
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <Gauge className="w-12 h-12 text-fenix-orange mb-4 mx-auto" />
              <h3 className="text-white text-xl font-semibold mb-2">Panel de Control</h3>
              <p className="text-gray-400">Gestiona tus servidores desde cualquier dispositivo</p>
            </div>
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <Shield className="w-12 h-12 text-fenix-orange mb-4 mx-auto" />
              <h3 className="text-white text-xl font-semibold mb-2">Protección DDoS</h3>
              <p className="text-gray-400">Sistema anti-DDoS avanzado incluido sin costo extra</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
