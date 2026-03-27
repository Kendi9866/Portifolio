import { useRef } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { GraduationCap, Briefcase, ChevronLeft, ChevronRight } from "lucide-react";

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
  {
    title: "Site para cursos de libras",
    description: "Site para cursos de libras com foco em ser apenas uma landing page.",
    tags: ["React", "NodeJS"],
    links: [""]
  },
  {
    title: "Krusty Burguer",
    description: "Sistema de hamburgueria onde você pode fazer pedidos pelo proprio site.",
    tags: ["Handlebars", "NodeJS", "PostgreSQL"],
    links: ["https://github.com/Kendi9866/Krusty-Burger-2sem"]
  },
  {
    title: "Go.Planner",
    description: "Planejador de viagens onde é possível chamar seus convidados dentro do site.",
    tags: ["React", "NodeJS", "MongoDB"],
    links: ["https://github.com/Kendi9866/go-planner-3sem"]
  },
  {
    title: "Site arrematador de leilões",
    description: "Arrematador de leilões centralizando dados dos grandes bancos em apenas um site.",
    tags: ["Next.js", "Python", "MongoDB"],
    links: ["https://github.com/Kendi9866/PI-Motor-de-Busca-4-sem"]
  },
  {
    title: "Go.Planner APP",
    description: "Planejador de viagens onde é possível chamar seus convidados para a versão mobile!",
    tags: ["React Native", "Spring Boot 3", "MongoDB"],
    links: ["https://github.com/Bonde-do-tigrinho/Go-Planner-Java"]
  },
];

const ProjectsSection = () => {
  return (
    <>
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
              Meus Projetos
            </h2>
          </motion.div>

          <ProjectCarousel projects={collegeProjects} />
        </div>
      </section>

    </>
  );
};

export default ProjectsSection;