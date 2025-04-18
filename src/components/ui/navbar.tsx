
import { Button } from "./button";
import { Globe } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed w-full bg-[#001132]/95 backdrop-blur-md z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img src="/lovable-uploads/0aac822f-2fe3-4495-87cf-aa2f079194ec.png" alt="FenixHost Logo" className="w-8 h-8" />
            <span className="text-white text-xl font-bold">FenixHost</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a className="text-gray-300 hover:text-white transition-colors" href="#minecraft">Minecraft</a>
            <a className="text-gray-300 hover:text-white transition-colors" href="#game-hosting">Game Hosting</a>
            <a className="text-gray-300 hover:text-white transition-colors" href="#vps">VPS Hosting</a>
            <a className="text-gray-300 hover:text-white transition-colors" href="#precios">Precios</a>
            <Button variant="outline" className="border-fenix-orange text-fenix-orange hover:bg-fenix-orange hover:text-white">
              Panel de Cliente
            </Button>
            <Button size="icon" variant="ghost" className="text-gray-300">
              <Globe className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
