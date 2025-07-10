import { useState } from "react";
import "./App.css";

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
}

function App() {
  const [currentProject, setCurrentProject] = useState(0);
  const [activeTab, setActiveTab] = useState<"web" | "simulation">("web");

  const webProjects: Project[] = [
    {
      id: 1,
      title: "Double Bill",
      image: "./assets/DoubleBill.png",
      description: "Movie Comparison App.",
    },
    {
      id: 2,
      title: "Indigo Football",
      image: "./assets/IndigoFootball.png",
      description: "Roster Allocation App.",
    },
    {
      id: 3,
      title: "Collection Paradise",
      image: "./assets/CollectionParadise.png",
      description: "Library App.",
    },
    {
      id: 4,
      title: "Eventron",
      image: "./assets/Eventron.png",
      description: "Discrete Event Simulation App.",
    },
  ];

  const simulationProjects: Project[] = [
    {
      id: 5,
      title: "Fleet Support",
      image: "./assets/FleetSupport.png",
      description: "Discrete Event Simulation Project.",
    },
    {
      id: 6,
      title: "Crew Movement",
      image: "./assets/CrewMovement.png",
      description: "Discrete Event Simulation Project.",
    },
    {
      id: 7,
      title: "Assembly Simulation",
      image: "./assets/ComponentAssembly.png",
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
            <img
              src={currentProjects[currentProject].image}
              alt={currentProjects[currentProject].title}
              className="project-image"
            />
            <div className="project-content">
              <h2>{currentProjects[currentProject].title}</h2>
              <p>{currentProjects[currentProject].description}</p>
            </div>
          </div>

          <button className="carousel-btn next" onClick={nextProject}>
            &#8250;
          </button>
        </div>

        <div className="carousel-indicators">
          {currentProjects.map((_, index) => (
            <button
              key={index}
              className={`indicator ${
                index === currentProject ? "active" : ""
              }`}
              onClick={() => goToProject(index)}
            />
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
