import $ from 'jquery'

function loadIncludes(parent) {
    if (!parent) parent = 'body'
    $(parent).find('[wm-include]').each(function(index, elemento) {
        const url = $(elemento).attr('wm-include')
        $.ajax({
            url, 
            success(data) {
                $(elemento).html(data) // Inclui o conteúdo do html dentro do elemento
                $(elemento).attr('wm-include') // remove o atributo para garantir que não vai processar mais de uma vez

                loadIncludes(elemento) // Chama novamente, para buscar dentro dos filhos caso tenha propriedades com 'wm-include'
            }
        })
    })
}

loadIncludes() // Inicia o processamento