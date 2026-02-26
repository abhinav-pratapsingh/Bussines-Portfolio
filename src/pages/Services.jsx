import { Link } from "react-router-dom";

const services = [
  {
    name: "Custom Web Development",
    detail:
      "High-performance websites, dashboards, and scalable applications built with modern full-stack technologies.",
  },
  {
    name: "Data Analytics & Business Intelligence",
    detail:
      "KPI tracking, funnel analysis, and real-time dashboards that turn raw data into actionable business insights.",
  },
  {
    name: "SEO & Content Strategy",
    detail:
      "Keyword research, technical SEO audits, structured content planning, and search visibility optimization.",
  },
  {
    name: "Performance & Speed Optimization",
    detail:
      "Core Web Vitals improvement, API response tuning, and frontend performance enhancement for higher conversions.",
  },
  {
    name: "Debugging & Production Support",
    detail:
      "Issue diagnosis, hotfix deployment, monitoring, and long-term system reliability support.",
  },
  {
    name: "Maintenance & Scalable Growth",
    detail:
      "Continuous improvements, feature rollouts, cloud deployment, and long-term scaling strategy.",
  },
];

const packages = [
  {
    title: "Starter",
    desc: "Ideal for small businesses launching their digital presence.",
    items: [
      "5–8 Page Website",
      "Mobile Responsive Design",
      "Basic SEO Setup",
      "Contact Form Integration",
    ],
  },
  {
    title: "Growth",
    desc: "Designed for businesses focused on traffic and lead generation.",
    items: [
      "Custom Features & Integrations",
      "Analytics Dashboard Setup",
      "Advanced SEO Optimization",
      "Performance Enhancements",
    ],
  },
  {
    title: "Scale",
    desc: "For growing teams requiring performance, automation, and support.",
    items: [
      "Full Performance Tuning",
      "Continuous Monitoring & Support",
      "Cloud Deployment & CI/CD",
      "Long-Term Release Planning",
    ],
  },
];

export default function Services() {
  return (
    <section className="page">

      <h2>Our Services</h2>
      <p className="page-intro">
        We provide end-to-end digital solutions to build, optimize, and scale
        your online presence with measurable business impact.
      </p>

      <div className="service-grid">
        {services.map((service) => (
          <article key={service.name} className="service-card">
            <h3>{service.name}</h3>
            <p>{service.detail}</p>
          </article>
        ))}
      </div>

      <h2 className="section-heading">Service Packages</h2>
      <p className="page-intro">
        Flexible engagement models tailored to your business stage and growth
        objectives.
      </p>

      <div className="package-grid">
        {packages.map((pack) => (
          <article key={pack.title} className="package-card">
            <h3>{pack.title}</h3>
            <p>{pack.desc}</p>
            <ul className="check-list">
              {pack.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div style={{ marginTop: "60px", textAlign: "center" }}>
        <h3>Not sure which package fits your business?</h3>
        <p style={{ maxWidth: "600px", margin: "12px auto 24px" }}>
          Let’s schedule a strategy call to understand your goals and recommend
          the right solution for your growth.
        </p>
        <Link to="/contact-us" className="btn btn-primary">
          Book Free Consultation
        </Link>
      </div>
    </section>
  );
}