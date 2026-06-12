import './App.css';

function App() {
  return (
    <div className="portfolio">

      {/* NAV */}
      <nav className="nav">
        <span className="nav-logo">Portfolio</span>
        <ul className="nav-links">
          <li><a href="#education">Education</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#achievements">Achievements</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section id="about" className="hero">
        <div className="hero-tag">Available for Opportunities</div>
        <h1>Azfar <span className="highlight">Khan</span></h1>
        <p className="hero-sub">Data Entry Specialist · Aspiring Full Stack Developer</p>
        <p className="hero-location">📍 United Arab Emirates</p>
        <a href="#contact" className="hero-cta">Get in Touch →</a>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section">
        <p className="section-label">Education</p>
        <div className="edu-card">
          <h3>Bachelor's in Software Engineering</h3>
          <p>Strong foundation in programming, systems design, and software development principles.</p>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section">
        <p className="section-label">Work Experience</p>
        <div className="exp-card">
          <div className="exp-header">
            <h3>Data Entry Specialist</h3>
            <span className="exp-badge">Current Role</span>
          </div>
          <p className="exp-company">Chocolatier LLC — UAE</p>
          <ul className="exp-list">
            <li>Managing and maintaining accurate product and pricing data</li>
            <li>Supporting business development with data-driven materials</li>
            <li>Working with Excel for data organization and reporting</li>
            <li>Involved in retail operations and mall-based sales activities</li>
          </ul>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" className="section">
        <p className="section-label">Achievements & Certifications</p>
        <div className="ach-card">
          <div className="ach-icon">🤖</div>
          <div>
            <h3>Claude 101 — Anthropic</h3>
            <p>Completed Anthropic's Claude 101 course, gaining practical skills in AI tools, prompt engineering, and automation workflows.</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <p className="section-label">Connect With Me</p>
        <div className="contact-grid">

          <div className="contact-block">
            <p className="contact-block-label">LinkedIn</p>
            <h3>Professional Profile</h3>
            <p>View my work history, skills, and professional connections on LinkedIn.</p>
            <a
              href="https://www.linkedin.com/in/azfar-khan-37925a175"
              target="_blank"
              rel="noreferrer"
              className="contact-btn contact-btn-primary"
            >
              View LinkedIn →
            </a>
          </div>

          <div className="contact-block">
            <p className="contact-block-label">GitHub</p>
            <h3>Code & Projects</h3>
            <p>Explore my repositories and personal projects on GitHub.</p>
            <a
              href="https://github.com/kazfar7-web"
              target="_blank"
              rel="noreferrer"
              className="contact-btn contact-btn-outline"
            >
              View GitHub →
            </a>
          </div>
<div className="contact-block">
            <p className="contact-block-label">Direct Contact</p>
            <h3>Reach Out Directly</h3>
            <p>
              📧 <a href="mailto:kazfar7@gmail.com" className="email-link">kazfar7@gmail.com</a><br />
              📞 +971 56 111 9967<br />
              📍 Abu Dhabi, United Arab Emirates
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © 2026 Azfar Khan · Built with React
      </footer>

    </div>
  );
}

export default App;