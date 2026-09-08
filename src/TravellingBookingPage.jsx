import { ArrowLeft, Database, Radio, ServerCog } from "lucide-react";
import { CaseWindow } from "./SafinityPage";

export default function TravellingBookingPage() {
  return (
    <div className="desktop case-desktop" id="top">
      <nav className="case-nav">
        <a className="retro-button" href="/#work">
          <ArrowLeft size={16} /> Portfolio
        </a>
        <span>PROJECT 02 / TRAVELLINGBOOKING</span>
        <a href="#travel-design">View prototype ↓</a>
      </nav>
      <main className="case-workspace">
        <CaseWindow title="travelling_booking.exe — project overview" icon="T">
          <div className="travel-intro">
            <p className="case-label">
              INTRODUCTION TO SOFTWARE ENGINEERING · UNIVERSITY OF AVEIRO · 2023
            </p>
            <h1>
              One trip.
              <br />
              <span>Everything connected.</span>
            </h1>
            <p>
              A travel-booking simulator bringing flights, trains and hotels into one place. Built
              collaboratively in a team of five, TravellingBooking connects the booking experience
              with realtime notifications about changing travel prices.
            </p>
            <div className="tech-tags">
              <span>React</span>
              <span>Spring Boot</span>
              <span>MySQL</span>
              <span>Kafka</span>
            </div>
          </div>
          <div className="case-facts">
            <div>
              <small>CONTEXT</small>
              <b>Academic full-stack team project</b>
            </div>
            <div>
              <small>TEAM</small>
              <b>Five software engineering students</b>
            </div>
            <div>
              <small>ENGINEERING FOCUS</small>
              <b>Booking flows & realtime updates</b>
            </div>
          </div>
        </CaseWindow>
        <CaseWindow title="project_story.txt — Notepad" icon="T">
          <div className="travel-copy story-copy">
            <p className="comment">// From travel requirements to connected software</p>
            <h2>
              Less searching.
              <br />
              More travelling.
            </h2>
            <p>
              Planning a trip can mean switching between separate websites for transport,
              accommodation and local attractions. Our concept brought these tasks together, with a
              personal area for reservations and updates when plans change.
            </p>
            <p>
              My main contribution was <mark>frontend development</mark>, turning the booking
              journeys into a React interface. I also worked extensively on{" "}
              <mark>connecting the frontend and backend</mark>, bringing the different parts of the
              application together.
            </p>
            <p>
              Through this course, I learned to develop with <mark>Spring Boot</mark> and applied
              that understanding to the full-stack integration work. The team project also included
              Kafka-based price-change notifications, connecting the booking experience to changing
              travel information.
            </p>
            <p>
              The specification used three traveller personas to shape the requirements: a couple
              planning a honeymoon, a frequent business traveller and a first-time independent
              traveller. Their needs led to search filters, reservation details and notifications
              about relevant changes.
            </p>
          </div>
        </CaseWindow>
        <CaseWindow title="architecture.sys — Events, APIs & data" icon="T">
          <div className="development-header">
            <p className="comment">// Architecture documented in the project specification</p>
            <h2>
              Keeping a booking
              <br />
              up to date.
            </h2>
            <p>
              The system design separates the React interface, a Spring Boot backend and MySQL
              persistence. A data generator simulates travel changes, with Kafka carrying messages
              to the backend for processing. This lets the booking experience respond to more than a
              user's latest search.
            </p>
          </div>
          <div className="travel-architecture">
            <article>
              <Radio />
              <h3>Events & notifications</h3>
              <p>
                Generated travel data feeds a Kafka message queue. The specification covers price
                promotions, delays and cancellations; the team project includes realtime
                price-change notifications.
              </p>
            </article>
            <article>
              <ServerCog />
              <h3>Application logic & API</h3>
              <p>
                The Spring Boot architecture connects the frontend, message processing and data
                access. Requirements include registered-user access and keeping each traveller's
                reservation data private.
              </p>
            </article>
            <article>
              <Database />
              <h3>Relational data</h3>
              <p>
                The planned MySQL model links users, transport, hotels, passengers and reservations,
                giving the booking flows a shared data structure.
              </p>
            </article>
          </div>
          <div className="statusbar">
            <span>React ↔ API ↔ MySQL</span>
            <span>Kafka · Travel events</span>
          </div>
        </CaseWindow>
        <div id="travel-design">
          <CaseWindow title="prototype.exe — Booking journeys" icon="T">
            <div className="travel-copy">
              <p className="comment">// Original academic prototype</p>
              <h2>From discovery to a reservation.</h2>
              <p>
                The prototype explores search, comparison and booking across transport and
                accommodation. These are design-stage screens, with reference content retained from
                the original prototype.
              </p>
            </div>
            <div className="travel-gallery">
              {[
                [
                  "1",
                  "Discover a destination",
                  "Search by route and date, then explore transport, hotels and popular destinations.",
                ],
                [
                  "7",
                  "Compare train journeys",
                  "Review departure times, duration and prices before choosing a route.",
                ],
                [
                  "9",
                  "Explore accommodation",
                  "Bring hotel discovery into the same travel-planning experience.",
                ],
              ].map(([page, title, description]) => (
                <figure key={page}>
                  <div
                    className="travel-screen"
                    tabIndex={0}
                    role="region"
                    aria-label={`${title} prototype; scroll to explore`}
                  >
                    <img
                      loading="lazy"
                      src={`/travelling-booking/prototype-${page}.png`}
                      alt={`TravellingBooking prototype: ${title}`}
                    />
                  </div>
                  <figcaption>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <small>Scroll inside the preview to explore ↓</small>
                  </figcaption>
                </figure>
              ))}
            </div>
          </CaseWindow>
        </div>
        <div>
          <a
            className="retro-button primary"
            href="https://github.com/RobertoCastro391/IES_Project_TravelingBooking"
            target="_blank"
            rel="noopener noreferrer"
          >
            View project on GitHub ↗
          </a>
        </div>
      </main>
      <footer className="taskbar">
        <a className="start" href="/">
          <span>✿</span> Start
        </a>
        <a className="task" href="#top">
          <span>T</span> travelling_booking.exe
        </a>
        <div className="tray">React · Spring Boot · Kafka</div>
      </footer>
    </div>
  );
}
