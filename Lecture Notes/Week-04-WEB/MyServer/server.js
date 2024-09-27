const express = require('express'); // Import express
const path = require('path'); // Import path module
const app = express(); // Create an instance of express

const HTTP_PORT = process.env.PORT || 8080; // Specify the port number

// Serve home.html for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

// Serve about.html for the /about route
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

// Handle 404 for any other routes
app.use((req, res) => {
    res.status(404).send("404: Page not found");
});

// Start the server
app.listen(HTTP_PORT, () => {
    console.log(`Server is listening on port ${HTTP_PORT}`); // Log the server start
});
/*const express = require('express'); // Import express
const path=require('path')
const app = express(); // receiving "app object "

const HTTP_PORT = process.env.PORT || 8080; // To specify port number to host your application

app.get('/', (req,res)=>
{
   // res.send("Hello World")
   res.sendFile(path.join(__dirname, 'views/home.html'))
})


/*app.get('/about', (req,res)=>
{
    // To test this, type http://localhost:8080/about on web browser
    res.send("Welcome to About Page")
})*/

/*app.get('/about', (req,res)=>
{
    // To test this, type http://localhost:8080/about on web browser
    res.sendFile(path.join(__dirname, '/views/about.html'))
}) // This is for about.html tests


app.listen(HTTP_PORT, () => 
   console.log(`Server is listening on port ${HTTP_PORT}`)); */// listen function to specify that the server is listening

// When we type localhost:8080 on web browser, we get " cannot get / " as the message.
