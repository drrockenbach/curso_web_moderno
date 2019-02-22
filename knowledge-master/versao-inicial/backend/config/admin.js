// Não vai ser utilizado pelo consign
// Será utilizado em alguns endpoints que requerem permissao de admin.
// No caso quando chegar num endpoint, vai ser utilizado esse middleware. 
// O parâmetro de entrada vai ser o próprio endpoint. Se o usuário for admin, então chama o middleware, que será o endpoint e continua com o fluxo.
// Caso contrário, retorna 401 e não entra no endpoint
// Para melhor entendimento verificar utilização no arquivo de rotas, routes.js 
module.exports = middleware => {
    return (req, res, next) => { // retorna uma funcao middleware
            if (req.user.admin) {
                middleware(req, res, next)
            } else {
                res.status(401).send('Usuário não é administrador.')
            }
        }
    
}