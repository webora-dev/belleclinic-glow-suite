import { Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 max-w-7xl">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-light))] bg-clip-text text-transparent mb-4 drop-shadow-[0_0_20px_hsl(var(--gold)/0.2)]">
              BelleClinic
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Clínica de estética especializada em tratamentos de excelência para realçar sua beleza natural.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="/#services" className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base" aria-label="Ver Serviços">
                  Serviços
                </a>
              </li>
              <li>
                <a href="/#gallery" className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base" aria-label="Ver Galeria">
                  Galeria
                </a>
              </li>
              <li>
                <a href="/#testimonials" className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base" aria-label="Ver Depoimentos">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base" aria-label="Ver Contato">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/belleclinic"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_hsl(var(--gold)/0.4)] transition-all duration-300 border border-primary/20"
                aria-label="Instagram BelleClinic"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/belleclinic"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_hsl(var(--gold)/0.4)] transition-all duration-300 border border-primary/20"
                aria-label="Facebook BelleClinic"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/belleclinic"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_hsl(var(--gold)/0.4)] transition-all duration-300 border border-primary/20"
                aria-label="YouTube BelleClinic"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/30 mt-8 pt-8 text-center text-muted-foreground text-xs sm:text-sm">
          <p>&copy; {new Date().getFullYear()} Webora. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
