import { motion } from "framer-motion";
import { Database, Layers, Monitor, ServerCog, Wrench } from "lucide-react";

type StackCategory = {
	title: string;
	icon: React.ComponentType<{ className?: string }>;
	items: string[];
};

const stackCategories: StackCategory[] = [
	{
		title: "Front-end",
		icon: Monitor,
		items: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "TailwindCSS"],
	},
	{
		title: "Back-end",
		icon: ServerCog,
		items: ["Node.js", "Express", "Java", "Spring Boot", "Python"],
	},
	{
		title: "Banco de Dados",
		icon: Database,
		items: ["MongoDB", "PostgreSQL", "Oracle Database"],
	},
	{
		title: "Outras Ferramentas",
		icon: Wrench,
		items: ["Git", "GitHub", "Jenkins", "Docker", "Postman"],
	},
];

const Stacks = () => {
	return (
		<section id="stacks" className="py-24">
			<div className="container mx-auto px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="flex items-center gap-3 mb-12"
				>
					<Layers className="w-7 h-7 text-primary" />
					<h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
						Minhas Stacks
					</h2>
				</motion.div>

				<div className="grid gap-6 md:grid-cols-2">
					{stackCategories.map((category, index) => {
						const Icon = category.icon;

						return (
							<motion.div
								key={category.title}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-50px" }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="rounded-xl bg-card border border-border p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
							>
								<div className="flex items-center gap-2 mb-4">
									<Icon className="w-5 h-5 text-primary" />
									<h3 className="font-display text-xl font-semibold text-foreground">
										{category.title}
									</h3>
								</div>
								<div className="flex flex-wrap gap-2">
									{category.items.map((item) => (
										<span
											key={item}
											className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium font-body"
										>
											{item}
										</span>
									))}
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Stacks;
