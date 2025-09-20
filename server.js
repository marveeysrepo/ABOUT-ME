// Create express 
 const express = require("express")
//  create express application
const app = express();
 
// create path
const path = require("path");
//initialize  port
const port = 8080
const oneYear = 31536000;
// use express app to serve static
app.use(express.static(path.join(__dirname, "public"), {
    maxAge: oneYear * 1000
}));

// Listen to port
app.listen(port, () => {
     console.log(`Server is running on https://127.0.0.1:${port}`)
 })