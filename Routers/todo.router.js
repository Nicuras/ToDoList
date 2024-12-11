const router = require('express').Router();
const Todocontroller = require("../Controller/todo.controller");

router.post('/storeTodo',Todocontroller.createTodo);

router.post('/getuserTodoList',Todocontroller.getUserTodo);

router.post('/deleteTodo',Todocontroller.deleteTodo);



module.exports = router;