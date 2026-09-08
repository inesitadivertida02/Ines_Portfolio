import { useState } from "react";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Database,
  ExternalLink,
  MapPinned,
  Radio,
  ServerCog,
  Smartphone,
  Sparkles,
  Users,
} from "lucide-react";

const designSlides = [
  {
    type: "EVENT DISCOVERY",
    title: "Finding the next experience",
    description:
      "The home experience helps attendees find what matters quickly through personalised greetings, event search, category filters and visual event cards.",
    images: [
      {
        src: "/safinity/features/discover-light-display.png",
        alt: "Safinity event discovery in light mode",
        mode: "EXPLORE",
      },
      {
        src: "/safinity/features/discover-dark-display.png",
        alt: "Safinity event discovery in dark mode",
        mode: "PERSONALISED",
      },
    ],
  },
  {
    type: "EVENT PLANNING",
    title: "From discovery to a personal schedule",
    description:
      "Attendees can explore activities, save favourites and enter an active event mode. The interface shifts from planning what comes next to supporting what is happening now.",
    images: [
      {
        src: "/safinity/features/activities-light-display.png",
        alt: "Safinity activity list in light mode",
        mode: "ACTIVITIES",
      },
      {
        src: "/safinity/features/event-dark-display.png",
        alt: "Safinity live event page in dark mode",
        mode: "LIVE EVENT",
      },
    ],
  },
  {
    type: "LIVE EVENT MAP",
    title: "Orientation, awareness and support",
    description:
      "The map brings exits, friends, stages, food, facilities and crowd density into one view. An always-visible SOS action keeps help close without interrupting navigation.",
    images: [
      {
        src: "/safinity/features/map-light-display.png",
        alt: "Safinity event map in light mode",
        mode: "NAVIGATE",
      },
      {
        src: "/safinity/features/map-dark-display.png",
        alt: "Safinity event map with heatmap in dark mode",
        mode: "HEATMAP",
      },
    ],
  },
  {
    type: "PROFILE",
    title: "A personal history that remains useful",
    description:
      "Profiles connect identity, ticket linking and past events. Editing is intentionally focused, keeping the most important personal details easy to review and update.",
    images: [
      {
        src: "/safinity/features/profile-display.png",
        alt: "Safinity personal profile and past events",
        mode: "PROFILE",
      },
      {
        src: "/safinity/features/profile-edit-display.png",
        alt: "Safinity profile editing screen",
        mode: "EDIT",
      },
    ],
  },
  {
    type: "TICKETS & WALLET",
    title: "Keeping event access in one place",
    description:
      "The wallet lets users add a ticket with a validation code, browse linked passes and open the barcode and event details when they need them.",
    images: [
      {
        src: "/safinity/features/wallet-display.png",
        alt: "Safinity ticket wallet",
        mode: "WALLET",
      },
      {
        src: "/safinity/features/link-ticket-display.png",
        alt: "Modal for linking a ticket",
        mode: "LINK",
      },
      {
        src: "/safinity/features/ticket-detail-display.png",
        alt: "Safinity ticket detail with barcode",
        mode: "TICKET",
      },
    ],
  },
  {
    type: "FRIENDS & QR",
    title: "Turning a digital connection into a shared event",
    description:
      "Friend profiles reveal events in common, while QR scanning makes adding someone nearby quick and deliberate through a confirmation step.",
    images: [
      {
        src: "/safinity/features/friend-profile-display.png",
        alt: "Safinity friend profile",
        mode: "PROFILE",
      },
      {
        src: "/safinity/features/qr-scan-display.png",
        alt: "Safinity QR code scanner",
        mode: "SCAN",
      },
      {
        src: "/safinity/features/qr-confirm-display.png",
        alt: "Safinity friend confirmation",
        mode: "CONFIRM",
      },
    ],
  },
  {
    type: "SAFETY & COMMUNICATION",
    title: "Asking for help without adding uncertainty",
    description:
      "The guided SOS flow helps users describe an emergency and stay calm, while notifications gather requests, safety alerts and updates in a clear timeline.",
    images: [
      {
        src: "/safinity/features/sos-request-display.png",
        alt: "Safinity request for help form",
        mode: "SOS",
      },
      {
        src: "/safinity/features/notifications-display.png",
        alt: "Safinity notifications and friend requests",
        mode: "UPDATES",
      },
    ],
  },
  {
    type: "BACKOFFICE · EVENT MANAGEMENT",
    title: "Moving from overview to event operations",
    description:
      "The web backoffice gives organisers a structured starting point for reviewing current events, creating new ones and opening the event they need to manage.",
    images: [
      {
        src: "/safinity/backoffice-events-enhanced.png",
        alt: "Safinity backoffice home and events list",
        mode: "WEB",
      },
    ],
  },
  {
    type: "BACKOFFICE · LIVE OPERATIONS",
    title: "A wider view for faster decisions",
    description:
      "Maps and monitoring feeds support situational awareness, while prioritised alerts bring severity, location and available context together for the response team.",
    images: [
      {
        src: "/safinity/backoffice-map-enhanced.png",
        alt: "Safinity backoffice operational map",
        mode: "MAP",
      },
      {
        src: "/safinity/backoffice-alerts-enhanced.png",
        alt: "Safinity backoffice alerts",
        mode: "ALERTS",
      },
    ],
  },
];

