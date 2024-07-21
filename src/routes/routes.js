const { Router } = require('express')
const cursosRoutes = require('./cursos.routes')
const professresRoutes = require('./professores.routes')


const routes = new Router()

routes.use('/cursos', cursosRoutes)
routes.use('/professores', professresRoutes)

module.exports = routes