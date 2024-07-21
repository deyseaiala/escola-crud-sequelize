const Professor = require("../models/Professor")


class ProfessorController{

    async criar(request, response){

        try {
            const dados = request.body

            if(!dados.nome || !dados.curso_id){
                return response.status(400).json({mensagem: "Nome e id do curso sao obrigatórios, por favor complete os dados."})
            }

            const professor = await Professor.create(dados)
            response.status(201).json(professor)

        } catch (error) {
            console.log(error)
            response.status(500).json({
                mensagem: "Erro ao cadastrar novo professor"
            }) 
        }
    }

    async listar(request, response){
        try {
            const professores = await Professor.findAll()
            return response.status(200).json(professores)
 
         } catch (error) {
             console.log(error)
             response.status(500).json({
                 mensagem: "Erro"
             })
         }
    }

    async listarPeloNome(request, response){
        try {
            const dados = request.query
            const professor = await Professor.findOne({ where: { nome: dados.nome } })
            console.log(professor)

            if(professor){
                response.status(200).json(professor)
            } else{
                response.status(404).json({
                    mensagem: "Professor não encontrado"
                })
            }
            

         } catch (error) {
             console.log(error)
             response.status(500).json({
                 mensagem: "Erro"
             })
         }
    }

    async atualizar(request, response){
        try {
            const dados = request.body
            const id = request.params.id

            const professor = await Professor.findByPk(id)
            
            if(!professor) {
                return response.status(404).json({ mensagem: "Professor não encontrado" })
            }

            professor.nome = dados.nome
            professor.curso_id = dados.curso_id
            await professor.save()
            response.status(200).json(professor)
            

        } catch (error) {
            console.log(error)
             response.status(500).json({
                 mensagem: "Erro"
             })
        }
    }

    async deletar(request, response){
        try {
            const id = request.params.id
            const professor = await Professor.findByPk(id)

            if(!professor) {
                return response.status(404).json({ mensagem: "Professor não encontrado" })
            }

            await professor.destroy()
            response.status(204).json()
            
        } catch (error) {
            response.status(500).json({
                mensagem: "Erro ao deletar professor"
            })
        }
    }
}

module.exports = new ProfessorController()