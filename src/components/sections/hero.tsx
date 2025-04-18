
import { Button } from "../ui/button";
import { ChevronRight, Server, Shield, Sparkles, Zap } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

export function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#001132]">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001132]/50 via-transparent to-transparent" />
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-4 top-1/4 w-24 h-24 bg-fenix-orange/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute right-1/4 top-1/3 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-700" />
          <div className="absolute left-1/3 bottom-1/4 w-28 h-28 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000" />
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <Carousel className="max-w-5xl mx-auto" opts={{ loop: true, align: "start" }}>
          <CarouselContent>
            <CarouselItem>
              <div className="text-center space-y-8">
                {/* Animated logo section */}
                <div 
                  className="flex items-center justify-center gap-4 mb-8 animate-fade-in"
                >
                  <div className="relative">
                    <img 
                      src="/lovable-uploads/0aac822f-2fe3-4495-87cf-aa2f079194ec.png" 
                      alt="FenixHost Logo" 
                      className="w-16 h-16 relative z-10 animate-scale-in" 
                    />
                    <div className="absolute inset-0 bg-fenix-orange/20 rounded-full blur-lg animate-pulse" />
                  </div>
                  <span className="text-white text-3xl font-bold tracking-tight hover:text-fenix-orange transition-colors">
                    FenixHost
                  </span>
                </div>
                
                {/* Enhanced title section */}
                <h1 className="relative text-4xl md:text-7xl font-bold text-white mb-6 animate-fade-in opacity-0" style={{ animationDelay: "200ms" }}>
                  Tu Servidor de Juegos
                  <br />
                  <div className="relative inline-block">
                    <span className="relative z-10 bg-gradient-to-r from-fenix-orange to-yellow-500 bg-clip-text text-transparent">
                      Listo en Segundos
                    </span>
                    <Sparkles className="absolute -right-12 -top-1 w-8 h-8 text-yellow-400 animate-bounce" />
                  </div>
                </h1>
                
                {/* Enhanced subtitle */}
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: "400ms" }}>
                  Hosting optimizado para gaming con 
                  <span className="relative inline-flex items-center mx-2">
                    protección DDoS
                    <Shield className="w-5 h-5 ml-1 text-fenix-orange animate-pulse" />
                  </span>
                  y soporte 24/7
                </p>
                
                {/* Enhanced CTA section */}
                <div 
                  className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in opacity-0"
                  style={{ animationDelay: "600ms" }}
                >
                  <Button 
                    size="lg" 
                    className="bg-fenix-orange hover:bg-fenix-orange/90 text-lg gap-2 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-transparent transform -skew-x-12 transition-transform group-hover:translate-x-full" />
                    <Server className="w-5 h-5 animate-bounce" />
                    <span>Empezar ahora</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  <div className="flex items-center gap-3 text-white bg-white/5 rounded-full px-6 py-3 backdrop-blur-sm border border-white/10">
                    <span>Desde</span>
                    <div className="relative">
                      <span className="text-3xl font-bold text-fenix-orange">€5</span>
                      <Zap className="absolute -right-4 -top-4 w-4 h-4 text-yellow-400 animate-pulse" />
                    </div>
                    <span>/mes</span>
                  </div>
                </div>

                {/* Server stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: "800ms" }}>
                  {[
                    { label: "Uptime", value: "99.9%" },
                    { label: "Latencia", value: "<20ms" },
                    { label: "Protección", value: "Anti-DDoS" },
                    { label: "Soporte", value: "24/7" }
                  ].map((stat, index) => (
                    <div 
                      key={stat.label}
                      className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-fenix-orange/50 transition-colors"
                    >
                      <div className="text-2xl font-bold text-fenix-orange">{stat.value}</div>
                      <div className="text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
