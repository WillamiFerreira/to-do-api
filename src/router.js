const tasksController = require('./controllers/tasksController');
const express = require('express');



const router = express.Router();


router.get('/tasks', tasksController.getAllTasks);
router.get('/:id', tasksController.getUniqueTask);
router.post('/tasks', tasksController.addTask);
router.delete('/:id', tasksController.deleteTask);
router.put('/:id', tasksController.updateTask);

module.exports = router;