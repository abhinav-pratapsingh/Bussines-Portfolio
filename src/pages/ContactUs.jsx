import { useState } from "react";

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="page">
      <h2>Let’s Build Something Impactful</h2>
      <p className="page-intro">
        We work with clients across India and Australia to design,
        develop, and optimize digital systems that drive measurable growth.
        Share your requirements and our team will respond with a clear execution roadmap.
      </p>

      <div className="contact-wrap">

        <div className="contact-card">
          <h3>Direct Contact</h3>

          <p><strong>Email:</strong> teampundir001@gmail.com</p>
          <p><strong>Primary Location:</strong> India</p>
          <p><strong>Currently Serving Clients:</strong> India & Australia</p>

          {/* <h3 className="section-heading">Working Hours</h3>
          <p>Monday – Friday: 9:00 AM – 7:00 PM (IST)</p>
          <p>Saturday: 10:00 AM – 4:00 PM (IST)</p> */}

          <h3 className="section-heading">What You Can Expect</h3>
          <ul className="check-list">
            <li>Transparent weekly updates</li>
            <li>SEO-ready scalable architecture</li>
            <li>Performance-focused engineering</li>
            <li>Long-term partnership approach</li>
          </ul>
        </div>

        <form className="contact-card contact-form" onSubmit={handleSubmit}>
          <h3>Request a Strategy Call</h3>

          <input type="text" placeholder="Your Full Name" required />
          <input type="email" placeholder="Your Email Address" required />
          <input type="text" placeholder="Company / Business Name" />
          <input type="text" placeholder="Service Required (Web, SEO, Analytics...)" />
          <textarea
            rows="4"
            placeholder="Briefly describe your project goals"
          />

          <button className="btn btn-primary" type="submit">
            Send Inquiry
          </button>

          {submitted && (
            <p style={{ marginTop: "12px", color: "#0b6e5f" }}>
              Thank you. Our team will get back to you shortly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}