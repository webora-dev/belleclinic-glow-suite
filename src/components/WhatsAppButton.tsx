import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const phoneNumber = "5511999999999"; // Número da clínica
  const message = "Olá, quero agendar um horário na BelleClinic 💆‍♀️";

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Button
      onClick={handleClick}
      variant="hero"
      size="icon"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-[0_10px_40px_-10px_hsl(var(--gold)/0.6)] hover:scale-110 hover:shadow-[0_15px_50px_-10px_hsl(var(--gold)/0.8)] transition-all duration-300 z-50 animate-in fade-in slide-in-from-bottom-4"
      aria-label="Agendar via WhatsApp"
    >
      <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
    </Button>
  );
};

export default WhatsAppButton;
