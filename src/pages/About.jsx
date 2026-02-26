const values = [
  {
    title: "Engineering Excellence",
    text: "Clean architecture, scalable systems, and production-ready code standards in every project we deliver.",
  },
  {
    title: "Growth-Oriented Thinking",
    text: "Every feature, design decision, and optimization is aligned with acquisition, retention, and revenue growth.",
  },
  {
    title: "Transparent Collaboration",
    text: "Clear communication, milestone-based delivery, and measurable performance tracking from start to finish.",
  },
];

const commitments = [
  "Weekly progress meetings with transparent updates",
  "SEO-ready development and structured content architecture",
  "Scalable backend and cloud-ready deployment decisions",
  "Analytics instrumentation for conversion and revenue tracking",
  "Long-term technical partnership mindset",
];

export default function About() {
  return (
    <section className="page">
      {/* INTRO */}
      <h2>About Us</h2>
      <p className="page-intro">
        We are a focused digital team helping businesses in Australia and India
        build, optimize, and scale modern web platforms powered by clean
        engineering, SEO strategy, and data-driven decision-making.
      </p>

      <div className="about-split">
        <article className="feature-card">
          <h3>Our Mission</h3>
          <p>
            To help businesses launch and scale digital products that are fast,
            reliable, and designed to convert consistently.
          </p>
        </article>

        <article className="feature-card">
          <h3>Our Vision</h3>
          <p>
            To become a trusted long-term technology partner for companies that
            value performance, clarity, and measurable business outcomes.
          </p>
        </article>
      </div>

      <h3 className="section-heading">Our Core Values</h3>
      <div className="feature-grid">
        {values.map((value) => (
          <article key={value.title} className="feature-card">
            <h3>{value.title}</h3>
            <p>{value.text}</p>
          </article>
        ))}
      </div>

      <article className="connect-card">
        <h3>What You Can Expect When Working With Us</h3>
        <ul className="check-list">
          {commitments.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
    </section>
  );
}