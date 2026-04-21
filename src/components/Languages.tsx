import { motion } from "framer-motion";
import { Languages as LanguagesIcon } from "lucide-react";

const Languages = () => {
  return (
    <section id="idiomas" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-12">
          <LanguagesIcon className="w-7 h-7 text-primary" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Idiomas
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="rounded-xl bg-card border border-border p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
        >
          <div className="flex items-center gap-2 mb-4">
					  <LanguagesIcon className="w-5 h-5 text-primary" />
					  <h3 className="font-display text-xl font-semibold text-foreground">
							 Idiomas
					   </h3>
				  </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium font-body">
              Portugues (Nativo)
            </span>
            <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium font-body">
              Ingles (Avancado)
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Languages;
