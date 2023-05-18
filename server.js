require('dotenv').config()

// this is how you import a module in node.js
const express = require('express');


// this is the express app
const app = express();

//this is middleware - fires for every req that comes in
app.use((req,res,next)=> {
    console.log(req.path, req.method)
    next()
})

//routes
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the app'})
});

// listen for requests
app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}!`);
});