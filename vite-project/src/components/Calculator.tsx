import React from "react"
import "./Calculator.css"

class Calculator extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            num1: "",
            num2: "",
            result:""
        }
    }

    handleChangeNum1 = (e:any) => {
        this.setState({
            num1: e.target.value
        });
    }

    handleChangeNum2 = (e:any) => {
        this.setState({
            num2: e.target.value
        });
    }

    addNumber = () => {     
        const { num1, num2 } = this.state
        const output = parseInt(num1) + parseInt(num2)
        this.setState({
            result:output
        })   
    }

    subtractNumber = () => {     
        const { num1, num2 } = this.state
        const output = parseInt(num1) - parseInt(num2)
        this.setState({
            result:output
        })   
    }

    multiplyNumber = () => {     
        const { num1, num2 } = this.state
        const output = parseInt(num1) * parseInt(num2)
        this.setState({
            result:output
        })   
    }

    divideNumber = () => {     
        const { num1, num2 } = this.state
        const output = parseInt(num1) / parseInt(num2)
        this.setState({
            result:output
        })   
    }

    render() {
        const { num1, num2, result } = this.state
        return (
            <>
                <h1>Class Components</h1>
                <input type="number" className="firstinput" onChange={this.handleChangeNum1} value={num1} placeholder="Enter First Value"  />
                <input type="number" className="secondinput" onChange={this.handleChangeNum2} value={num2} placeholder="Enter Second Value" /><br />
                <div className="btn">
                <button onClick={this.addNumber}>Add</button>
                <button onClick={this.subtractNumber}>Subtract</button>
                <button onClick={this.multiplyNumber}>Multiply</button>
                    <button onClick={this.divideNumber}>Divide</button>
                    </div>
                <p className="sum">Result : { result }</p>
        </>
        )
    }
}

export default Calculator
