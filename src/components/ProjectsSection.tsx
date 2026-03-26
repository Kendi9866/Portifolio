import { useRef } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { GraduationCap, Briefcase, ChevronLeft, ChevronRight } from "lucide-react";

// Componente para a lista com scroll
const ProjectCarousel = ({ projects }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" 
        ? scrollLeft - clientWidth 
        : scrollLeft + clientWidth;
      
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="relative group">
      {/* Botão Esquerdo */}
      <button
        onClick={() => scroll("left")}
        className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border border-border p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-6 h-6 text-primary" />
      </button>

      {/* Container de Scroll */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory py-4 px-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projects.map((project, i) => (
          <div key={project.title} className="min-w-[300px] md:min-w-[350px] lg:min-w-[400px] snap-start">
            <ProjectCard {...project} index={i} />
          </div>
        ))}
      </div>

      {/* Botão Direito */}
      <button
        onClick={() => scroll("right")}
        className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border border-border p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
        aria-label="Próximo"
      >
        <ChevronRight className="w-6 h-6 text-primary" />
      </button>
    </div>
  );
};

const collegeProjects = [
  // ... seus dados de faculdade
  {
    title: "Sistema de Gestão Acadêmica",
    description: "Aplicação web para gerenciamento de notas, frequência e informações de alunos.",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "App de Delivery",
    description: "Protótipo de aplicativo de delivery com sistema de pedidos e cardápio dinâmico.",
    tags: ["React Native", "Firebase", "UX Design"],
  },
  {
    title: "Análise de Dados Climáticos",
    description: "Dashboard interativo para visualização de dados meteorológicos.",
    tags: ["Python", "Pandas", "Matplotlib"],
  },
  // Adicione mais para testar o scroll
  {
    title: "Novo Projeto 1",
    description: "Descrição de exemplo para testar o botão lateral.",
    tags: ["Next.js", "Tailwind"],
  },
];

const workProjects = [
  // ... seus dados profissionais
  {
    title: "Portal do Cliente",
    description: "Plataforma interna para acompanhamento de chamados e métricas.",
    tags: ["TypeScript", "React", "API REST"],
  },
  {
    title: "Automação de Relatórios",
    description: "Sistema automatizado para geração de relatórios financeiros.",
    tags: ["Python", "Excel", "Automação"],
  },
  {
    title: "Landing Page Institucional",
    description: "Redesign completo do site institucional da empresa.",
    tags: ["Next.js", "Tailwind", "SEO"],
  },
];

const ProjectsSection = () => {
  return (
    <>
      {/* College Projects */}
      <section id="faculdade" className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-12"
          >
            <GraduationCap className="w-7 h-7 text-primary" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Projetos de Faculdade
            </h2>
          </motion.div>

          <ProjectCarousel projects={collegeProjects} />
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-6">
        <div className="h-px bg-border" />
      </div>

      {/* Work Projects */}
      <section id="trabalho" className="py-24">
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
              Projetos Profissionais
            </h2>
          </motion.div>

          <ProjectCarousel projects={workProjects} />
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;