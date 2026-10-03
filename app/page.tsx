"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();

  return (
    <div className="portfolio-wrapper">
      <nav className="navbar">
        <div className="logo">
          <h1>Vraj Patel</h1>
        </div>
        <ul className="nav-links">
          <li>
            <Link href="/" className={pathname === "/" ? "active-link" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/Projects" className={pathname === "/Projects" ? "active-link" : ""}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/Resume" className={pathname === "/Resume" ? "active-link" : ""}>
              Resume
            </Link>
          </li>
        </ul>
      </nav>
          <div className="circle">
            <img src="/logo.jpg" alt="Vraj Patel" />
          </div>
          
          <h2 className="name">PATEL VRAJ DHARMESHBHAI</h2>

          <div className="info">
            <p>
              Welcome to my personal website! I am Vraj Patel, a passionate
              developer and technology enthusiast. Here you can find information
              about my projects, skills, and interests. Feel free to explore and
              connect with me!
            </p>
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
    </div>
  );
}