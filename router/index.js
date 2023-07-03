const express = require('express')
const router = express.Router()
const Controller = require('../controllers/controller')

router.get('/tasks', Controller.getTasks)
router.post('/tasks', Controller.postTask)
router.get('/tasks/:id', Controller.getTasksById)

module.exports = router 