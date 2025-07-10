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
  const [activeTab, setActiveTab] = useState<"web" | "simulation">("web");

  const webProjects: Project[] = [
    {
      id: 1,
      title: "Double Bill",
      image: "/assets/DoubleBill.png",
      description:
        "Movie Comparison Application, takes actor/media pairs and returns a list of shared properties.",
      webUrl: "https://iamdb.info/",
    },
    {
      id: 2,
      title: "Indigo Football",
      image: "/assets/IndigoFootball.png",
      description: "Roster Allocation App.",
      webUrl: "https://indigofootball.org/",
      iosUrl: "https://apps.apple.com/us/app/indigo-football/id6740720730",
    },
    {
      id: 3,
      title: "Collection Paradise",
      image: "/assets/CollectionParadise.png",
      description: "Library App.",
      webUrl: "https://collectionparadise.com.au/",
    },
    {
      id: 4,
      title: "Eventron",
      image: "/assets/Eventron.png",
      description: "Discrete Event Simulation App.",
      webUrl: "https://eventron-umal.onrender.com/",
    },
  ];

  const simulationProjects: Project[] = [
    {
      id: 5,
      title: "Fleet Support",
      video: "/assets/Videos/FleetSupport.mp4",
      thumbnail: "/assets/Thumbnails/FleetSupport.png",
      description: "Discrete Event Simulation Project.",
    },
    {
      id: 6,
      title: "Crew Movement",
      video: "/assets/Videos/CrewMovement.mp4",
      thumbnail: "/assets/Thumbnails/CrewMovement.png",
      description: "Discrete Event Simulation Project.",
    },
    {
      id: 7,
      title: "Assembly Simulation",
      video: "/assets/Videos/ComponentAssembly.mp4",
      thumbnail: "/assets/Thumbnails/ComponentAssembly.png",
      description: "Discrete Event Simulation Project.",
    },
  ];

  const currentProjects =
    activeTab === "web" ? webProjects : simulationProjects;

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

  const handleTabChange = (tab: "web" | "simulation") => {
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
      </header>

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

      <div className="tabs">
        <button
          className={`tab-btn ${activeTab === "web" ? "active" : ""}`}
          onClick={() => handleTabChange("web")}
        >
          Web/Mobile Apps
        </button>
        <button
          className={`tab-btn ${activeTab === "simulation" ? "active" : ""}`}
          onClick={() => handleTabChange("simulation")}
        >
          Simulation Projects
        </button>
      </div>

      <div className="carousel-container">
        <div className="carousel">
          <button className="carousel-btn prev" onClick={prevProject}>
            &#8249;
          </button>

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
              {activeTab === "web" && (
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

          <button className="carousel-btn next" onClick={nextProject}>
            &#8250;
          </button>
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

      <div className="project-counter">
        {currentProject + 1} / {currentProjects.length}
      </div>
    </div>
  );
}

export default App;
