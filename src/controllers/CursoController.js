const Curso = require("../models/Curso")


class CursoController{

    async criar(request, response){

        try {
            const dados = request.body

            if(!dados.nome || !dados.duracao){
                return response.status(400).json({mensagem: "Nome e duração sao obrigatórios, por favor complete os dados."})
            }

            const curso = await Curso.create(dados)
            response.status(201).json(curso)

        } catch (error) {
            console.log(error)
            response.status(500).json({
                mensagem: 'Erro ao cadastrar novo curso'
            }) 
        }
    }

    async listar(request, response){
        try {
            const cursos = await Curso.findAll()
            return response.status(201).json(cursos)
 
         } catch (error) {
             console.log(error)
             response.status(500).json({
                 mensagem: 'Erro'
             })
         }
    }

    async listarPeloNome(request, response){
        try {
            const dados = request.query
            const curso = await Curso.findOne({ where: { nome: dados.nome } })
            
            return response.status(200).json(curso)
 
         } catch (error) {
             console.log(error)
             response.status(500).json({
                 mensagem: 'Erro'
             })
         }
    }

    async atualizar(request, response){
        try {
            const dados = request.body
            const id = request.params.id

            const curso = await Curso.findByPk(id)
            
            if(!curso) {
                return response.status(404).json({ mensagem: 'Curso não encontrado' })
            }

            curso.nome = dados.nome
            curso.duracao = dados.duracao
            await curso.save()
            response.status(200).json(curso)
            

        } catch (error) {
            console.log(error)
             response.status(500).json({
                 mensagem: 'Erro'
             })
        }
    }

    async deletar(request, response){
        try {
            const id = request.params.id
            const curso = await Curso.findByPk(id)

            if(!curso) {
                return response.status(404).json({ mensagem: 'Curso não encontrado' })
            }

            await curso.destroy()
            response.status(204).json()
            
        } catch (error) {
            response.status(500).json({
                mensagem: 'Erro ao deletar curso'
            })
        }
    }
}

module.exports = new CursoController()