import React, { Component } from "react"
import './App.css'
import Button from "./components/Button"

import Display from "./components/Display"

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

class Calculator extends Component {

    state = { ...initialState }

    constructor(props) {
        super(props)
    }

    clearMemory = () => {

    }

    setOperation = () => {

    }

    addDigit = () => {

    }

    render() {
        return (
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <div className="buttons-wrap">
                    <Button label="AC" click={this.clearMemory} triple />
                    <Button label="/" click={this.setOperation} operation />
                    <Button label="7" click={this.addDigit} />
                    <Button label="8" click={this.addDigit} />
                    <Button label="9" click={this.addDigit} />
                    <Button label="*" click={this.setOperation} operation />
                    <Button label="4" click={this.addDigit} />
                    <Button label="5" click={this.addDigit} />
                    <Button label="6" click={this.addDigit} />
                    <Button label="-" click={this.setOperation} operation />
                    <Button label="1" click={this.addDigit} />
                    <Button label="2" click={this.addDigit} />
                    <Button label="3" click={this.addDigit} />
                    <Button label="+" click={this.setOperation} operation />
                    <Button label="0" click={this.addDigit} double />
                    <Button label="." click={this.addDigit} />
                    <Button label="=" click={this.setOperation} equals />
                </div>
            </div>
        )
    }
}

export default Calculator
