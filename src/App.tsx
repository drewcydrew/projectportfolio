import { useState } from "react";
import "./App.css";

interface Project {
  id: number;
  title: string;
  image?: string;
  video?: string;
  thumbnail?: string;
  description: string;
  webUrl?: string;
  androidUrl?: string;
  iosUrl?: string;
}

function App() {
  const [currentProject, setCurrentProject] = useState(0);
  const [activeTab, setActiveTab] = useState<"personal" | "professional">(
    "personal"
  );

  const personalProjects: Project[] = [
    {
      id: 1,
      title: "Double Bill",
      image: "/assets/DoubleBill.png",
      description:
        "Movie Comparison Application, takes a pair of film/tv properties and uses TMDB to provide a list of actor/crew credits who worked on both. " +
        "Alternatively, enter two individuals to see a list of film/tv properties they've collaborated on.",

      webUrl: "https://iamdb.info/",
    },
    {
      id: 2,
      title: "Indigo Football",
      image: "/assets/IndigoFootball.png",
      description:
        "Team Generation Application, create balanced teams for matchday based on player ability and selected team generation algorithm.",
      webUrl: "https://indigofootball.org/",
      iosUrl: "https://apps.apple.com/us/app/indigo-football/id6740720730",
    },
    {
      id: 3,
      title: "Collection Paradise",
      image: "/assets/CollectionParadise.png",
      description:
        "Inventory Visualisation Application. Visualises database contents and provides query options for creating sublists. " +
        "Provides funcitlaity for scraping adidtional public data for sublists, and generating and exporting graph data.",
      webUrl: "https://collectionparadise.com.au/",
    },
    {
      id: 4,
      title: "Eventron",
      image: "/assets/Eventron.png",
      description:
        "Discrete Event Simulation Application. Represents individuals as A* traveller agents executing task list in 2D space. " +
        " implements agent based decision logic and graphic representation of current simulation state along with events over time.",
      webUrl: "https://eventron-umal.onrender.com/",
    },
  ];

  const professionalProjects: Project[] = [
    {
      id: 5,
      title: "Crew Movement",
      video: "/assets/Videos/CrewMovementNew.mp4",
      thumbnail: "/assets/Thumbnails/CrewMovement.png",
      description:
        "Discrete Event Simulation Project developed for BMT using Flexsim, for analyzing ship design layout. " +
        "Crew members are represented as A* travellers navigating the proposed vessel layout in order to execute tasks, " +
        "Process duration and resouce utilization is then driven by parameters like crew availablility and operating doctrine.",
    },
    {
      id: 6,
      title: "Vessel Design Training",
      video: "/assets/Videos/VesselDesign.mp4",
      thumbnail: "/assets/Thumbnails/VesselDesign.png",
      description:
        "Web application developed for BMT to assist in training courses." +
        " It provides a platform for users to interactively design and visualize vessel layouts, enhancing their understanding of ship design principles." +
        " Vessel input parameters are used to calculate the physical properties of a submarine, represented as a 3D object using the threeJS library.",
    },

    {
      id: 7,
      title: "Fleet Support",
      video: "/assets/Videos/FleetSupportNew.mp4",
      thumbnail: "/assets/Thumbnails/FleetSupport.png",
      description:
        "Discrete Event Simulation Project developed for BMT using Flexsim, for analyzing proposed maintenance locations and processes. " +
        "Vessels represented in terms of scheduled and random maintenance requirements, addressed at proposed maintenance locations on shore. " +
        "Fleet performance is thereby driven by maintenance facility locations, resource allocation, and equipment parameters.",
    },
    {
      id: 8,
      title: "Offshore Construction",
      video: "/assets/Videos/ComponentAssemblyNew.mp4",
      thumbnail: "/assets/Thumbnails/ComponentAssembly.png",

      description:
        "Discrete Event Simulation Project developed for BMT using Flexsim, for analyzing proposed facility layout for offshore construction project. " +
        "Wind turbines constructed from several comopnents, stored in stockpiles on construction area and assembled by A* travellers, vessel collection of constructed turbine sections on JIT basis. " +
        "Turbine production rate linked to facility layout, construction and transport facilities.",
    },
  ];

  const currentProjects =
    activeTab === "personal" ? personalProjects : professionalProjects;

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % currentProjects.length);
  };

  const prevProject = () => {
    setCurrentProject(
      (prev) => (prev - 1 + currentProjects.length) % currentProjects.length
    );
  };

  const goToProject = (index: number) => {
    setCurrentProject(index);
  };

  const handleTabChange = (tab: "personal" | "professional") => {
    setActiveTab(tab);
    setCurrentProject(0); // Reset to first project when switching tabs
  };

  return (
    <div className="portfolio">
      <header className="portfolio-header">
        <h1>Andrew Jovaras Portfolio</h1>
        <p>
          Developing Cross Platform Applications and Discrete Event Simulations
        </p>

        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-label">Email:</span>
            <a
              href="mailto:your.andrewjovaras@gmail.com"
              className="contact-link"
            >
              andrewjovaras@gmail.com
            </a>
          </div>

          <div className="contact-item">
            <span className="contact-label">GitHub:</span>
            <a
              href="https://github.com/drewcydrew"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              github.com/drewcydrew
            </a>
          </div>
        </div>
      </header>

      <div className="tabs">
        <button
          className={`tab-btn ${activeTab === "personal" ? "active" : ""}`}
          onClick={() => handleTabChange("personal")}
        >
          Personal Projects
        </button>
        <button
          className={`tab-btn ${activeTab === "professional" ? "active" : ""}`}
          onClick={() => handleTabChange("professional")}
        >
          Professional Experience
        </button>
      </div>

      <div className="tab-book-container">
        <div className="tab-content-info">
          {activeTab === "personal" ? (
            <div className="tab-description">
              <p>
                Cross-platform applications designed to run seamlessly on web
                and mobile devices. These projects showcase full-stack
                development skills with responsive design and multi-platform
                compatibility.
              </p>
            </div>
          ) : (
            <div className="tab-description">
              <p>
                Previous work at{" "}
                <a
                  href="https://www.bmt.org/services/asset-monitoring-sustainment/discrete-event-simulation-for-engineering-systems/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="company-link"
                >
                  BMT
                </a>{" "}
                mostly consisted of the development of discrete event
                simulations for the purposes of providing logistics advice,
                along with development of data dashboards and bespoke software
                applications. References available upon request.
              </p>
            </div>
          )}
        </div>

        <div className="carousel-container">
          <div className="carousel">
            <div className="project-card">
              <div className="project-header">
                <h2>{currentProjects[currentProject].title}</h2>
              </div>
              {currentProjects[currentProject].video ? (
                <video
                  src={currentProjects[currentProject].video}
                  className="project-video"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  controlsList="nodownload"
                />
              ) : (
                <img
                  src={currentProjects[currentProject].image}
                  alt={currentProjects[currentProject].title}
                  className="project-image"
                />
              )}
              <div className="project-content">
                <p>{currentProjects[currentProject].description}</p>
                {activeTab === "personal" && (
                  <div className="platform-buttons">
                    {currentProjects[currentProject].webUrl && (
                      <a
                        href={currentProjects[currentProject].webUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="platform-btn web-btn"
                      >
                        <span className="btn-icon">🌐</span>
                        Open Web App
                      </a>
                    )}
                    {currentProjects[currentProject].androidUrl && (
                      <a
                        href={currentProjects[currentProject].androidUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="platform-btn android-btn"
                      >
                        <span className="btn-icon">⚡</span>
                        Android
                      </a>
                    )}
                    {currentProjects[currentProject].iosUrl && (
                      <a
                        href={currentProjects[currentProject].iosUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="platform-btn ios-btn"
                      >
                        <span className="btn-icon">🍏</span>
                        iOS
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="carousel-navigation">
              <button className="carousel-btn prev" onClick={prevProject}>
                &#8249;
              </button>
              <button className="carousel-btn next" onClick={nextProject}>
                &#8250;
              </button>
            </div>
          </div>

          <div className="carousel-indicators">
            {currentProjects.map((project, index) => (
              <button
                key={index}
                className={`indicator ${
                  index === currentProject ? "active" : ""
                }`}
                onClick={() => goToProject(index)}
              >
                {project.thumbnail ? (
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="indicator-image"
                  />
                ) : project.video ? (
                  <video
                    src={project.video}
                    className="indicator-video"
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="indicator-image"
                  />
                )}
                <div className="indicator-overlay">
                  <span className="indicator-text">{project.title}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="project-counter">
        {currentProject + 1} / {currentProjects.length}
      </div>
    </div>
  );
}

export default App;
