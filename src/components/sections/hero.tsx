
import { Button } from "../ui/button";
import { ChevronRight, Server, Shield } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

export function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#001132]">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001132]/50 via-transparent to-transparent" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <Carousel className="max-w-5xl mx-auto" opts={{ loop: true }}>
          <CarouselContent>
            <CarouselItem>
              <div className="text-center">
                <div className="flex items-center justify-center gap-4 mb-8">
                  <img src="/lovable-uploads/0aac822f-2fe3-4495-87cf-aa2f079194ec.png" alt="FenixHost Logo" className="w-12 h-12" />
                  <span className="text-white text-2xl font-bold">FenixHost</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Tu Servidor de Juegos<br />
                  <span className="bg-gradient-to-r from-fenix-orange to-yellow-500 bg-clip-text text-transparent">Listo en Segundos</span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Hosting optimizado para gaming con protección DDoS y soporte 24/7
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                  <Button size="lg" className="bg-fenix-orange hover:bg-fenix-orange/90 text-lg gap-2">
                    <Server className="w-5 h-5" />
                    Empezar ahora
                  </Button>
                  <div className="flex items-center gap-2 text-white">
                    <span>Desde</span>
                    <span className="text-2xl font-bold text-fenix-orange">€5</span>
                    <span>/mes</span>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
