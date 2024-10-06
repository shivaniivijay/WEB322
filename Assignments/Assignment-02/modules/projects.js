// Loads projectData and sectorData from the JSON files
const projectData = require("../data/projectData");
const sectorData = require("../data/sectorData");

// Initialize an empty array to store the projects
let projects = [];

// Initialize function
function initialize() {
  return new Promise((resolve, reject) => {
    try {
      projects = projectData.map((project) => {
        // Find the sector by sector_id
        const sector = sectorData.find((s) => s.id === project.sector_id);
        return {
          ...project,
          sector: sector ? sector.sector_name : "Unknown",
        };
      });
      resolve();
    } catch (err) {
      reject("Unable to initialize project data");
    }
  });
}

// Get all projects
function getAllProjects() {
  return new Promise((resolve, reject) => {
    if (projects.length > 0) {
      resolve(projects);
    } else {
      reject("No projects available");
    }
  });
}

// Get project by ID
function getProjectById(projectId) {
  return new Promise((resolve, reject) => {
    const project = projects.find((p) => p.id === projectId);
    if (project) {
      resolve(project);
    } else {
      reject("Unable to find requested project");
    }
  });
}

// Get projects by sector
function getProjectsBySector(sector) {
  return new Promise((resolve, reject) => {
    const filteredProjects = projects.filter((p) =>
      p.sector.toLowerCase().includes(sector.toLowerCase())
    );
    if (filteredProjects.length > 0) {
      resolve(filteredProjects);
    } else {
      reject("Unable to find requested projects");
    }
  });
}

// Export functions
module.exports = { initialize, getAllProjects, getProjectById, getProjectsBySector };
