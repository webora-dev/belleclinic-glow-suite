import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const images = [
  { id: 1, src: gallery1, alt: "Resultado de tratamento facial profissional - BelleClinic São Paulo" },
  { id: 2, src: gallery2, alt: "Antes e depois rejuvenescimento facial - Tratamento estético premium" },
  { id: 3, src: gallery3, alt: "Tratamento de pele avançado - Resultados visíveis BelleClinic" },
  { id: 4, src: gallery4, alt: "Resultado skincare personalizado - Clínica de estética BelleClinic" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-background to-secondary/20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Resultados{" "}
            <span className="bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-light))] bg-clip-text text-transparent drop-shadow-[0_0_30px_hsl(var(--gold)/0.2)]">
              Transformadores
            </span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Veja os resultados reais dos nossos tratamentos
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer shadow-[0_4px_20px_-4px_hsl(var(--background)/0.8)] hover:shadow-[0_10px_40px_-10px_hsl(var(--gold)/0.5)] transition-all duration-300 border border-border/20 hover:border-primary/40"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-foreground">
                  <p className="font-medium text-primary">Ver detalhes</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal para imagem ampliada */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[95vw] sm:max-w-4xl p-0 overflow-hidden bg-transparent border-0">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 z-50 w-10 h-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors border border-primary/20"
            aria-label="Fechar imagem ampliada"
          >
            <X className="w-5 h-5" />
          </button>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Resultado de tratamento estético - Imagem ampliada"
              className="w-full h-auto rounded-lg max-h-[90vh] object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
