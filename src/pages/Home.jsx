import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProjectsSection from "../components/ProjectsSection";
import TeamSection from "../components/TeamSection";

const stats = [
  { value: "15+", label: "Projects Delivered" },
  { value: "2", label: "Active Client Partnerships" },
  { value: "Australia & India", label: "Client Locations" },
  { value: "Ongoing", label: "Technical Support" },
];

const services = [
  {
    title: "Custom Website Development",
    text: "High-performance, scalable websites built with modern technologies and optimized for growth.",
  },
  {
    title: "SEO & Ranking Strategy",
    text: "Technical SEO, keyword optimization, and structured architecture to improve search visibility.",
  },
  {
    title: "Data Analytics & Dashboards",
    text: "Custom dashboards and reporting systems that transform raw data into actionable insights.",
  },
  {
    title: "Performance Optimization",
    text: "Core Web Vitals improvement, speed enhancement, and conversion-focused UX refinement.",
  },
  {
    title: "Maintenance & Debug Support",
    text: "Continuous monitoring, issue resolution, and long-term technical assistance.",
  },
  {
    title: "E-Commerce Solutions",
    text: "Secure and conversion-driven online stores designed to maximize revenue potential.",
  },
];

const process = [
  "Discovery & Strategy",
  "Design & Development",
  "Launch & Deployment",
  "Optimize & Scale",
];

const testimonials = [
  {
    quote:
      "Our website performance improved significantly and lead inquiries increased after launch.",
    name: "Australian Client",
    role: "Business Owner, Australia",
  },
  {
    quote:
      "The analytics dashboard helped us track performance and make better weekly decisions.",
    name: "Indian Client",
    role: "Operations Lead, India",
  },
];

const faqs = [
  {
    q: "How long does a website project take?",
    a: "Most projects are delivered within 3 to 6 weeks depending on complexity and integrations.",
  },
  {
    q: "Do you provide SEO after launch?",
    a: "Yes. We offer ongoing SEO support, reporting, and optimization strategies.",
  },
  {
    q: "Can you improve our existing website?",
    a: "Absolutely. We audit your current system, fix technical issues, and enhance performance.",
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
          Helping Businesses in Australia & India Grow with
          High-Performance Web, SEO & Data Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.7 }}
        >
          We are a focused digital team delivering modern websites,
          measurable SEO strategies, and intelligent analytics systems
          designed for real business growth.
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link to="/services" className="btn btn-primary">
            View Our Services
          </Link>
          <Link to="/contact-us" className="btn btn-secondary">
            Book Free Consultation
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
        <h2>Our Core Services</h2>
        <div className="service-grid">
          {services.map((item, index) => (
            <motion.article
              key={item.title}
              className="service-card"
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

      <ProjectsSection />

      <TeamSection />

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
          <h2>Ready to Improve Your Online Presence?</h2>
          <p>
            Let’s discuss how our team can help you build a faster,
            smarter, and growth-focused digital system.
          </p>

          <Link to="/contact-us" className="btn btn-primary">
            Schedule a Strategy Call
          </Link>
        </motion.article>
      </section>
    </div>
  );
}