export function CaseWindow({ title, children, className = "", icon = "S" }) {
  return (
    <details className={`window case-window ${className}`} open>
      <summary className="titlebar">
        <span className="app-icon" aria-hidden="true">
          {icon}
        </span>
        <strong>{title}</strong>
        <span className="case-window-toggle" aria-hidden="true">
          <span className="when-open">−</span>
          <span className="when-closed">+</span>
        </span>
      </summary>
      {children}
    </details>
  );
}

export default function SafinityPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const currentSlide = designSlides[activeSlide];
  const moveSlide = (direction) => {
    setActiveSlide((current) => (current + direction + designSlides.length) % designSlides.length);
  };

  return (
    <div className="desktop case-desktop" id="top">
      <nav className="case-nav">
        <a className="retro-button" href="/">
          <ArrowLeft size={16} /> Portfolio
        </a>
        <span>PROJECT 01 / SAFINITY</span>
        <a href="https://github.com/Safinity/Safinity-app" target="_blank" rel="noreferrer">
          GitHub <ExternalLink size={14} />
        </a>
      </nav>

      <main className="case-workspace">
        <CaseWindow title="safinity.exe — project overview" className="safinity-window">
          <div className="safinity-hero">
            <div className="safinity-heading">
              <p className="case-label">ACADEMIC CBL PROJECT · UNIVERSITY OF AVEIRO · 2025–2026</p>
              <h1>
                One academic year.
                <br />
                Five people.
                <br />
                <span>One evolving idea.</span>
              </h1>
              <p>
                Safinity was developed through Challenge Based Learning within the Master’s in
                Communication and Web Technologies. Responding to a challenge brief from Altice
                Labs, our team explored how digital technology could support safety and well-being
                at large public events.
              </p>
            </div>
            <div className="safinity-preview" aria-label="Stylised preview of the Safinity app map">
              <div className="phone-shell">
                <div className="phone-screen">
                  <div className="phone-top">
                    <b>Safinity</b>
                    <span>•••</span>
                  </div>
                  <div className="map-grid">
                    <i className="route" />
                    <span className="pin pin-one">1</span>
                    <span className="pin pin-two">2</span>
                    <span className="you">YOU</span>
                  </div>
                  <div className="phone-card">
                    <b>Festival map</b>
                    <small>Friends nearby · Live crowd view</small>
                  </div>
                  <div className="phone-nav">
                    <span>⌂</span>
                    <span>⌖</span>
                    <span>♡</span>
                    <span>♙</span>
                  </div>
                </div>
              </div>
              <div className="case-sticker">
                TEAM OF 5<br />
                <b>12 MONTHS</b>
              </div>
            </div>
          </div>
          <div className="case-facts">
            <div>
              <small>MY FOCUS</small>
              <b>Frontend & backend · UI/UX</b>
            </div>
            <div>
              <small>TEAM</small>
              <b>Five students, shared responsibility</b>
            </div>
            <div>
              <small>COURSE</small>
              <b>Master’s in Communication & Web Technologies</b>
            </div>
          </div>
          <div className="statusbar">
            <span>♡ Built collaboratively</span>
            <span>Overview</span>
          </div>
        </CaseWindow>

        <CaseWindow title="my_contribution.txt — Notepad" className="contribution-window">
          <div className="menubar">
            <span>File</span>
            <span>Edit</span>
            <span>View</span>
            <span>Team</span>
          </div>
          <div className="case-story">
            <article className="story-copy">
              <p className="comment">
                // Full-stack development, shared ownership, a year of learning
              </p>
              <h2>
                From interface
                <br />
                to backend.
              </h2>
              <p>
                I contributed to <mark>both frontend and backend development</mark> in our team of
                five, building with React Native (Expo) and NestJS. I took a particularly
                significant role in <mark>backend development alongside André</mark>, while also
                helping turn our interface designs into a working app. Our shared API connects the
                attendee app and organiser backoffice.
              </p>
              <div className="tech-tags" aria-label="Safinity development stack">
                <span>React Native / Expo</span>
                <span>TypeScript</span>
                <span>NestJS</span>
                <span>Prisma</span>
                <span>PostgreSQL / PostGIS</span>
                <span>WebSockets</span>
              </div>
              <p>
                Across two semesters, Safinity became the common thread connecting several areas of
                my master’s. We began by interpreting the Altice Labs challenge through research,
                creative divergence and idea selection. From there, we developed the product
                narrative, user journeys, interface design and high-fidelity prototype before moving
                toward a functional MVP, business strategy, accessibility and digital compliance.
              </p>
              <p>
                I participated throughout that complete academic process: proposing features,
                researching and testing ideas, <mark>contributing to the business model</mark>,{" "}
                <mark>designing the map and profile experiences</mark>, and developing both frontend
                and backend functionality. This let me connect implementation decisions with the
                needs of the people using the product.
              </p>
              <p>
                Yet the most important outcome was not a single screen or endpoint. Working with the
                same four people for an entire academic year taught me to listen, adapt, explain,
                compromise and <mark>protect a shared vision while allowing it to change</mark>. The
                work was distributed equitably, strategic decisions were discussed together, and
                each subject gave us a new lens through which to reconsider the product.
              </p>
              <blockquote>
                Safinity taught me that being multifaceted is not about standing in every place at
                once. It is about learning the language of each discipline—and using it to help a
                team build something none of us could have imagined alone.
              </blockquote>
            </article>
            <aside className="case-process">
              <h3>THE YEAR IN FOUR CHAPTERS</h3>
              <div>
                <Sparkles />
                <span>
                  <b>Challenge & imagine</b>
                  <small>CBL framing, research, Lotus Blossom and PNI</small>
                </span>
              </div>
              <div>
                <MapPinned />
                <span>
                  <b>Research & design</b>
                  <small>Personas, journeys, prototyping and usability evaluation</small>
                </span>
              </div>
              <div>
                <ServerCog />
                <span>
                  <b>Implement & evaluate</b>
                  <small>Mobile app, backend, business, accessibility and compliance</small>
                </span>
              </div>
              <div>
                <Users />
                <span>
                  <b>Learn together</b>
                  <small>Equitable work, regular feedback and shared decisions</small>
                </span>
              </div>
            </aside>
          </div>
          <div className="statusbar">
            <span>Ln 12, Col 05</span>
            <span>Academic reflection saved</span>
          </div>
        </CaseWindow>

        <CaseWindow title="design_gallery.exe — Safinity UI" className="design-window">
          <div className="design-intro">
            <div>
              <p className="comment">// From interface system to lived experience</p>
              <h2>Designing calm inside a crowded event.</h2>
            </div>
            <p>
              The app and backoffice share one visual language but serve different moments. The
              mobile experience keeps essential actions close at hand for attendees, while the
              backoffice gives organisers a wider operational view. Both were refined through
              prototyping and usability evaluation.
            </p>
          </div>

          <div
            className="design-slider"
            role="region"
            aria-roledescription="carousel"
            aria-label="Safinity interface designs"
          >
            <figure className="slide-frame">
              <div
                className={`slide-image slide-image-${currentSlide.images.length} ${currentSlide.type.startsWith("BACKOFFICE") ? "is-backoffice" : ""}`}
              >
                {currentSlide.images.map((image) => (
                  <div className="slide-device" key={image.src}>
                    <img src={image.src} alt={image.alt} />
                  </div>
                ))}
              </div>
              <figcaption aria-live="polite" aria-atomic="true">
                <span>{currentSlide.type}</span>
                <strong>{currentSlide.title}</strong>
                <p>{currentSlide.description}</p>
              </figcaption>
            </figure>
            <div className="slider-controls">
              <button
                className="slider-arrow"
                type="button"
                onClick={() => moveSlide(-1)}
                aria-label="Show previous design"
              >
                <ChevronLeft size={16} aria-hidden="true" />
                Previous
              </button>
              <span className="slider-count">
                {String(activeSlide + 1).padStart(2, "0")} /{" "}
                {String(designSlides.length).padStart(2, "0")}
              </span>
              <button
                className="slider-arrow"
                type="button"
                onClick={() => moveSlide(1)}
                aria-label="Show next design"
              >
                Next
                <ChevronRight size={16} aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="statusbar">
            <span>← → Browse the interface</span>
            <span>App + Backoffice</span>
          </div>
        </CaseWindow>

        <CaseWindow title="architecture.sys — Development" className="development-window">
          <div className="development-header">
            <p className="comment">// One product, three connected systems</p>
            <h2>The backend connecting Safinity.</h2>
            <p>
              A shared NestJS API supports both the mobile app and the web backoffice. The backend
              combines modular application logic, validation and role-aware access with Prisma,
              PostgreSQL and PostGIS. WebSockets carry realtime updates between the system and its
              users.
            </p>
          </div>

          <div className="architecture-flow">
            <article>
              <Smartphone aria-hidden="true" />
              <small>01 · ATTENDEE EXPERIENCE</small>
              <h3>Expo mobile app</h3>
              <p>
                Built with React Native, Expo Router and TypeScript for event discovery, maps,
                tickets, friends, calendars, notifications and SOS flows.
              </p>
              <div className="tech-tags">
                <span>React Native</span>
                <span>Expo 54</span>
                <span>TypeScript</span>
                <span>Styled Components</span>
              </div>
            </article>

            <span className="architecture-connector" aria-hidden="true">
              ↔
            </span>

            <article>
              <ServerCog aria-hidden="true" />
              <small>02 · SHARED LOGIC</small>
              <h3>NestJS API</h3>
              <p>
                A modular backend handles users, events, tickets, friends, alerts, sensors and
                notifications, with validation and role-aware access.
              </p>
              <div className="tech-tags">
                <span>NestJS</span>
                <span>Prisma</span>
                <span>Clerk</span>
                <span>WebSockets</span>
              </div>
            </article>

            <span className="architecture-connector" aria-hidden="true">
              ↔
            </span>

            <article>
              <Database aria-hidden="true" />
              <small>03 · DATA & OPERATIONS</small>
              <h3>Backoffice + spatial data</h3>
              <p>
                A React web interface supports event operations, backed by PostgreSQL and PostGIS
                for relational and geospatial data.
              </p>
              <div className="tech-tags">
                <span>React</span>
                <span>PostgreSQL</span>
                <span>PostGIS</span>
                <span>Mapbox</span>
              </div>
            </article>
          </div>

          <div className="technical-notes">
            <div>
              <Radio aria-hidden="true" />
              <span>
                <b>Realtime</b> WebSocket notifications connect event alerts, SOS activity and
                friend requests.
              </span>
            </div>
            <div>
              <MapPinned aria-hidden="true" />
              <span>
                <b>Location-aware</b> PostGIS and Mapbox support event maps, points of interest and
                crowd context.
              </span>
            </div>
            <div>
              <Users aria-hidden="true" />
              <span>
                <b>Developed collaboratively</b> I worked across the stack, with a particularly
                significant backend role alongside André.
              </span>
            </div>
          </div>
          <div className="statusbar">
            <span>System connected</span>
            <span>Academic MVP</span>
          </div>
        </CaseWindow>

        <CaseWindow title="project_details — Explorer" className="details-window">
          <div className="case-details">
            <div>
              <small>THE CBL CHALLENGE</small>
              <h3>From an open brief to a focused problem.</h3>
              <p>
                Starting from the Altice Labs proposition, the team investigated how connectivity,
                real-time data and digital experiences could improve safety and well-being at large
                events.
              </p>
            </div>
            <div>
              <small>THE ACADEMIC PROCESS</small>
              <h3>Different subjects, one evolving product.</h3>
              <p>
                Creativity methods generated and selected the concept; user-centred design
                structured it; usability testing challenged it; development, business and compliance
                work made it more concrete.
              </p>
            </div>
            <div>
              <small>THE OUTCOME</small>
              <h3>A multidisciplinary learning journey made tangible.</h3>
              <p>
                Safinity became a working academic MVP and a record of how five students applied
                theory, accepted feedback and learned to collaborate across an entire year.
              </p>
            </div>
          </div>
        </CaseWindow>
      </main>

      <footer className="taskbar">
        <a className="start" href="/">
          <span>✿</span> Start
        </a>
        <a className="task" href="#top">
          <span>S</span> safinity.exe
        </a>
        <div className="tray">1 year · 5 people</div>
      </footer>
    </div>
  );
}
