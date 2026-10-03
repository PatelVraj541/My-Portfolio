"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();
  return (
    <div className="portfolio-wrapper">
        <nav className="navbar">
        <div className="logo"><h1>Vraj Patel</h1></div>
        <ul className="nav-links">
            <li><a href="/" className={pathname === "/" ? "active-link" : ""}>Home</a></li>
            <li><a href="/Projects" className={pathname === "/Projects" ? "active-link" : ""}>Projects</a></li>
            <li><a href="/Resume" className={pathname === "/Resume" ? "active-link" : ""}>Resume</a></li>
        </ul>
    </nav>
    <div className="resume-container">
    {/* NEW: Resume Header Section */}
  <header className="resume-header">
    <div className="resume-logo-circle">
      <img src="/logo.jpg" alt="Vraj Patel" />
    </div>
    <div className="resume-info">
      <h1>Vraj Patel</h1>
      <p className="resume-subtitle">Full-Stack Developer & Software Engineer</p>
    </div>
  </header>

      <div className="resume-content-split">
      {/* LEFT COLUMN: Profile & Skills */}
        <aside className="resume-sidebar">
          <section className="resume-section">
            <h2>Profile</h2>
            <p>Passionate Full-Stack Developer focused on building scalable web applications and creative tools.</p>
          </section>

          <section className="resume-section">
            <h2>Technical Skills</h2>
            <div className="resume-tags">
              {/* Frontend Group */}
    <span className="skill-tag frontend">Next.js</span>
    <span className="skill-tag frontend">React</span>
    
    {/* Backend Group */}
    <span className="skill-tag backend">Node.js</span>
    <span className="skill-tag backend">PostgreSQL</span>
    
    {/* Tools/Cloud Group */}
    <span className="skill-tag tools">Docker</span>
    <span className="skill-tag tools">Vercel</span>
            </div>
          </section>

          <section className="resume-section">
            <h2>Education</h2>
            <div className="edu-item">
              <h4>B.Tech in Computer Engineering</h4>
              <p>Ganpat University | 2024 - 2028</p>
            </div>
          </section>
        </aside>

        {/* RIGHT COLUMN: Experience Timeline */}
        <main className="resume-main">
          <section className="resume-section">
            <h2>Experience</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>Full-Stack Intern</h3>
                  <span className="date">Jun 2025 - Present</span>
                  <p>Developed responsive UI components and integrated RESTful APIs using Next.js.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>Freelance Developer</h3>
                  <span className="date">Jan 2024 - May 2025</span>
                  <p>Built custom management systems for local businesses using React and Firebase.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>Full-Stack Intern</h3>
                  <span className="date">Jun 2025 - Present</span>
                  <p>Developed responsive UI components and integrated RESTful APIs using Next.js.</p>
                </div>
              </div>


            </div>
          </section>
          </main>
          </div>
    </div>
    <div className="social-media">
            <a href="https://github.com/PatelVraj541" target="_blank" rel="noopener noreferrer">
            <span>PatelVraj541</span>
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <span>Vraj Patel</span>
              <i className="fa-brands fa-square-linkedin"></i>
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <span>@Vrajpatel0541</span>
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </div>
          {/* Floating Download Button */}
      <a href="/your-resume.pdf" download className="download-fab">
        <i className="fa-solid fa-download"></i> Download PDF
      </a>
    </div>
);
}