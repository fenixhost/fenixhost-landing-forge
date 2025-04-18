
import { Button } from "../ui/button";
import { Check } from "lucide-react";

export function Pricing() {
  return (
    <section id="precios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-fenix-dark mb-4">
            Planes y Precios
          </h2>
          <p className="text-fenix-gray text-lg max-w-2xl mx-auto">
            Planes flexibles que se adaptan a tus necesidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Plan Básico */}
          <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-fenix-dark mb-2">Plan Básico</h3>
            <p className="text-fenix-gray mb-4">Perfecto para comenzar</p>
            <div className="text-4xl font-bold text-fenix-dark mb-6">
              €5<span className="text-lg font-normal text-fenix-gray">/mes</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-fenix-orange mr-2" />
                <span>2GB RAM</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-fenix-orange mr-2" />
                <span>1 vCPU</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-fenix-orange mr-2" />
                <span>20GB SSD NVMe</span>
              </li>
            </ul>
            <Button className="w-full bg-fenix-orange hover:bg-fenix-orange/90">
              Seleccionar Plan
            </Button>
          </div>

          {/* Plan Pro */}
          <div className="border-2 border-fenix-orange rounded-lg p-8 hover:shadow-lg transition-shadow relative">
            <div className="absolute top-0 right-0 bg-fenix-orange text-white px-4 py-1 text-sm rounded-bl-lg rounded-tr-lg">
              Más Popular
            </div>
            <h3 className="text-xl font-semibold text-fenix-dark mb-2">Plan Pro</h3>
            <p className="text-fenix-gray mb-4">Para servidores medianos</p>
            <div className="text-4xl font-bold text-fenix-dark mb-6">
              €15<span className="text-lg font-normal text-fenix-gray">/mes</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-fenix-orange mr-2" />
                <span>8GB RAM</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-fenix-orange mr-2" />
                <span>4 vCPU</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-fenix-orange mr-2" />
                <span>80GB SSD NVMe</span>
              </li>
            </ul>
            <Button className="w-full bg-fenix-orange hover:bg-fenix-orange/90">
              Seleccionar Plan
            </Button>
          </div>

          {/* Plan Enterprise */}
          <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-fenix-dark mb-2">Plan Enterprise</h3>
            <p className="text-fenix-gray mb-4">Máximo rendimiento</p>
            <div className="text-4xl font-bold text-fenix-dark mb-6">
              €30<span className="text-lg font-normal text-fenix-gray">/mes</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Check className="w-5 h-5 text-fenix-orange mr-2" />
                <span>16GB RAM</span>
              </li>
              <li className="flex items-center">
                <Check className="w-5 h-5 text-fenix-orange mr-2" />
                <span>8 vCPU</span>
              </li>
              <li className="flex items-center">
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
