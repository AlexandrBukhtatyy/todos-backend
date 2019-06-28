var express = require('express');
var router = express.Router();
var {throwError} = require('../../helpers');
var models = require("../../models");

router.get('/', function (req, res) {
    console.log('sequelizeQueryData: ', req.sequelizeQueryData);
    models.Todo.findAll({
        ...req.sequelizeQueryData
    }).then(
        (response) => {
            res.status(200).json(response);
        },
        (error) => {
            throwError(500, '--', '--');    
        }
    )
});

router.get('/:id', function (req, res) {
    models.Todo.findByPk(req.params.id).then(
        (response) => {
            res.status(200).json(response);
        },
        (error) => {
            throwError(500, '--', '--');    
        }
    )
});

router.post('/', function (req, res) {
    var todoData = {
        // 'author': req.body.author,
        'title': req.body.title,
        'text': req.body.text,
        'status': req.body.status
    }
    models.Todo.create(todoData).then(
        (response) => {
            res.status(200).json(response);
        },
        (error) => {
            throwError(500, '--', '--');    
        }        
    )
});

router.put('/:id', function (req, res) {
    var todoData = {
        ...(req.body.title && { title: req.body.title }),
        ...(req.body.text && { text: req.body.text }),
        ...(req.body.status && { status: req.body.status })
    }
    models.Todo.update(todoData, {
        where: { id: req.params.id }
    }).then(
        (response) => {
            res.status(200).json(response);
        },
        (error) => {
            throwError(500, '--', '--');    
        }
    )
});

router.delete('/:id', function (req, res) {
    models.Todo.destroy({
        where: {
           id: req.params.id
        }
     }).then(function(rowDeleted){
       if(rowDeleted === 1){
          res.status(200).json({});
        }
     }, function(err){
        throwError(500, '--', '--');
     });
});

module.exports = router;
