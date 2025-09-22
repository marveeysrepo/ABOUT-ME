require("dotenv").config();
// Create express 

 const express = require("express")
//  create express application
const app = express();
const bodyParser = require("body-parser");
const contactRouter = require('./routes/contact')
 
// create path
const path = require("path");
//initialize  port
const port = 8080

//use middleware to parse request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
// use express app to serve static
app.use(express.static(path.join(__dirname, "public"), {}));

//use contact form route for submit route
app.use('/submitForm', contactRouter);
// Listen to port
app.listen(port, () => {
    console.log(`Server is running on https://127.0.0.1:${port}`)});