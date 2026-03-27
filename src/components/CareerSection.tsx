import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Omni&CO",
    role: "Analista de Sistemas - Estagiário",
    period: "Ago 2024 – Presente",
    location: "São Paulo, SP",
    description:
      "Atuo como Analista de Sistemas Tributários, sendo responsável por atender demandas regulatórias internas e externas, incluindo requisitos do Banco Central (Bacen). Minha função envolve o desenvolvimento e suporte de soluções tecnológicas para garantir a conformidade tributária da empresa, além de colaborar na entrega de projetos estratégicos que asseguram o cumprimento das obrigações legais e regulatórias.",
  },
];

const CareerSection = () => {
  return (
    <section id="carreira" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12"
        >
          <Briefcase className="w-7 h-7 text-primary" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Experiência Profissional
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 md:left-6.5 top-1.5 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />

                <div className="rounded-xl bg-card border border-border p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs font-body text-muted-foreground">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-body text-sm font-medium text-primary">
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-body text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>

                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;