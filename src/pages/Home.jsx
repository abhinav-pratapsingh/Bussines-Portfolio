import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProjectsSection from "../components/ProjectsSection";
import TeamSection from "../components/TeamSection";

const stats = [
  { value: "120+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "2.8x", label: "Avg. Traffic Growth" },
  { value: "24/7", label: "Debug Support" },
];

const highlights = [
  {
    title: "Business-First Product Build",
    text: "We build MERN products around conversion funnels, not just code delivery.",
  },
  {
    title: "SEO + Performance Together",
    text: "Technical SEO, Core Web Vitals, and content structure are integrated from day one.",
  },
  {
    title: "Data-Led Decisions",
    text: "Analytics dashboards show what is working so growth and retention become predictable.",
  },
];

const process = ["Discover", "Design & Develop", "Launch", "Optimize"];

const testimonials = [
  {
    quote:
      "Our website now loads in under 2 seconds and inbound leads doubled within 3 months.",
    name: "Ritika S.",
    role: "Founder, Retail Brand",
  },
  {
    quote:
      "The team transformed scattered data into one dashboard that guides every weekly decision.",
    name: "Jason M.",
    role: "Operations Lead, SaaS Startup",
  },
];

const industries = [
  "Ecommerce",
  "Education",
  "Healthcare",
  "Real Estate",
  "SaaS",
  "Local Business",
];

const faqs = [
  {
    q: "How long does a business website project take?",
    a: "Most websites are delivered in 3 to 6 weeks based on features, integrations, and content readiness.",
  },
  {
    q: "Do you provide SEO after launch?",
    a: "Yes. We offer technical SEO, keyword planning, and monthly optimization reports post launch.",
  },
  {
    q: "Can you improve an existing MERN project?",
    a: "Yes. We audit code quality, fix bottlenecks, improve UX, and stabilize production issues.",
  },
];

export default function Home() {
  return (
    <div>
      <section className="hero">
        <div className="mesh" />
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Build Better Digital Business With MERN + Data Intelligence
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.7 }}
        >
          We design, develop, optimize, and scale websites with modern UX, SEO
          strategy, analytics insights, and precision debugging.
        </motion.p>
        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link to="/services" className="btn btn-primary">
            Explore Services
          </Link>
          <Link to="/contact-us" className="btn btn-secondary">
            Start Your Project
          </Link>
        </motion.div>
        <div className="stat-grid">
          {stats.map((item) => (
            <article key={item.label} className="stat-card">
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Why Businesses Choose Us</h2>
        <div className="feature-grid">
          {highlights.map((item, index) => (
            <motion.article
              key={item.title}
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Our Process</h2>
        <div className="process-grid">
          {process.map((step, index) => (
            <article key={step} className="process-step">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Industries We Support</h2>
        <div className="industry-grid">
          {industries.map((item) => (
            <article key={item} className="industry-chip">
              {item}
            </article>
          ))}
        </div>
      </section>

      <ProjectsSection />
      <TeamSection />

      <section className="section">
        <h2>Client Voices</h2>
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article key={item.name} className="testimonial-card">
              <p>"{item.quote}"</p>
              <h3>{item.name}</h3>
              <small>{item.role}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          {faqs.map((item) => (
            <article key={item.q} className="faq-item">
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <motion.article
          className="connect-card"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
        >
          <h2>Connect Us</h2>
          <p>
            Ready to grow your business with MERN development, data analytics,
            SEO, and debugging support.
          </p>
          <div className="connect-grid">
            <p>
              <strong>Phone:</strong> +1 (555) 250-9070
            </p>
            <p>
              <strong>Email:</strong> hello@businesspulse.dev
            </p>
            <p>
              <strong>Instagram:</strong> @businesspulse.dev
            </p>
            <p>
              <strong>Facebook:</strong> BusinessPulse
            </p>
          </div>
          <Link to="/contact-us" className="btn btn-primary">
            Go to Contact Us
          </Link>
        </motion.article>
      </section>
    </div>
  );
}
