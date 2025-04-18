
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "¿Qué tipos de juegos puedo hostear?",
      answer: "Ofrecemos soporte para una amplia variedad de juegos, incluyendo Minecraft, CS:GO, ARK, Rust y muchos más. Nuestros servidores están optimizados para cada tipo de juego."
    },
    {
      question: "¿Cuánto tarda en activarse mi servidor?",
      answer: "La activación es instantánea. Una vez completado el pago, tu servidor estará disponible en segundos."
    },
    {
      question: "¿Ofrecen protección DDoS?",
      answer: "Sí, todos nuestros servicios incluyen protección DDoS avanzada sin costo adicional, protegiendo tu servidor contra ataques Layer 4 y 7."
    },
    {
      question: "¿Puedo cambiar de plan en cualquier momento?",
      answer: "Sí, puedes actualizar o cambiar tu plan en cualquier momento desde el panel de control, sin perder ninguna configuración."
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos tarjetas de crédito/débito, PayPal, y transferencias bancarias. Todos los pagos son procesados de forma segura."
    },
    {
      question: "¿Tienen período de prueba?",
      answer: "Ofrecemos una garantía de devolución de dinero de 24 horas si no estás satisfecho con nuestro servicio."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-[#001132]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Preguntas <span className="text-fenix-orange">Frecuentes</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Encuentra respuestas a las preguntas más comunes
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-lg border border-white/10"
            >
              <AccordionTrigger className="px-6 text-white hover:text-fenix-orange">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-400">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
