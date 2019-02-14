
function novoElemento(tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}

function Barreira(reversa = false) {
    this.elemento = novoElemento('div', 'barreira')

    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div', 'corpo')

    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)

    this.setAltura = altura => corpo.style.height = `${altura}px`

}

function ParDeBarreiras(altura, abertura, x) {
    this.elemento = novoElemento('div', 'par-de-barreiras')
    this.superior = new Barreira(true)
    this.inferior = new Barreira(false)

    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)

    this.sortearAbertura = () => {
        const alturaSuperior = Math.random() * (altura - abertura)
        const alturainferior = altura - abertura - alturaSuperior
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturainferior)
    }

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
    this.setX = (x) => this.elemento.style.left = `${x}px`
    this.getLargura = () => this.elemento.clientWidth

    this.sortearAbertura()
    this.setX(x)

}

// const b = new ParDeBarreiras(700, 200, 400)
// document.querySelector('[wm-flappy]').appendChild(b.elemento)

function Barreiras(altura, largura, abertura, espaco, notificarPonto) {

    this.pares = [
        new ParDeBarreiras(altura, abertura, largura), // a primeira barreira vai ficar fora da tela, logo que acaba a tela do jogo
        new ParDeBarreiras(altura, abertura, largura + espaco), // a próxima, vai ficar na largura total, fora da tela, mais o espaço entre uma barreira e outra
        new ParDeBarreiras(altura, abertura, largura + espaco * 2),
        new ParDeBarreiras(altura, abertura, largura + espaco * 3)
    ]

    const deslocamento = 3

    this.animar = () => {
        this.pares.forEach(par => {
            par.setX(par.getX() - deslocamento ) 
            console.log('animar getX: ', par.getX())
            // quando o elemento sair da área do jogo
            if (par.getX() < -par.getLargura()) {
                par.setX(par.getX() + (espaco * this.pares.length)) // Vai jogar o elemento para o outro lado fora da área do jogo, para que ele entre novamente na fila
                par.sortearAbertura() // Para que mude a abertura, de forma parecer ser uma nova barreira
            }

            const meio = largura / 2
            const cruzouOMeio = par.getX() + deslocamento >= meio && par.getX() < meio
            if(cruzouOMeio) {
                notificarPonto()
            }

        })
    }

}

function Passaro(alturaDoJogo) {
    let voando = false
    this.elemento = novoElemento('img', 'passaro')
    this.elemento.src = 'imgs/passaro.png'

    this.getY = () => parseInt(this.elemento.style.bottom.split('px')[0])
    this.setY = (y) => this.elemento.style.bottom = `${y}px`

    window.onkeydown = e => voando = true
    window.onkeyup = e => voando = false

    this.animar = () => {
        // Se estiver voando cresce 8 e se estiver caindo cai 5
        const novoY = this.getY() + (voando ? 8 : -5)
        const alturaMaxima = alturaDoJogo - this.elemento.clientHeight // this.elemento.clientHeight é a altura do pássaro

        if (novoY <= 0) {
            this.setY(0)
        } else if (novoY >= alturaMaxima) {
            this.setY(alturaMaxima)
        } else {
            this.setY(novoY)
        }

    }

    this.setY( alturaDoJogo / 2) // Altura inicial do pássaro

}

function Progresso() {
    this.elemento = novoElemento('span', 'progresso')
    this.atualizarPontos = pontos => {
        this.elemento.innerHTML = pontos
    }
    this.atualizarPontos(0)
}

function estaoSobrePostos(elementoA, elementoB) {

    // { getBoundingClientRect()
    //     bottom: 347.5
    //     height: 43.171875
    //     left: 930
    //     right: 990
    //     top: 304.328125
    //     width: 60
    //     x: 930
    // }

    const a = elementoA.getBoundingClientRect() // Retorna uma objecto no formato acima
    const b = elementoB.getBoundingClientRect() 

    // const horizontal = a.left + a.width >= b.left 
    //                 && b.left + b.width >= a.left
    const horizontal = a.right >= b.left 
                    && b.right >= a.left
    const vertical = a.top + a.height >= b.top
                  && b.top + b.height >= a.top
    return horizontal && vertical                  
}

function colidiu(passaro, barreiras) {
    let colidiu = false
    barreiras.pares.forEach(par => {
        if (!colidiu) {
            const superior = par.superior.elemento
            const inferior = par.inferior.elemento
            colidiu = estaoSobrePostos(passaro.elemento, superior) 
                   || estaoSobrePostos(passaro.elemento, inferior) 
        }
    })
    return colidiu
}

function FlappyBird() {
    let pontos = 0
    const areaDoJogo = document.querySelector('[wm-flappy]')
    const altura = areaDoJogo.clientHeight
    const largura = areaDoJogo.clientWidth

    const progresso = new Progresso()
    const barreiras = new Barreiras(altura, largura, 200, 400, 
        () => progresso.atualizarPontos(++pontos))
    const passaro = new Passaro(altura)

    areaDoJogo.appendChild(progresso.elemento)
    areaDoJogo.appendChild(passaro.elemento)
    
    barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))

    this.start = () => {
        // loop do jogo
        const temporizador = setInterval(() => {
            
            barreiras.animar()
            passaro.animar()

            if (colidiu(passaro, barreiras)) {
                clearInterval(temporizador)
            }

        }, 20)
    }
}

new FlappyBird().start()

// const barreiras = new Barreiras(700, 1200, 200, 400)
// const passaro = new Passaro(700)
// const areaDoJogo = document.querySelector('[wm-flappy]')

// areaDoJogo.appendChild(passaro.elemento)

// barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))

// setInterval(() => {
//     console.log('interval')
//     barreiras.animar()
//     passaro.animar()
// }, 20)