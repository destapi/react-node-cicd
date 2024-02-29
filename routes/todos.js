const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

let todos = [{id: uuidv4(), task: "soma kitabu", completed: false,}, {id: uuidv4(), task: "pika mchele", completed: false,}];

router.get('/', function(req, res, next) {
  res.json(todos);
});

router.post('/', function(req, res, next){
  const {task} = req.body;
  const todo = ({id: uuidv4(), task, completed: false});
  todos.push(todo)
  res.json(todo)
});

router.put('/:id', function(req, res, next){
  const id = req.params["id"];
  let target = {};
  for(let todo of todos){
    console.log("todo's id", todo.id, "req id", id)
    if(todo.id === id){
      todo.completed = !todo.completed
      target = {...todo};
      break;
    }
  }
  res.json(target);
});

router.delete('/:id', function(req, res, next){
  const id = req.params["id"];
  todos = todos.filter(todo => todo.id === id);
  res.sendStatus(204)
});

module.exports = router;
