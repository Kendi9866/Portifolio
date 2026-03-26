import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  index: number;
}

const ProjectCard = ({ title, description, tags, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-xl bg-card border border-border p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
    >
      {/* Colored top accent */}
      <div className="absolute top-0 left-6 right-6 h-0.5 bg-primary/40 group-hover:bg-primary transition-colors rounded-b" />

      <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
        {description}
      </p>
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
        <button className="flex items-center gap-1.5 text-xs font-body text-muted-foreground hover:text-primary transition-colors">
          <Github className="w-3.5 h-3.5" /> Código
        </button>
        <button className="flex items-center gap-1.5 text-xs font-body text-muted-foreground hover:text-primary transition-colors">
          <ExternalLink className="w-3.5 h-3.5" /> Demo
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
