const values = [
  {
    title: "Engineering Quality",
    text: "Clean architecture, scalable code patterns, and production stability in every release.",
  },
  {
    title: "Growth Mindset",
    text: "Every design and feature is aligned to user acquisition, retention, and revenue goals.",
  },
  {
    title: "Transparent Delivery",
    text: "Weekly progress, milestone demos, and clear performance metrics from start to finish.",
  },
];

const commitments = [
  "Weekly progress meetings with transparent updates",
  "SEO-ready code and structured content architecture",
  "Scalable backend decisions for future growth",
  "Analytics instrumentation for conversion tracking",
];

export default function About() {
  return (
    <section className="page">
      <h2>About</h2>
      <p className="page-intro">
        We are a growth-focused digital team delivering full-stack MERN
        products, SEO-led architecture, and data-driven improvements for
        business outcomes.
      </p>
      <div className="about-split">
        <article className="feature-card">
          <h3>Our Mission</h3>
          <p>
            Help businesses launch and scale digital products that look modern,
            perform fast, and convert consistently.
          </p>
        </article>
        <article className="feature-card">
          <h3>Our Vision</h3>
          <p>
            Be a trusted long-term technology partner for companies that value
            clean engineering and measurable outcomes.
          </p>
        </article>
      </div>
      <div className="feature-grid">
        {values.map((value) => (
          <article key={value.title} className="feature-card">
            <h3>{value.title}</h3>
            <p>{value.text}</p>
          </article>
        ))}
      </div>
      <article className="connect-card">
        <h3>What You Can Expect</h3>
        <ul className="check-list">
          {commitments.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
    </section>
  );
}
