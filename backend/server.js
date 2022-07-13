const express = require("express"); // Import express module
const dotenv = require("dotenv").config(); // Import dotenv module
const port = process.env.PORT || 5000; // Set port to 5000 or the port defined in the .env file

const app = express(); // create an instance of express

app.use("/api/goals", require("./routes/goalRoutes")); // require the goalRoutes.js file and use it for the /api/goals route


app.listen(port, () => { // listen on port 5000
    console.log(`Server started on port ${port}`); // log to the console that the server has started
    } 
);