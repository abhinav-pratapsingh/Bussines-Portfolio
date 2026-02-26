import { motion } from "framer-motion";

const projects = [
  {
    title: "Ecommerce MERN Platform",
    description: "Built high-conversion storefront with role-based admin and analytics-ready event tracking.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "SEO Revamp for SaaS",
    description: "Improved technical SEO, schema, and page speed to grow organic traffic and conversions.",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Analytics Command Center",
    description: "Unified product and marketing metrics into interactive dashboards for rapid decisions.",
    image: "https://images.unsplash.com/photo-1551281044-8b7f35f2f3f5?auto=format&fit=crop&w=900&q=80",
  },
];

export default function ProjectsSection() {
  return (
    <section className="section">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="project-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
          >
            <img src={project.image} alt={project.title} loading="lazy" />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
