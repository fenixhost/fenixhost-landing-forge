
import { Button } from "./button";

export function Navbar() {
  return (
    <nav className="fixed w-full bg-fenix-dark/90 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-fenix-orange text-2xl font-bold">FenixHost</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a className="text-gray-300 hover:text-white transition-colors" href="#servicios">Servicios</a>
              <a className="text-gray-300 hover:text-white transition-colors" href="#caracteristicas">Características</a>
              <a className="text-gray-300 hover:text-white transition-colors" href="#precios">Precios</a>
              <Button className="bg-fenix-orange hover:bg-fenix-orange/90 text-white">
                Panel de Cliente
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
