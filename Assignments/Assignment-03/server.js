/********************************************************************************
*  WEB322 – Assignment 03
* 
*  I declare that this assignment is my own work in accordance with Seneca's
*  Academic Integrity Policy:
* 
*  https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
* 
*  Name: Shivani Vijay Student ID: 148493232 Date: 23/10/2024
*
********************************************************************************/

const express = require("express");
const projectData = require("./modules/projects");

const app = express();
const HTTP_PORT = process.env.PORT || 3000;
const port = process.env.PORT || 3000;
app.use(express.static('public'));

projectData
  .initialize()
  .then(() => {
    app.listen(HTTP_PORT, () => {
      console.log(`Server is listening on port ${HTTP_PORT}`);
    });
  })
  .catch((err) => {
    console.log("Unable to start the server:", err);
  });

// GET "/"
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/home.html"); // Serves the home.html
});

// GET "/about"
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html"); // Serve the about.html
});

// GET "/solutions/projects"
app.get("/solutions/projects", (req, res) => {
  const sector = req.query.sector;
  if (sector) {
    projectData.getProjectsBySector(sector)
      .then((projects) => {
        res.json(projects);
      })
      .catch((err) => {
        res.status(404).send(err); // 404 for sector not found
      });
  } else {
    projectData.getAllProjects()
      .then((projects) => {
        res.json(projects);
      })
      .catch((err) => {
        res.status(500).send(err); // Internal Server Error
      });
  }
});

// GET "/solutions/projects/id"
app.get("/solutions/projects/:id", (req, res) => {
  const projectId = parseInt(req.params.id, 10);
  projectData.getProjectById(projectId)
    .then((project) => {
      res.json(project);
    })
    .catch((err) => {
      res.status(404).send(err); // Project not found
    });
});

// Custom 404 error page
app.use((req, res) => {
  res.status(404).sendFile(__dirname + "/views/404.html"); // Serves 404.html
});
