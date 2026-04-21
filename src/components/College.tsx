import { motion } from "framer-motion";
import { Calendar, GraduationCap } from "lucide-react";

const collegeInfo = {
	faculdade: "Fatec ZL",
	curso: "Desenvolvimento de Software Multiplataforma",
	inicio: "2o semestre de 2023",
	conclusao: "1o semestre de 2026",
};

const College = () => {
	return (
		<section id="formacao" className="py-24">
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
						Faculdade
					</h2>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.5 }}
					className="rounded-xl bg-card border border-border p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
				>
					<div className="grid gap-4 md:grid-cols-2">
						<div className="rounded-lg border border-border/70 bg-secondary/30 p-4">
							<p className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-1">
								Faculdade
							</p>
							<p className="font-body text-sm md:text-base font-medium text-foreground">
								{collegeInfo.faculdade}
							</p>
						</div>

						<div className="rounded-lg border border-border/70 bg-secondary/30 p-4">
							<p className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-1">
								Nome do curso
							</p>
							<p className="font-body text-sm md:text-base font-medium text-foreground">
								{collegeInfo.curso}
							</p>
						</div>

						<div className="rounded-lg border border-border/70 bg-secondary/30 p-4">
							<p className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-1">
								Inicio
							</p>
							<p className="font-body text-sm md:text-base font-medium text-foreground flex items-center gap-1.5">
								<Calendar className="w-4 h-4 text-primary" />
								{collegeInfo.inicio}
							</p>
						</div>

						<div className="rounded-lg border border-border/70 bg-secondary/30 p-4">
							<p className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-1">
								Previsao de conclusao
							</p>
							<p className="font-body text-sm md:text-base font-medium text-foreground flex items-center gap-1.5">
								<Calendar className="w-4 h-4 text-primary" />
								{collegeInfo.conclusao}
							</p>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default College;
