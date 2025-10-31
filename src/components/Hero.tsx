import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="BelleClinic - Clínica de Estética Premium em São Paulo - Tratamentos Faciais e Corporais de Excelência"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/50" />
        <div className="absolute inset-0" style={{ boxShadow: 'inset 0 0 100px hsl(var(--rose) / 0.1)' }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 max-w-7xl">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-1000 text-foreground">
            Realce Sua{" "}
            <span className="bg-gradient-to-r from-[hsl(var(--rose))] to-[hsl(var(--rose-light))] bg-clip-text text-transparent">
              Beleza Natural
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200 font-light">
            Tratamentos estéticos de excelência com tecnologia de ponta e profissionais especializados
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Button variant="hero" size="xl" className="group w-full sm:w-auto">
              Agendar Consulta
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="w-full sm:w-auto">
              Nossos Serviços
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/50 to-transparent z-10" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[hsl(var(--rose))] opacity-10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[hsl(var(--gold-soft))] opacity-10 blur-[100px] rounded-full pointer-events-none" />
    </section>
  );
};

export default Hero;
