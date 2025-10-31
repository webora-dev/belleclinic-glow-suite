import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Serviços", path: "/#services" },
    { name: "Galeria", path: "/#gallery" },
    { name: "Depoimentos", path: "/#testimonials" },
    { name: "Contato", path: "/#contact" },
  ];

  const handleNavClick = (path: string) => {
    setIsOpen(false);
    if (path.includes("#")) {
      const section = path.split("#")[1];
      setTimeout(() => {
        const element = document.getElementById(section);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/98 backdrop-blur-md shadow-[0_4px_20px_-4px_hsl(var(--gold)/0.2)] border-b border-border/30" : "bg-background/30 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-light))] bg-clip-text text-transparent drop-shadow-[0_0_20px_hsl(var(--gold)/0.3)]" aria-label="BelleClinic - Página Inicial">
            BelleClinic
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => {
                  if (link.path.includes("#")) {
                    e.preventDefault();
                    handleNavClick(link.path);
                  }
                }}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium text-sm lg:text-base relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {link.name}
              </a>
            ))}
            <Button variant="hero" size="default" className="shadow-[0_0_20px_hsl(var(--gold)/0.3)]">
              Agendar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2 hover:text-primary transition-colors"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-in fade-in slide-in-from-top-4 duration-300 border-t border-border/20 mt-2 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={(e) => {
                    if (link.path.includes("#")) {
                      e.preventDefault();
                      handleNavClick(link.path);
                    } else {
                      setIsOpen(false);
                    }
                  }}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium py-2 px-4 rounded-md hover:bg-primary/5"
                >
                  {link.name}
                </a>
              ))}
              <Button variant="hero" size="default" className="w-full shadow-[0_0_20px_hsl(var(--gold)/0.3)]">
                Agendar
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
