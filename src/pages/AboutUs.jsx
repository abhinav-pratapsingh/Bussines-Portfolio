const milestones = [
  {
    title: "Started With Debugging Projects",
    text: "We began by fixing production issues for growing startups and product teams.",
  },
  {
    title: "Expanded to Full MERN Delivery",
    text: "From bug fixing to complete product ownership including UI, APIs, and deployment.",
  },
  {
    title: "Now Focused on Growth Engineering",
    text: "Every release now connects technology, SEO, and analytics for business outcomes.",
  },
];

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

export default function AboutUs() {
  return (
    <section className="page">
      <h2>About Us</h2>
      <p className="page-intro">
        Our business focuses on practical engineering and measurable growth. We
        combine modern interfaces, strong backend systems, and SEO analytics to
        deliver reliable digital experiences.
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

      <h2 className="section-heading">How We Work</h2>
      <div className="process-grid">
        <article className="process-step">
          <span>01</span>
          <h3>Consult</h3>
        </article>
        <article className="process-step">
          <span>02</span>
          <h3>Create</h3>
        </article>
        <article className="process-step">
          <span>03</span>
          <h3>Launch</h3>
        </article>
        <article className="process-step">
          <span>04</span>
          <h3>Scale</h3>
        </article>
      </div>

      <h2 className="section-heading">Core Values</h2>
      <div className="feature-grid">
        {values.map((value) => (
          <article key={value.title} className="feature-card">
            <h3>{value.title}</h3>
            <p>{value.text}</p>
          </article>
        ))}
      </div>

      <h2 className="section-heading">Our Journey</h2>
      <div className="feature-grid">
        {milestones.map((item) => (
          <article key={item.title} className="feature-card">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
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
