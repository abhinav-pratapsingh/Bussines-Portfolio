const services = [
  {
    name: "MERN Web Development",
    detail:
      "Custom websites, dashboards, and SaaS products using MongoDB, Express, React, and Node.js.",
  },
  {
    name: "Data Analytics & Dashboards",
    detail:
      "KPI tracking, funnel analysis, and performance dashboards for real-time business insights.",
  },
  {
    name: "SEO Strategy & Technical SEO",
    detail:
      "Keyword mapping, technical audits, schema optimization, and content architecture improvements.",
  },
  {
    name: "Performance Optimization",
    detail:
      "Core Web Vitals enhancement, API response tuning, and frontend performance upgrades.",
  },
  {
    name: "Debugging & Production Support",
    detail:
      "Issue diagnosis, hotfix deployment, and long-term system stability support.",
  },
  {
    name: "Maintenance & Scaling",
    detail:
      "Continuous improvements, feature rollout, monitoring, and cloud-ready scale planning.",
  },
];

const packages = [
  {
    title: "Starter",
    desc: "For small businesses launching first digital presence.",
    items: ["5-8 pages", "Basic SEO setup", "Contact integration"],
  },
  {
    title: "Growth",
    desc: "For businesses targeting traffic and lead expansion.",
    items: ["Custom MERN features", "Analytics dashboard", "Advanced SEO"],
  },
  {
    title: "Scale",
    desc: "For teams needing high performance and long-term support.",
    items: ["Performance tuning", "Continuous support", "Release planning"],
  },
];

export default function Services() {
  return (
    <section className="page">
      <h2>Services</h2>
      <p className="page-intro">
        End-to-end services to build, market, and optimize your digital
        business.
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
    </section>
  );
}
