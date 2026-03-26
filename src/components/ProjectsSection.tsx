import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { GraduationCap, Briefcase } from "lucide-react";

const collegeProjects = [
  {
    title: "Sistema de Gestão Acadêmica",
    description: "Aplicação web para gerenciamento de notas, frequência e informações de alunos. Desenvolvido como projeto final de disciplina.",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "App de Delivery",
    description: "Protótipo de aplicativo de delivery com sistema de pedidos, cardápio dinâmico e rastreamento em tempo real.",
    tags: ["React Native", "Firebase", "UX Design"],
  },
  {
    title: "Análise de Dados Climáticos",
    description: "Dashboard interativo para visualização de dados meteorológicos usando técnicas de ciência de dados.",
    tags: ["Python", "Pandas", "Matplotlib"],
  },
];

const workProjects = [
  {
    title: "Portal do Cliente",
    description: "Plataforma interna para acompanhamento de chamados, relatórios e métricas de atendimento ao cliente.",
    tags: ["TypeScript", "React", "API REST"],
  },
  {
    title: "Automação de Relatórios",
    description: "Sistema automatizado para geração de relatórios financeiros mensais, reduzindo tempo de processamento em 80%.",
    tags: ["Python", "Excel", "Automação"],
  },
  {
    title: "Landing Page Institucional",
    description: "Redesign completo do site institucional da empresa com foco em conversão e performance.",
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collegeProjects.map((project, i) => (
              <ProjectCard key={project.title} {...project} index={i} />
            ))}
          </div>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workProjects.map((project, i) => (
              <ProjectCard key={project.title} {...project} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;
