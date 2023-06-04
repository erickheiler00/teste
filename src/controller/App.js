// caso a rota não seja encontrada
// middleware
// request, response, next
// req: solicitação
// resp: resposta
// next: chama o proximo middleware ou rota

const AppController = {
    notFound(req, res, next){
        var err = new Error('Not Found')
        err.status = 404
        next(err)
    },

    gerenciaErro(err, req, res, next){
        if(err.status !== 404){
            console.log(err.stack) // rastreamento de pilha, para mais informações sobre o erro
        }
        // define o status da resposta como o status do erro
        // se não estiver definido define como erro 500
        res.status(err.status || 500).json({err:err.message}) // envia uma resposta json com a mensagem de erro
        // erro 404 = URL não encontrada
        // erro 500 = erro interno do servidor
    }
}

export default AppController