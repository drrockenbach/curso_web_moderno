import $ from 'jquery'

// Para resolver o problema de ao carregar html via ajax os JS não serem executados
// Vai criar uma lista de funções callback, que serão chamadas quando uma página html for carregada
const loadHtmlSuccessCallbacks = []
export function onLoadHtmlSuccess(callback) {
    // Se não existir dentro do array
    if (!loadHtmlSuccessCallbacks.includes(callback)) {
        loadHtmlSuccessCallbacks.push(callback)
    }
}

function loadIncludes(parent) {
    if (!parent) parent = 'body'
    $(parent).find('[wm-include]').each(function(index, elemento) {
        const url = $(elemento).attr('wm-include')
        $.ajax({
            url, 
            success(data) {
                $(elemento).html(data) // Inclui o conteúdo do html dentro do elemento
                $(elemento).attr('wm-include') // remove o atributo para garantir que não vai processar mais de uma vez

                loadHtmlSuccessCallbacks.forEach(callback => callback(data))

                loadIncludes(elemento) // Chama novamente, para buscar dentro dos filhos caso tenha propriedades com 'wm-include'
            }
        })
    })
}

loadIncludes() // Inicia o processamento