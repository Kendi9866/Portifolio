import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const contactItems = [
  { icon: Mail, label: "kendigabriel29@gmail.com", href: "mailto:kendigabriel29@gmail.com" },
  { icon: Linkedin, label: "www.linkedin.com/in/gabrielkendi", href: "www.linkedin.com/in/gabrielkendi" },
  { icon: Github, label: "https://github.com/Kendi9866", href: "https://github.com/Kendi9866" },
  { icon: MapPin, label: "São Paulo, São Paulo", href: "#" },
];

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Vamos conversar<span className="text-primary">?</span>
          </h2>
          <p className="font-body text-muted-foreground mb-12">
            Estou aberto a oportunidades, colaborações e novas conexões. Entre em contato!
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {contactItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl border border-border bg-background hover:border-primary/40 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-body text-sm text-foreground">{item.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border text-center">
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} — Feito com dedicação
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
