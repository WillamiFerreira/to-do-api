const fs = require('fs');
/*o readFile é relativo a onde inicia o processo
, geralemente a raiz */
const {v4:uuidv4} = require('uuid');
const db = './src/data/users.json'

function obterDataAtual() {
    const dataAtual = new Date();
    const day = dataAtual.getDate().toString().padStart(2, '0');
    const month = (dataAtual.getMonth() + 1).toString().padStart(2, '0');
    const year = dataAtual.getFullYear();
    const stringData = `${day}/${month}/${year}`;

    return stringData;
}

const getAllTasks = () => {
    const stringData = fs.readFileSync(db, 'utf-8');
    return stringData;
};

const getUniqueTask = (pickedTaskId) => {
    const stringData = fs.readFileSync(db, 'utf-8');
    const dataObject = JSON.parse(stringData);
    const id = pickedTaskId;

    try{
        const selectedTask = dataObject.find((task) =>{
            return task.id === id;
        });
        
        return selectedTask;
        
    }catch(err){
        console.error(err)
    }

};

const addTask = (taskToAdd) => {

    const dataString = fs.readFileSync(db, 'utf-8');
    try{
        const dataObject = JSON.parse(dataString);
        const randomId = uuidv4();

        taskToAdd.id = randomId;
        taskToAdd.data = obterDataAtual()
        dataObject.push(taskToAdd)
        const newDataString = JSON.stringify(dataObject, null, 2);
        fs.writeFileSync(db, newDataString, 'utf-8');

        return ;

    } catch(erro){
        console.log('o erro ==> ' + erro)
        return

    }

};

const deleteTask = (taskToDeleteId) => {
    const stringData = fs.readFileSync(db, 'utf-8')
    //console.log(stringData)
    const dataObject = JSON.parse(stringData);
    //console.log(dataObject)
    try{
        const id = taskToDeleteId;
        //console.log(typeof id)
        let newDB = dataObject.filter(item =>{
            if (item.id != id) return item;
        })
        const newDBString = JSON.stringify(newDB, null, 2);
        fs.writeFileSync(db, newDBString, 'utf-8');

        return 
    } catch(err){
        console.log(err)
    }

};

const updateTask = (TaskToUpdateId, TaskUpdate) => {
    try{
        const stringData = fs.readFileSync(db, 'utf-8');
        //console.log(stringData)
        const dataObject = JSON.parse(stringData)
        //console.log(dataObject)

        const taskToMod = dataObject.find((task) =>{
            //console.log(typeof task.id)
            try{
                return task.id === TaskToUpdateId;
            } catch(err){
                console.error('não foi achado o ID', err)
            }
            
        });
        //console.log(taskToMod)
        const index = dataObject.indexOf(taskToMod);
        //console.log(index)

        if(!taskToMod){
            console.log('Deu erro, bicho!')
        } else{
            //task atualizada
            const updatedDataObject = {...taskToMod, ...TaskUpdate};
            dataObject[index] = updatedDataObject;
            const updatedDataObjectString = JSON.stringify(dataObject, null, 2);
            fs.writeFileSync(db, updatedDataObjectString, 'utf-8')

        }

        return

    }catch(error){
        console.error(error)
    }
    
}

module.exports = {
    getAllTasks,
    getUniqueTask,
    addTask,
    deleteTask, 
    updateTask
};