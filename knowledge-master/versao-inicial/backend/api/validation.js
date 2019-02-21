/*
Arquivo de validações - O próprio consign vai carregar elas e disponibilizar dentro do app
Da pra colocar aqui as diversas validações de sistema.
Formato de e-mail, senha....

*/

module.exports = app => {

    // Validar se algum valor que deveria existir está preenchido
    function existsOrError(value, msg) {
        if (!value) throw msg
        if (Array.isArray(value) && value.length === 0) throw msg
        if (typeof value === 'string' && !value.trim()) throw msg
    }

    // Validar se um valor que não deveria existir existe
    function notExistsOrError(value, msg) {
        try {
            existsOrError(value, msg)
        } catch (msg) {
            return // Se der erro ao chamar a função que valida se existe, quer dizer que está tudo certo
        }
        throw msg
    }

    function equalsOrError(valueA, valueB, msg) {
        if (valueA !== valueB) throw msg
    }

    return { existsOrError, notExistsOrError, equalsOrError }

}
