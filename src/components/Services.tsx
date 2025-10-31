import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import facialImage from "@/assets/service-facial.jpg";
import botoxImage from "@/assets/service-botox.jpg";
import laserImage from "@/assets/service-laser.jpg";
import skincareImage from "@/assets/service-skincare.jpg";

const services = [
  {
    title: "Limpeza de Pele",
    description: "Tratamento profundo que remove impurezas, revitalizando e renovando sua pele com técnicas avançadas.",
    image: facialImage,
  },
  {
    title: "Botox e Preenchimentos",
    description: "Procedimentos minimamente invasivos para suavizar rugas e realçar contornos faciais naturalmente.",
    image: botoxImage,
  },
  {
    title: "Depilação a Laser",
    description: "Tecnologia de última geração para remoção definitiva de pelos com conforto e segurança.",
    image: laserImage,
  },
  {
    title: "Skincare Personalizado",
    description: "Protocolos exclusivos desenvolvidos especialmente para as necessidades da sua pele.",
    image: skincareImage,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-background via-secondary/30 to-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Nossos <span className="bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-light))] bg-clip-text text-transparent drop-shadow-[0_0_30px_hsl(var(--gold)/0.2)]">Serviços</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Tratamentos estéticos modernos e personalizados para realçar sua beleza natural
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-[0_10px_40px_-10px_hsl(var(--gold)/0.4)] transition-all duration-300 border-border/30 hover:border-primary/30 overflow-hidden bg-card/50 backdrop-blur-sm"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.title} - Tratamento estético profissional BelleClinic`}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm sm:text-base text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full group-hover:border-primary group-hover:text-primary group-hover:bg-primary/5 transition-all">
                  Agendar Agora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
