const getAllTask = (req, res) => {
    res.send('all items from the file')
}

const createTask = (req, res) => {
    res.json(req.body)
}

const getTask = (req, res) => {
    res.json({ id: req.params.id })
}
const updateTask = (req, res) => {
    res.send('update task')
}
const deleteTask = (req, res) => {
    res.send('delete task')
}

module.exports = {
    getAllTask,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}
// module.exports = createTask
// module.exports = getTask
// module.exports = updateTask
// module.exports = deleteTask