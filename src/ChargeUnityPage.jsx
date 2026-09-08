import { ArrowLeft, Code2, ShieldCheck, Workflow } from "lucide-react";
import { CaseWindow } from "./SafinityPage";

export default function ChargeUnityPage() {
  return (
    <div className="desktop case-desktop" id="top">
      <nav className="case-nav">
        <a className="retro-button" href="/#work">
          <ArrowLeft size={16} /> Portfolio
        </a>
        <span>PROJECT 03 / CHARGEUNITY</span>
        <a href="#quality">Testing & quality ↓</a>
      </nav>
      <main className="case-workspace">
        <CaseWindow title="charge_unity.exe — project overview" icon="C">
          <div className="travel-intro">
            <p className="case-label">SOFTWARE TESTING & QUALITY · UNIVERSITY OF AVEIRO · 2025</p>
            <h1>
              Building the logic.
              <br />
              <span>Testing the behaviour.</span>
            </h1>
            <p>
              ChargeUnity is an academic EV charging platform for drivers and station operators. It
              brings together charger discovery, booking and station management, with software
              testing and quality practices woven into the development process.
            </p>
            <div className="tech-tags">
              <span>Java / Spring Boot</span>
              <span>REST API</span>
              <span>MySQL</span>
              <span>JUnit / Mockito</span>
              <span>React</span>
            </div>
          </div>
          <div className="case-facts">
            <div>
              <small>MY CONTRIBUTION</small>
              <b>API logic development</b>
            </div>
            <div>
              <small>TEAM ROLE</small>
              <b>Product Owner & developer · Team of four</b>
            </div>
            <div>
              <small>KEY LEARNING</small>
              <b>Code testing & software quality</b>
            </div>
          </div>
        </CaseWindow>
        <CaseWindow title="my_contribution.txt — Notepad" icon="C">
          <div className="travel-copy story-copy">
            <p className="comment">// Connecting product requirements with backend behaviour</p>
            <h2>
              What happens behind
              <br />
              the request matters.
            </h2>
            <p>
              I contributed significantly to <mark>building the API logic</mark>. Working on
              ChargeUnity helped me deepen my understanding of backend development and learn much
              more about <mark>code testing and software quality</mark>.
            </p>
            <p>
              I also held the <mark>Product Owner role</mark> in our four-person team, with everyone
              contributing as a developer. The project connected user stories and acceptance
              criteria to implementation, review and testing.
            </p>
            <p>
              For me, the important learning was how those parts fit together: understanding what
              the product should do, implementing its behaviour in the API, and using tests and
              quality checks to assess that behaviour.
            </p>
          </div>
        </CaseWindow>
        <CaseWindow title="backend.sys — Application logic" icon="C">
          <div className="development-header">
            <p className="comment">// A shared API for drivers and station operators</p>
            <h2>
              From charging needs
              <br />
              to service logic.
            </h2>
            <p>
              The Spring Boot backend organises driver, station and operator operations into
              services. A REST API connects the React frontend to that logic, while MySQL stores
              vehicles, stations, chargers, trips and bookings.
            </p>
          </div>
          <div className="travel-architecture">
            <article>
              <Code2 />
              <h3>Resource operations</h3>
              <p>
                The documented API exposes core entities through CRUD endpoints, along with filtered
                searches and relationships between resources.
              </p>
            </article>
            <article>
              <Workflow />
              <h3>Domain behaviour</h3>
              <p>
                Custom API routes simplify frontend integration, including nearby-station searches
                and starting a charging booking. These connect user actions to application rules.
              </p>
            </article>
            <article>
              <ShieldCheck />
              <h3>A rule to verify</h3>
              <p>
                One acceptance criterion states that a charger marked for maintenance must disappear
                from station searches and become unavailable for booking. Reactivating it should
                restore availability.
              </p>
            </article>
          </div>
        </CaseWindow>
        <CaseWindow title="architecture_notes.txt — Decisions & diagrams" icon="C">
          <div className="travel-copy story-copy">
            <p className="comment">// Decisions recorded in our product specification</p>
            <h2>
              Two user groups.
              <br />
              One connected domain.
            </h2>
            <p>
              Drivers needed to find chargers and reserve time; operators needed to manage stations
              and availability. We organised the architecture around these responsibilities, with
              <mark>separate frontend, backend and data layers</mark> and modular services inside
              the Spring Boot application. The course deadline and dependencies on external services
              were explicit constraints.
            </p>
            <figure className="architecture-figure">
              <a
                href="/chargeunity/architecture-diagram.png"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open system architecture diagram at full size"
              >
                <img
                  src="/chargeunity/architecture-diagram.png"
                  alt="React connects to the Spring Boot backend, whose operator, station and driver services use MySQL and Prometheus; planned external integrations include maps, IPMA and Stripe."
                  loading="lazy"
                />
              </a>
              <figcaption>
                System architecture extracted from our presentation. Stripe and IPMA were planned
                but remained unimplemented. Click to view full size ↗
              </figcaption>
            </figure>
            <h3>React: build on what the team already knew</h3>
            <p>
              We chose React for its rich ecosystem, approachable syntax and the whole team's
              familiarity with it. Responsive pages were our approach to supporting both desktop and
              mobile users. The frontend communicated through the REST API, leaving application
              logic in the backend.
            </p>
            <h3>Spring Boot: a course requirement that fit our experience</h3>
            <p>
              Spring Boot was mandatory for the assignment and familiar to the group. Within it,
              DriverService handled driver operations and vehicles, StationService handled station
              registration and monitoring, and OperatorService handled operator requests. The report
              describes <mark>modular services within the backend</mark>; its deployment view places
              them together in a Spring Boot container.
            </p>
            <h3>The data model: connect a reservation to its context</h3>
            <p>
              A booking relates a driver to a charger and, optionally, a trip. Chargers belong to
              stations managed by operators, while drivers can have multiple vehicles. MySQL stores
              this persistent domain data. The report documents these relationships and the database
              choice, without claiming a comparison against alternative database technologies.
            </p>
            <h3>The API: from entity access to user actions</h3>
            <p>
              The API exposes CRUD operations, filtered searches and entity relationships. We also
              documented <mark>custom endpoints to simplify frontend integration</mark>. Starting a
              booking and finding nearby stations are examples of actions that go beyond retrieving
              a single database entity.
            </p>
            <div className="api-examples" aria-label="Examples from the documented API">
              <code>PATCH /api/v1/bookings/&#123;id&#125;/start</code>
              <code>
                GET
                /api/v1/station/coordinates/&#123;latitude&#125;/&#123;longitude&#125;/&#123;radius&#125;
              </code>
            </div>
            <p>
              That distinction is useful context for my API logic contribution: the frontend needs
              meaningful operations, while the backend connects those operations to the
              application's rules and relationships.
            </p>
          </div>
          <div className="statusbar">
            <span>Product specification · Domain & architecture</span>
            <span>Sections 3–5</span>
          </div>
        </CaseWindow>
        <CaseWindow title="delivery_notes.txt — Boundaries & tradeoffs" icon="C">
          <div className="travel-copy story-copy">
            <p className="comment">// Intended architecture and the limits of the final project</p>
            <h2>
              Designing the system.
              <br />
              Learning its limits.
            </h2>
            <h3>External services extended the scope—and added dependencies</h3>
            <p>
              The architecture included map visualisation, Stripe sandbox payments and IPMA weather
              forecasts. The report explicitly identifies third-party availability and charger API
              integration as constraints. Its final limitations section confirms that
              <mark>Stripe payment operations and IPMA calls were not implemented</mark>. They
              belong to the planned scope, rather than the delivered feature set.
            </p>
            <h3>Operational metrics were separate from booking data</h3>
            <p>
              MySQL held application records; Prometheus collected API metrics, with Grafana for
              observability. The quality manual also describes request logs, response times and
              Spring Boot Actuator. This separated the information used by the product from the
              information used to understand how the system was behaving.
            </p>
            <h3>Containers and automation still needed a verified release</h3>
            <p>
              The deployment design grouped the frontend, backend, databases and observability
              tooling into Docker services on a shared network. GitHub Actions provided automated
              checks and deployment workflows. However, the report records that an earlier test
              deployment worked and the final production deployment encountered unresolved
              branch/code alignment problems before the deadline.
            </p>
            <figure className="architecture-figure">
              <a
                href="/chargeunity/delivery-diagram.png"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open delivery pipeline diagram at full size"
              >
                <img
                  src="/chargeunity/delivery-diagram.png"
                  alt="Team delivery workflow from Jira planning and peer review through automated tests, staging, Docker deployment and monitoring."
                  loading="lazy"
                />
              </a>
              <figcaption>
                The team's documented delivery workflow. The final deployment limitations are
                described above. Click to view full size ↗
              </figcaption>
            </figure>
            <h3>What this adds to my learning</h3>
            <p>
              Alongside writing API logic, the project gave me a much deeper understanding of
              testing and quality. The team's experience makes the practical stakes clear: tests
              need repeatable behaviour, acceptance criteria need evidence, and a release needs
              verification in its target environment. Those are lessons I carry into backend work.
            </p>
          </div>
        </CaseWindow>
        <div id="quality">
          <CaseWindow title="quality_checks.exe — Testing & delivery" icon="C">
            <div className="travel-copy">
              <p className="comment">// The team's testing approach</p>
              <h2>
                Check the logic.
                <br />
                Then check the connections.
              </h2>
              <p>
                The project combined several testing layers, each looking at a different kind of
                failure. User stories supplied acceptance criteria, while the delivery workflow
                brought tests, reviews and static analysis into routine development.
              </p>
            </div>
            <div className="travel-architecture">
              <article>
                <h3>Unit tests</h3>
                <p>
                  JUnit and Mockito for backend logic, isolating dependencies so individual
                  behaviours can be checked.
                </p>
              </article>
              <article>
                <h3>Integration tests</h3>
                <p>
                  Spring Boot Test, MockMvc and REST Assured for checking API behaviour and
                  interactions across application layers.
                </p>
              </article>
              <article>
                <h3>User journeys</h3>
                <p>
                  Selenium and Cucumber for behaviour-driven UI tests based on acceptance criteria,
                  alongside exploratory testing for edge cases and responsive layouts.
                </p>
              </article>
            </div>
            <div className="travel-copy story-copy">
              <h3>Quality as part of the workflow</h3>
              <p>
                GitHub Actions automated build and test checks. JaCoCo reported coverage, while
                Sonar analysis checked issues such as duplication and maintainability. Peer review
                and coding conventions supported consistent changes; Docker supported delivery.
              </p>
              <p>
                The quality manual set targets of <mark>at least 80% code coverage</mark> and{" "}
                <mark>no more than 3% duplication</mark>. These are documented quality gates, not
                reported final results.
              </p>
              <h3>What the team still wanted to improve</h3>
              <p>
                Our final review identified test depth and coverage as areas to strengthen, along
                with tests affected by non-idempotent behaviour and an initially slow CI
                configuration. Those limitations made the connection between reliable tests and
                dependable development especially tangible.
              </p>
            </div>
          </CaseWindow>
        </div>
        <div className="hero-actions">
          <a
            className="retro-button primary"
            href="https://github.com/ChargeUnity/TQS_ChargeUnity"
            target="_blank"
            rel="noopener noreferrer"
          >
            View project on GitHub ↗
          </a>
          <a
            className="retro-button"
            href="https://youtu.be/xg6MM65u0O8"
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch project demo ↗
          </a>
        </div>
      </main>
      <footer className="taskbar">
        <a className="start" href="/">
          <span>✿</span> Start
        </a>
        <a className="task" href="#top">
          <span>C</span> charge_unity.exe
        </a>
        <div className="tray">API logic · Testing · Quality</div>
      </footer>
    </div>
  );
}
