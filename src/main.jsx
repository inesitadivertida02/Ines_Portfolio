import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {
  Code2,
  Database,
  Palette,
  BriefcaseBusiness,
  FolderOpen,
  UserRound,
  ExternalLink,
} from "lucide-react";
import "./styles.css";
import SafinityPage from "./SafinityPage";
import TravellingBookingPage from "./TravellingBookingPage";
import ChargeUnityPage from "./ChargeUnityPage";

const projects = [
  {
    id: "01",
    name: "safinity.exe",
    type: "FULL-STACK DEVELOPMENT · TEAM PROJECT",
    color: "hot",
    image: "/safinity/logo.svg",
    imageAlt: "Safinity logo",
    text: "An event-safety platform built with React Native, NestJS and PostgreSQL. I contributed to frontend and backend development, UI/UX and product strategy in a team of five.",
  },
  {
    id: "02",
    name: "travelling_booking.exe",
    type: "FULL-STACK · EVENT-DRIVEN SYSTEMS",
    color: "violet",
    image: "/travelling-booking/prototype-1.png",
    imageAlt: "TravellingBooking destination search and travel discovery interface",
    text: "A team-built travel-booking platform connecting React, Spring Boot, MySQL and Kafka for booking flows and realtime price updates.",
  },
  {
    id: "03",
    name: "charge_unity.exe",
    type: "BACKEND · TESTING & QUALITY",
    color: "rose",
    image: "/chargeunity/cover.png",
    imageAlt: "ChargeUnity map with electric charging markers",
    text: "An EV charging platform where I contributed significantly to API logic and deepened my understanding of testing and software quality.",
  },
];

