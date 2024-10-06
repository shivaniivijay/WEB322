/********************************************************************************
*  WEB322 – Assignment 02
* 
*  I declare that this assignment is my own work in accordance with Seneca's
*  Academic Integrity Policy:
* 
*  https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
* 
*  Name: Shivani Vijay Student ID: 148493232 Date: 05/10/2024
*
********************************************************************************/

const express = require("express");
const projectData = require("./modules/projects");

const app = express();
const PORT = process.env.PORT || 3000; 


// Initializes project data before starting the server
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
  res.send("Assignment 2: Shivani Vijay - 148493232");
});

// GET "/solutions/projects"
app.get("/solutions/projects", (req, res) => {
  projectData
    .getAllProjects()
    .then((projects) => {
      res.json(projects);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

// GET "/solutions/projects/id-demo"
app.get("/solutions/projects/id-demo", (req, res) => {
  projectData
    .getProjectById(9)
    .then((project) => {
      res.json(project);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

// GET "/solutions/projects/sector-demo"
app.get("/solutions/projects/sector-demo", (req, res) => {
  projectData
    .getProjectsBySector("agriculture")
    .then((projects) => {
      res.json(projects);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});