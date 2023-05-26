const express = require('express')
const {
    getWorkouts,
    getWorkout,
    createWorkout
} = require('../controllers/workoutController')
const router = express.Router()

// get all workouts
router.get('/', getWorkouts)

// get a single workout
router.get('/:id', getWorkout)

// post a new workout
router.post('/', createWorkout)

// delete a new workout
router.delete('/:id',  (req, res) => {
    res.json({ mssg: 'delete a new workout' })
})

// update a new workout
router.patch('/:id', (req, res) => {
    res.json({ mssg: 'update a new workout' })
})

module.exports = router 