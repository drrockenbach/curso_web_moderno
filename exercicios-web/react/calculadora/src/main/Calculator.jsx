import React, { Component } from 'react';

import './Calculator.css'
import Button from '../components/Button'
import Display from '../components/Display'

export default class Calculator extends Component {

    clearMemory() {
        console.log("limpar")
    }

    setOperation(operation) {
        console.log(operation)
    }

    addDigit(n) {
        console.log(n)
    }

    render() {

        const adicionarDigit = n => this.addDigit(n)
        const setOperation = op => this.setOperation(op)

        return (
            <div className="calculator">
                <Display value={10000000} />
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
                <Button label={"."} click={n => this.addDigit(n)></Button>
                <Button label={"="} operation  click={setOperation}></Button>
            </div>
        )
    }
}
