import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  role: string;
  description: string;
  imageUrl?: string;
  tags: string[];
  links: string[];
  index: number;
}

const ProjectCard = ({ title, role, description, imageUrl, tags, links, index }: ProjectCardProps) => {
  const codeLink = links?.[0];
  const demoLink = links?.[1];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      // h-full garante que o card ocupe toda a altura do container flex do carrossel
      className="group relative rounded-xl bg-card border border-border p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300 flex flex-col h-full" 
    >
      <div className="absolute top-0 left-6 right-6 h-0.5 bg-primary/40 group-hover:bg-primary transition-colors rounded-b" />

      <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>

      <div className="mb-4 overflow-hidden rounded-lg border border-border bg-muted aspect-video w-full flex items-center justify-center">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={`Thumbnail do projeto ${title}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <span className="text-xs text-muted-foreground italic">Imagem em breve</span>
        )}
      </div>

      <div className="mb-2">
        <span className="text-[10px] uppercase tracking-widest font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">
          {role}
        </span>
      </div>

      <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
        {description}
      </p>

      <div className="mt-auto">
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium font-body"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {codeLink && (
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-body text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-3.5 h-3.5" /> Codigo
            </a>
          )}
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-body text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" /> Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;