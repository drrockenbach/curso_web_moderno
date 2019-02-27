import axios from 'axios'

const success = res => res
const error = err => {
    /* em caso de 401, redireciona para a página inicial. Na página inicial, sempre antes de montar, ele verifica se o token está válido e caso não esteja    
       desloga o usuário. Em caso de outros 401 que não for expiração de token, apenas irá para a página inicial */
    if (401 === err.response.status) {
        window.location = '/'
    } else {
        return Promise.reject(err)
    }
}

axios.interceptors.response.use(success, error)