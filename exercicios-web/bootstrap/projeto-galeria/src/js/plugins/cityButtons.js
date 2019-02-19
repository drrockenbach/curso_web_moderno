
import $ from "jQuery"
import { onLoadHtmlSuccess } from '../core/includes'

const duration = 300

function filterByCity(city) {
    $('[wm-city]').each(function (i, e) {
        const isTarget = $(this).attr('wm-city') == city || city === null

        if (isTarget) {
            $(this).parent().removeClass('d-none') // Remove a classe que esconde o pai, adicionado abaixo
            $(this).fadeIn(duration) // Faz aparecer.
        } else {
            $(this).fadeOut(duration, () => {
                $(this).parent().addClass('d-none') // para realmente esconder a imagem, se não fica bugado o layout
            }) // Faz desaparecer.

        }

    })
}


$.fn.cityButtons = function() {
    const cities = new Set // Set não permite repetição
    $('[wm-city]').each(function(i, e) {
        cities.add($(e).attr('wm-city')) // Pega o conteúdo de wm-city ex: New York
    })

    // Transforma cada cidade única em um botão
    const btns = Array.from(cities).map(city => {
        const btn = $('<button>').addClass(['btn', 'btn-info']).html(city)
        btn.click(e => filterByCity(city))
        return btn
    })

    //Cria botão todas
    const btnAll = $('<button>').addClass(['btn', 'btn-info', 'active']).html('Todas')
    btnAll.click(e => filterByCity(null))
    btns.push(btnAll)

    // Coloca todos os botões dentro de um grupo de botões
    const btnGroup = $('<div>').addClass(['btn-group'])
    btnGroup.append(btns)

    // cityButtons.html(btnGroup)
    $(this).html(btnGroup)
    return this
}

onLoadHtmlSuccess(function () {
    $('[wm-city-buttons').cityButtons()
})
