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
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O Que Dizem{" "}
            <span className="bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-light))] bg-clip-text text-transparent">
              Nossas Clientes
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Depoimentos reais de quem confia na BelleClinic
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Card className="border-border/50 shadow-[0_10px_40px_-10px_hsl(var(--gold)/0.2)]">
            <CardContent className="pt-12 pb-12 px-8 md:px-16">
              <div className="flex flex-col items-center text-center">
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[hsl(var(--gold))] text-[hsl(var(--gold))]" />
                  ))}
                </div>
                <p className="text-lg md:text-xl text-foreground/90 mb-6 italic">
                  "{testimonials[current].text}"
                </p>
                <p className="font-semibold text-primary text-lg">
                  {testimonials[current].name}
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === current ? "bg-primary w-8" : "bg-muted"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
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
