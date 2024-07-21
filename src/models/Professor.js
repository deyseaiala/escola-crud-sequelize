const connection = require("../database/connection")
const { DataTypes } = require('sequelize')


const Professor = connection.define(
    "professores", {
        nome: {
            type: DataTypes.STRING
        },
        curso_id: {
            type: DataTypes.INTEGER
        }
    }
)

module.exports = Professor