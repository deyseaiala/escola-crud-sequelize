const { Router } = require('express')
const ProfessorController = require('../controllers/ProfessorController')


const professresRoutes = new Router()

professresRoutes.post('/', ProfessorController.criar)
professresRoutes.get('/', ProfessorController.listar)
professresRoutes.get('/', ProfessorController.listarPeloNome)
professresRoutes.put('/:id', ProfessorController.atualizar)
professresRoutes.delete('/id', ProfessorController.deletar)

module.exports = professresRoutes