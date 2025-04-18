import { Button } from "../ui/button";
import { Check, Zap } from "lucide-react";

export function Pricing() {
  return (
    <section id="precios" className="py-24 bg-[#001132]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-fenix-orange">
            Planes Diseñados para Ti
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tus necesidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Plan Básico */}
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 hover:border-fenix-orange/50 transition-colors">
            <h3 className="text-xl font-semibold text-white mb-2">Plan Básico</h3>
            <p className="text-gray-400 mb-4">Perfecto para comenzar</p>
            <div className="text-4xl font-bold text-white mb-6">
              €5<span className="text-lg font-normal text-gray-400">/mes</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-300">
                <Check className="w-5 h-5 text-fenix-orange mr-2" />
                <span>2GB RAM</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Check className="w-5 h-5 text-fenix-orange mr-2" />
                <span>1 vCPU</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Check className="w-5 h-5 text-fenix-orange mr-2" />
                <span>20GB SSD NVMe</span>
              </li>
            </ul>
            <Button className="w-full bg-fenix-orange hover:bg-fenix-orange/90">
              Seleccionar Plan
            </Button>
          </div>

          {/* Plan Pro */}
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-lg p-8 border-2 border-fenix-orange hover:border-fenix-orange/80 transition-colors">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-fenix-orange text-white px-4 py-1 text-sm rounded-full flex items-center gap-1">
              <Zap className="w-4 h-4" />
              Más Popular
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Plan Pro</h3>
            <p className="text-gray-400 mb-4">Para servidores medianos</p>
            <div className="text-4xl font-bold text-white mb-6">
              €15<span className="text-lg font-normal text-gray-400">/mes</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-300">
                <Check className="w-5 h-5 text-fenix-orange mr-2" />
                <span>8GB RAM</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Check className="w-5 h-5 text-fenix-orange mr-2" />
                <span>4 vCPU</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Check className="w-5 h-5 text-fenix-orange mr-2" />
                <span>80GB SSD NVMe</span>
              </li>
            </ul>
            <Button className="w-full bg-fenix-orange hover:bg-fenix-orange/90">
              Seleccionar Plan
            </Button>
          </div>

          {/* Plan Enterprise */}
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 hover:border-fenix-orange/50 transition-colors">
            <h3 className="text-xl font-semibold text-white mb-2">Plan Enterprise</h3>
            <p className="text-gray-400 mb-4">Máximo rendimiento</p>
            <div className="text-4xl font-bold text-white mb-6">
              €30<span className="text-lg font-normal text-gray-400">/mes</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-300">
                <Check className="w-5 h-5 text-fenix-orange mr-2" />
                <span>16GB RAM</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Check className="w-5 h-5 text-fenix-orange mr-2" />
                <span>8 vCPU</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Check className="w-5 h-5 text-fenix-orange mr-2" />
                <span>160GB SSD NVMe</span>
              </li>
            </ul>
            <Button className="w-full bg-fenix-orange hover:bg-fenix-orange/90">
              Seleccionar Plan
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
