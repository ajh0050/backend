const express = require('express')

const router = express.Router()

// get all workouts
router.get('/', (req,res) => {
    res.json({mssg: 'GET all workouts'})
})

// get a single workout
router.get('/:id', (req,res) => {
    res.json({mssg: 'Get a single workout'})
})

// post a new workout
router.post('/', (req,res) => {
    res.json({mssg: 'post a new workout'})
})

// delete a new workout
router.delete('/:id', (req,res) => {
    res.json({mssg: 'delete a new workout'})
})

// update a new workout
router.patch('/:id', (req,res) => {
    res.json({mssg: 'update a new workout'})
})

module.exports = router 