
import { Button } from "../ui/button";
import { Server, Gamepad2, Cpu } from "lucide-react";

export function Hero() {
  return (
    <div className="relative min-h-screen bg-fenix-dark overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-fenix-dark via-fenix-dark to-fenix-orange/20" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Potencia tu servidor de juegos con{" "}
            <span className="text-fenix-orange">FenixHost</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Servidores VPS optimizados y hosting de juegos con el mejor rendimiento y soporte 24/7
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-fenix-orange hover:bg-fenix-orange/90">
              Comenzar ahora
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Ver planes
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Server className="w-12 h-12 text-fenix-orange mb-4 mx-auto" />
              <h3 className="text-white text-xl font-semibold mb-2">VPS de Alto Rendimiento</h3>
              <p className="text-gray-300">Servidores virtuales optimizados para máxima velocidad</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Gamepad2 className="w-12 h-12 text-fenix-orange mb-4 mx-auto" />
              <h3 className="text-white text-xl font-semibold mb-2">Servidores de Juegos</h3>
              <p className="text-gray-300">Instalación con un clic para tus juegos favoritos</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Cpu className="w-12 h-12 text-fenix-orange mb-4 mx-auto" />
              <h3 className="text-white text-xl font-semibold mb-2">Hardware Premium</h3>
              <p className="text-gray-300">Procesadores de última generación y SSD NVMe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
