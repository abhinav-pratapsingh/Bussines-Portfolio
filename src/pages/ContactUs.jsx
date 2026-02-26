import { useState } from "react";
import axios from "axios";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "https://bussines-portfolio-backend.onrender.com/api/contact",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        setShowPopup(true);
        setFormData({
          fullName: "",
          email: "",
          company: "",
          service: "",
          message: "",
        });
      }
    } catch (err) {
      setError("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
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

        {/* Left Card */}
        <div className="contact-card">
          <h3>Direct Contact</h3>

          <p><strong>Email:</strong> teampundir001@gmail.com</p>
          <p><strong>Primary Location:</strong> India</p>
          <p><strong>Currently Serving Clients:</strong> India & Australia</p>

          <h3 className="section-heading">What You Can Expect</h3>
          <ul className="check-list">
            <li>Transparent weekly updates</li>
            <li>SEO-ready scalable architecture</li>
            <li>Performance-focused engineering</li>
            <li>Long-term partnership approach</li>
          </ul>
        </div>

        {/* Form */}
        <form className="contact-card contact-form" onSubmit={handleSubmit}>
          <h3>Request a Strategy Call</h3>

          <input
            type="text"
            name="fullName"
            placeholder="Your Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="company"
            placeholder="Company / Business Name"
            value={formData.company}
            onChange={handleChange}
          />

          <input
            type="text"
            name="service"
            placeholder="Service Required (Web, SEO, Analytics...)"
            value={formData.service}
            onChange={handleChange}
          />

          <textarea
            rows="4"
            name="message"
            placeholder="Briefly describe your project goals"
            value={formData.message}
            onChange={handleChange}
          />

          {error && <p className="form-error">{error}</p>}

          <button
            className={`btn btn-primary ${loading ? "loading" : ""}`}
            type="submit"
            disabled={loading}
          >
            {loading ? <span className="spinner"></span> : "Send Inquiry"}
          </button>
        </form>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>Inquiry Sent Successfully 🎉</h3>
            <p>
              Thank you for reaching out. Our team will contact you shortly.
            </p>
            <button
              className="btn btn-secondary"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}