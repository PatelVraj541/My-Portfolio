"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const myProjects = [
  {
    title: "Project One",
    description: "A brief description of your awesome project and the tech stack used.",
    link: "https://github.com/yourlink",
    tags: ["Next.js", "Tailwind", "CSS"]
  },
  {
    title: "Project Two",
    description: "Another cool project showcasing your development skills.",
    link: "https://github.com/yourlink",
    demoLink: "https://yourdemolink.com",
    tags: ["React", "Firebase"]
  },
  {
    title: "Project Three",
    description: "Another cool project showcasing your development skills.",
    link: "https://github.com/yourlink",
    tags: ["React", "Firebase"]
  }
];

export default function Projects() {
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
    <div className="projects-grid">
        {myProjects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tags">
              {project.tags.map(tag => <span key={tag}>{tag}</span>)}
            </div>
            <div className="button-group">
              {project.demoLink && (
                  <a href={project.demoLink} target="_blank" className="demo-btn">
                      View Website
                  </a>
              )}
            <a href={project.link} target="_blank" className="view-btn">View Code</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}