function Window({ title, className = "", children }) {
  return (
    <section className={`window ${className}`}>
      <div className="titlebar">
        <span className="app-icon">✿</span>
        <strong>{title}</strong>
        <div className="window-buttons" aria-hidden="true">
          <button>_</button>
          <button>□</button>
          <button>×</button>
        </div>
      </div>
      {children}
    </section>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [time] = useState(() =>
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
  );
  return (
    <div className="desktop font-space" id="top">
      <aside className="desktop-icons" aria-label="Desktop shortcuts">
        <a href="#about">
          <span>
            <UserRound />
          </span>
          <b>About me</b>
        </a>
        <a href="#work">
          <span>
            <FolderOpen />
          </span>
          <b>My work</b>
        </a>
        <a
          href="https://www.linkedin.com/in/inês-ferreira-a6707b303"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <ExternalLink />
          </span>
          <b>LinkedIn</b>
        </a>
      </aside>
      <main className="workspace">
        <Window title="welcome_to_ines_portfolio.exe" className="hero-window">
          <div className="menubar">
            <a href="#about">About</a>
            <a href="#work">Projects</a>
            <a
              href="https://www.linkedin.com/in/inês-ferreira-a6707b303"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </div>
          <div className="hero-content">
            <div className="hero-copy">
              <div className="status-chip">
                <i /> MASTER’S STUDENT · UNIVERSITY OF AVEIRO
              </div>
              <h1>
                Hello!
                <br />
                I’m <span>Ines </span>
                <i className="cursor">_</i>
              </h1>
              <p>
                Graduated in software engineering with experience in{" "}
                <mark>frontend and backend development.</mark> I build interfaces, APIs and
                data-driven features, bringing UI/UX and product thinking to the full stack.
              </p>
              <div className="hero-actions">
                <a className="retro-button primary" href="#work">
                  View my work
                </a>
                <a className="retro-button" href="#about">
                  Read my story
                </a>
              </div>
            </div>
            <div className="computer" aria-label="Decorative old computer showing Ines portfolio">
              <div className="monitor">
                <div className="screen">
                  <div className="screen-bar">
                    INES_OS <span>×</span>
                  </div>
                  <div className="pixel-flower">✿</div>
                  <p>
                    full-stack
                    <br />
                    developer
                  </p>
                  <small>APIs + data + ideas</small>
                </div>
              </div>
              <div className="stand" />
              <div className="keyboard">
                ••••••••••••
                <br />
                •••••••••••
              </div>
            </div>
          </div>
          <div className="statusbar">
            <span>♡ Welcome to my corner of the internet</span>
            <span>3 objects</span>
          </div>
        </Window>

        <Window title="C:\INES\SELECTED_WORK" className="projects-window">
          <div className="toolbar">
            <button>←</button>
            <button>→</button>
            <span>Address</span>
            <div>C:\Ines\Projects</div>
          </div>
          <div className="selected-work-note" id="work">
            <p className="comment">// A few highlights from a wider journey</p>
            <p>
              These projects are a selection of my work. Throughout my bachelor’s in Software
              Engineering, I gained experience across many other projects and technical challenges.
              Beyond university, my work as a{" "}
              <strong>Support Specialist at Sofyne Active Technology</strong> deepened my
              understanding of <strong>Manufacturing Execution Systems (MES)</strong>, strengthened
              my troubleshooting and support skills, and made me more confident working with
              databases.
            </p>
          </div>
          <div className="project-layout">
            <div className="project-grid">
              {projects.map((p) => (
                <article className={`project-card ${p.color}`} key={p.id}>
                  <div className="project-thumb">
                    <img src={p.image} alt={p.imageAlt} loading="lazy" />
                  </div>
                  <div className="project-copy">
                    <small>{p.type}</small>
                    <h2>{p.name}</h2>
                    <p>{p.text}</p>
                    <a
                      href={
                        p.id === "01"
                          ? "/safinity"
                          : p.id === "02"
                            ? "/travelling-booking"
                            : "/chargeunity"
                      }
                    >
                      Open project <ExternalLink size={14} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="statusbar">
            <span>3 object(s)</span>
            <span>My Computer</span>
          </div>
        </Window>

        <Window title="about_me.txt — Notepad" className="about-window">
          <div className="menubar">
            <span>File</span>
            <span>Edit</span>
            <span>Search</span>
            <span>Help</span>
          </div>
          <div className="about-content" id="about">
            <div className="about-copy">
              <p className="comment">// A little bit about my journey</p>
              <h2>
                I learned to ask
                <br />
                <span>“how?”</span> — then
                <br />
                started asking <em>“why?”</em>
              </h2>
              <p>
                My bachelor’s in Software Engineering taught me to solve complex problems with logic
                and precision. Now, through Communication and Web Technologies, I’m expanding into
                design, storytelling, and business. I develop across the stack, from React and React
                Native interfaces to backend services and databases. In Safinity, I contributed to
                both frontend and backend development, with a significant backend role alongside my
                teammate André.
              </p>
            </div>
            <div className="about-personal">
              <figure className="about-portrait">
                <div className="portrait-label">
                  ines.png <span aria-hidden="true">♡</span>
                </div>
                <img
                  src="/ines-portrait.png"
                  alt="Portrait of Inês Ferreira"
                  width="1400"
                  height="1800"
                  loading="lazy"
                />
                <figcaption>Inês Ferreira</figcaption>
              </figure>
              <div className="skills-panel">
                <h3>MY TOOLKIT</h3>
                <div>
                  <Code2 />
                  <span>
                    <b>Backend development</b>
                    <small>NestJS · Spring Boot · Flask · Django</small>
                  </span>
                </div>
                <div>
                  <Code2 />
                  <span>
                    <b>Frontend development</b>
                    <small>React · React Native · JavaScript · HTML & CSS</small>
                  </span>
                </div>
                <div>
                  <Database />
                  <span>
                    <b>Databases & persistence</b>
                    <small>PostgreSQL · MySQL · MongoDB · Redis</small>
                  </span>
                </div>
                <div>
                  <Palette />
                  <span>
                    <b>Design sensitivity</b>
                    <small>Figma · UX · Visual communication</small>
                  </span>
                </div>
                <div>
                  <BriefcaseBusiness />
                  <span>
                    <b>Product & collaboration</b>
                    <small>Business Model Canvas · Agile · Git · Docker</small>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="statusbar">
            <span>Ln 24, Col 08</span>
            <span>100%</span>
          </div>
        </Window>
      </main>
      <footer className="taskbar">
        <button className="start" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>
          <span>✿</span> Start
        </button>
        {menuOpen && (
          <div className="start-menu">
            <div className="start-side">
              INES<span>98</span>
            </div>
            <nav>
              <a href="#about">
                <UserRound /> About me
              </a>
              <a href="#work">
                <FolderOpen /> My work
              </a>
              <a
                href="https://www.linkedin.com/in/inês-ferreira-a6707b303"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink /> Contact
              </a>
              <hr />
              <a href="#top">↻ Back to top</a>
            </nav>
          </div>
        )}
        <a className="task" href="#top">
          <span>✿</span> ines_portfolio.exe
        </a>
        <div className="tray">
          ♡ <span>{time}</span>
        </div>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {window.location.pathname === "/safinity" ? (
      <SafinityPage />
    ) : window.location.pathname === "/travelling-booking" ? (
      <TravellingBookingPage />
    ) : window.location.pathname === "/chargeunity" ? (
      <ChargeUnityPage />
    ) : (
      <App />
    )}
  </React.StrictMode>,
);
