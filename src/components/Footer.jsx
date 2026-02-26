export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <h3>BusinessPulse</h3>
          <p>MERN | Data Analytics | SEO | Debugging</p>
        </div>
        <div className="footer-contact">
          <p><strong>Phone:</strong> +1 (555) 250-9070</p>
          <p><strong>Email:</strong> hello@businesspulse.dev</p>
        </div>
        <div className="footer-social">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4.2" />
              <circle cx="17.5" cy="6.7" r="1.1" />
            </svg>
            <span>Instagram</span>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M14 8h3V4h-3c-3 0-5 2.2-5 5.5V12H6v4h3v4h4v-4h3.1l.9-4H13V9.8c0-1.1.6-1.8 1-1.8z" />
            </svg>
            <span>Facebook</span>
          </a>
        </div>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} BusinessPulse. All rights reserved.</p>
    </footer>
  );
}
