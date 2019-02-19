import React, { Component } from 'react'

export default class Saudacao extends Component {

    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }
    
    constructor(props) {
        super(props) // Precisa chamar o super para que os properties sejam enviados para o super e preenchidos
        
        // Da pra inicializar o state aqui
        // this.state = {
        //     tipo: this.props.tipo,
        //     nome: this.props.nome
        // }
        
        // Faz bind do this do contexto atual, ou seja, do componente Saudacao para a function setTipo
        // Sem isso, não da pra fazer a chamada nos eventos, onChange por exemplo, por que o this não apontaria para a classe atual
        // Da pra fazer isso direto no evento
        // this.setTipo = this.setTipo.bind(this)

    }

    setTipo(e) {
        // console.log(e.target.value)
        // this.props.tipo = e.target.value
        this.setState({tipo: e.target.value})
    }

    setNome(e) {
        this.setState({nome: e.target.value})
    }

    render() {

        const {tipo, nome } = this.state // destructuring

        return (
            <React.Fragment>
                <h1>{tipo} {nome} !</h1>
                <hr />
                {/* <input type="text" placeholder="Tipo..." value={tipo} onChange={e => this.setTipo(e)} /> */}

                {/* Da pra utilizar assim, sem ser com arrow function, mas é necessário fazer bind do this, direto aqui ou conforme feito no construtor */}
                <input type="text" placeholder="Tipo..." value={tipo} onChange={this.setTipo.bind(this)} />

                {/* Preferir com arrow function */}
                <input type="text" placeholder="Nome" value={nome} onChange={e => this.setNome(e)} />
            </React.Fragment>
        )

    }
    
}