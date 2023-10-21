const getAllTasks = (req, res) =>{
    res.send("All tasks");
}

const createTask = (req, res)=>{
    res.send("Task Created.")
}

const getTask = (req, res)=>{
    res.send("Get Task.")
}

const updateTask = (req, res)=>{
    res.send("Task updated.")
}

const deleteTask = (req, res)=>{
    res.send("Task deleted.")
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}