const express = require('express');
const router = express.Router();
const { getTask, setTask, updateTask, deleteTask } = require('../controllers/taskController')
const { protect } = require('../middleware/authMiddleware')

router.get('/', protect, getTask)

router.post("/", protect, setTask)

router.put("/:id", protect, updateTask)

router.delete("/:id", protect, deleteTask)

module.exports = router