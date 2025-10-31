import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Maria Silva",
    text: "Experiência incrível! Os profissionais são super atenciosos e os resultados superaram minhas expectativas. Minha pele nunca esteve tão radiante!",
    rating: 5,
  },
  {
    name: "Ana Costa",
    text: "O melhor investimento que fiz em mim mesma. A clínica é linda e o atendimento impecável. Recomendo de olhos fechados!",
    rating: 5,
  },
  {
    name: "Julia Santos",
    text: "Profissionais extremamente qualificados e um ambiente acolhedor. Me sinto sempre muito bem cuidada. Simplesmente amo!",
    rating: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-background to-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight text-foreground">
            O Que Dizem{" "}
            <span className="bg-gradient-to-r from-[hsl(var(--rose))] to-[hsl(var(--rose-light))] bg-clip-text text-transparent">
              Nossas Clientes
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground font-light">
            Depoimentos reais de quem confia na BelleClinic
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Card className="border-border shadow-[0_10px_40px_-10px_hsl(var(--rose)/0.2)] bg-card">
            <CardContent className="pt-8 sm:pt-12 pb-8 sm:pb-12 px-6 sm:px-12 md:px-16">
              <div className="flex flex-col items-center text-center">
                <div className="flex gap-1 mb-4 sm:mb-6">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[hsl(var(--rose))] text-[hsl(var(--rose))]" />
                  ))}
                </div>
                <p className="text-base sm:text-lg md:text-xl text-foreground/90 mb-4 sm:mb-6 italic leading-relaxed font-light">
                  "{testimonials[current].text}"
                </p>
                <p className="font-semibold text-primary text-base sm:text-lg">
                  {testimonials[current].name}
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full hover:bg-primary hover:text-white hover:border-primary transition-all border-border"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === current ? "bg-primary w-8" : "bg-muted w-2"
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full hover:bg-primary hover:text-white hover:border-primary transition-all border-border"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
