import { motion } from "framer-motion";
import { Camera } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-20 hidden lg:block" />
      <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="container mx-auto px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="font-body text-sm font-semibold tracking-widest uppercase text-primary mb-4">
              Olá, eu sou
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground leading-tight mb-6">
              Gabriel Kendi<span className="text-primary">.</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-md leading-relaxed mb-8">
              Estudante de Desenvolvimento de Software Multiplataforma apaixonado por tecnologia e desenvolvimento. 
              Aqui você encontra meus projetos acadêmicos e profissionais.
            </p>
            <div className="flex gap-4">
              <a
                href="#faculdade"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-body font-medium text-sm hover:bg-primary/90 transition-colors"
              >
                Ver Projetos
              </a>
              <a
                href="#contato"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-border text-foreground font-body font-medium text-sm hover:bg-secondary transition-colors"
              >
                Contato
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-2xl bg-secondary border-2 border-border flex flex-col items-center justify-center gap-4 overflow-hidden">
                <Camera className="w-12 h-12 text-muted-foreground" />
                <p className="font-body text-sm text-muted-foreground">Sua foto aqui</p>
              </div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 md:w-96 md:h-96 rounded-2xl border-2 border-primary/30 -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
