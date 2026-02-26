export default function ContactUs() {
  return (
    <section className="page">
      <h2>Contact Us</h2>
      <p className="page-intro">
        Share your requirements and we will get back with a practical execution
        roadmap.
      </p>
      <div className="contact-wrap">
        <div className="contact-card">
          <h3>Direct Details</h3>
          <p><strong>Email:</strong> hello@businesspulse.dev</p>
          <p><strong>Phone:</strong> +1 (555) 250-9070</p>
          <p><strong>Location:</strong> United States</p>
          <p><strong>Instagram:</strong> @businesspulse.dev</p>
          <p><strong>Facebook:</strong> BusinessPulse</p>
          <h3 className="section-heading">Working Hours</h3>
          <p>Monday to Friday: 9:00 AM - 7:00 PM</p>
          <p>Saturday: 10:00 AM - 4:00 PM</p>
        </div>
        <form className="contact-card contact-form" onSubmit={(e) => e.preventDefault()}>
          <h3>Request a Callback</h3>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="text" placeholder="Business Type" />
          <textarea rows="4" placeholder="Tell us about your project" />
          <button className="btn btn-primary" type="submit">Send Inquiry</button>
        </form>
      </div>
    </section>
  );
}
