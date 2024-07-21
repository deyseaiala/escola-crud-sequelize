const connection = require("../database/connection")
const { DataTypes } = require('sequelize')


const Curso = connection.define(
    "cursos", {
        nome: {
            type: DataTypes.STRING
        },
        duracao: {
            type: DataTypes.INTEGER
        }
    }
)

module.exports = Curso