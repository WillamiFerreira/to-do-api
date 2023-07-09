const tasksModels = require('../modules/tasksModel');


const getAllTasks = (req, res) => {
    const tasks = tasksModels.getAllTasks();
    res.send(tasks).end()
};

const getUniqueTask = (req, res) =>{
    const pickedTask = tasksModels.getUniqueTask(req.params.id);
    res.send(pickedTask).end();

};

const addTask = (req, res) => {
    tasksModels.addTask(req.body)
    res.end(() => console.log('Tarefa adicionada com sucesso!'))
};

const deleteTask = (req, res) => {
    tasksModels.deleteTask(req.params.id)
    res.end(() => console.log('Tarefa excluida com sucesso!'))

};

const updateTask = (req, res) => {
    tasksModels.updateTask(req.params.id, req.body)
    res.end(() => console.log('Tarefa atualizada com sucesso!'))

}

module.exports = {
    getAllTasks,
    getUniqueTask,
    addTask, 
    deleteTask, 
    updateTask
};