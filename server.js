require('dotenv').config()

// this is how you import a module in node.js
const express = require('express');
const workoutRoutes = require('./routes/workouts')


// this is the express app
const app = express();

//this is middleware - fires for every req that comes in
app.use(express.json())
app.use((req,res,next)=> {
    console.log(req.path, req.method)
    next()
})

//routes
// app.get('/', (req, res) => {
//     res.json({mssg: 'Welcome to the app'})
// });

app.use('/api/workouts',workoutRoutes)

// listen for requests
app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}!`);
});