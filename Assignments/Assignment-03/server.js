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
/*const expr
// imports express to handle server
const express = require("express");
const projectData = require("./modules/projects"); // import project data

const app = express(); // initializes an express app
const HTTP_PORT = process.env.PORT || 3000; 
// http port sets port no if not default port is 3000


// Initializes project data before starting the server
// once initialization is successful, the server starts listening on specified port
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

// GET "/" get requests data from server
// this route simply sends a message with name & id when home page is acccesed
app.get("/", (req, res) => {
  res.send("Assignment 2: Shivani Vijay - 148493232");
});

// GET "/solutions/projects"
// returns all available projects in JSON format
app.get("/solutions/projects", (req, res) => {
  projectData
    .getAllProjects() // calls this function if success it responds with list of porjects
    .then((projects) => {
      res.json(projects);
    })
    .catch((err) => { // if error then it sends a code of 500
      res.status(500).send(err);
    });
});

// GET "/solutions/projects/id-demo"
// fetches & returns project with ID 9
app.get("/solutions/projects/id-demo", (req, res) => {
  projectData
    .getProjectById(9) // calls this and returns project in json format
    .then((project) => {
      res.json(project);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

// GET "/solutions/projects/sector-demo"
// returns all projects related to agriculture sector
app.get("/solutions/projects/sector-demo", (req, res) => {
  projectData
    .getProjectsBySector("agriculture") // calls this and prints in json
    .then((projects) => {
      res.json(projects);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});
*/

const express = require("express");
const projectData = require("./modules/projects");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public')); // Make public folder static

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
  res.sendFile(__dirname + "/views/home.html"); // Serve home.html
});

// GET "/about"
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html"); // Serve about.html
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
  res.status(404).sendFile(__dirname + "/views/404.html"); // Serve 404.html
});
