const express = require('express');
const router = express.Router();

const { getAllTask, createTask, getTask, updateTask, deleteTask, } = require('../controllers/tasks')
// const createTask = require('../controllers/tasks')
// const getTask = require('../controllers/tasks')
// const updateTasks = require('../controllers/tasks')
// const deleteTask = require('../controllers/tasks')

router.route('/').get(getAllTask).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)
// router.route('/').get(getAllTask).post(createTask)
// router.route('/').get(getAllTask).post(createTask)

module.exports = router