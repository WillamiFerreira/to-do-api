const tasksController = require('./controllers/tasksController');
const express = require('express');



const router = express.Router();


router.get('/tasks', tasksController.getAllTasks);
router.get('tasks/:id', tasksController.getUniqueTask);
router.post('/tasks', tasksController.addTask);
router.delete('/tasks/:id', tasksController.deleteTask);
router.put('/tasks/:id', tasksController.updateTask);

module.exports = router;