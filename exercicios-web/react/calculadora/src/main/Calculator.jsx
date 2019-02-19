import React, { Component } from 'react';

import './Calculator.css'
import Button from '../components/Button'
import Display from '../components/Display'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0,0],
    current: 0
}


export default class Calculator extends Component {

    state = {...initialState}

    clearMemory() {
        this.setState({...initialState})
    }

    setOperation(operation) {
        console.log(operation)
    }

    addDigit(n) {
        // Se já tiver ponto no valor informado, e tentar adicionar novamente, ignora
        if (n === '.' && this.state.displayValue.includes('.')) {
            return
        }

        // Se só tiver o zero no display, quer dizer que o usuário começou a digitar, aí limpa o display pra por o valor digitado, ou
        // se o state.clearDisplay estiver true
        const clearDisplay = this.state.displayValue === '0' 
            || this.state.clearDisplay

        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n

        this.setState({displayValue, clearDisplay: false})

        if (n !== '.') {
            const i = this.state.current // current = indice 
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({ values })
            console.log(values)
        }
        
    }

    render() {

        const adicionarDigit = n => this.addDigit(n)
        const setOperation = op => this.setOperation(op)

        return (
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button label={"AC"} triple click={() => this.clearMemory()}></Button>
                <Button label={"/"} operation click={setOperation}></Button>
                <Button label={"7"} click={n => this.addDigit(n)}></Button>
                <Button label={"8"} click={n => this.addDigit(n)}></Button>
                <Button label={"9"} click={n => this.addDigit(n)}></Button>
                <Button label={"*"} operation  click={setOperation}></Button>
                <Button label={"4"} click={n => this.addDigit(n)}></Button>
                <Button label={"5"} click={n => this.addDigit(n)}></Button>
                <Button label={"6"} click={n => this.addDigit(n)}></Button>
                <Button label={"-"} operation  click={setOperation}></Button>
                <Button label={"1"} click={n => this.addDigit(n)}></Button>
                <Button label={"2"} click={n => this.addDigit(n)}></Button>
                <Button label={"3"} click={n => this.addDigit(n)}></Button>
                <Button label={"+"} operation  click={setOperation}></Button>
                <Button label={"0"} double click={n => this.addDigit(n)}></Button>
                <Button label={"."} click={n => this.addDigit(n)}></Button>
                <Button label={"="} operation  click={setOperation}></Button>
            </div>
        )
    }
}
