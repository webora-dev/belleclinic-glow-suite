import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    // Aqui seria a integração com backend/email
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-background via-secondary/30 to-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight text-foreground">
            Entre em{" "}
            <span className="bg-gradient-to-r from-[hsl(var(--rose))] to-[hsl(var(--rose-light))] bg-clip-text text-transparent">
              Contato
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground font-light">
            Estamos prontos para atender você e esclarecer todas as suas dúvidas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-4 md:space-y-6">
            <Card className="border-border hover:border-primary/40 transition-all hover:shadow-[0_10px_40px_-10px_hsl(var(--rose)/0.2)] bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-base sm:text-lg">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  Telefone
                </CardTitle>
                <CardDescription className="text-sm sm:text-base pl-13 font-light">
                  (11) 99999-9999
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:border-primary/40 transition-all hover:shadow-[0_10px_40px_-10px_hsl(var(--rose)/0.2)] bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-base sm:text-lg">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  Email
                </CardTitle>
                <CardDescription className="text-sm sm:text-base pl-13 font-light">
                  contato@belleclinic.com.br
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:border-primary/40 transition-all hover:shadow-[0_10px_40px_-10px_hsl(var(--rose)/0.2)] bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-base sm:text-lg">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  Endereço
                </CardTitle>
                <CardDescription className="text-sm sm:text-base pl-13 font-light">
                  Av. Paulista, 1000 - São Paulo, SP
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-border shadow-[0_10px_40px_-10px_hsl(var(--rose)/0.2)] bg-card">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Envie sua mensagem</CardTitle>
              <CardDescription className="text-sm sm:text-base font-light">
                Preencha o formulário e entraremos em contato
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-white border-border focus:border-primary"
                    aria-label="Nome completo"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Seu telefone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-white border-border focus:border-primary"
                    aria-label="Telefone de contato"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Seu e-mail"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-white border-border focus:border-primary"
                    aria-label="Endereço de e-mail"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Sua mensagem"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    required
                    className="bg-white border-border focus:border-primary resize-none"
                    aria-label="Mensagem"
                  />
                </div>
                <Button type="submit" variant="hero" className="w-full" size="lg">
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
