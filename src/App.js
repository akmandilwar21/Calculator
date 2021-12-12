import React from "react";

class Calculator extends React.Component{
    constructor(props){
        super(props)
    }

    express = (value) => {
        document.getElementById('input').value += value;
    }
    calculate = () => {
        let ex = document.getElementById('input').value;
        document.getElementById('input').value = eval(ex);
    }
    clear = () => {
        document.getElementById('input').value = "";
    }
    substr = () => {
        let val = document.getElementById('input').value;
        document.getElementById('input').value = val.substring(0, val.length-1);
    }
    render(){
        return(
        <div className="container">
        <input className="item inp" id="input"></input>
        <button className="item clr" onClick={() => {this.clear()}}>c</button>
        <button className="item rem" onClick={() => {this.substr()}}>x</button>
        <button className="item mod" onClick={() => {this.express('%')}}>%</button>
        <button className="item divi" onClick={() => {this.express('/')}}>/</button>
        <button className="item seven" onClick={() => {this.express(7)}}>7</button>
        <button className="item eight" onClick={() => {this.express(8)}}>8</button>
        <button className="item nine" onClick={() => {this.express(9)}}>9</button>
        <button className="item multi" onClick={() => {this.express('*')}}>*</button>
        <button className="item four" onClick={() => {this.express(4)}}>4</button>
        <button className="item five" onClick={() => {this.express(5)}}>5</button>
        <button className="item six" onClick={() => {this.express(6)}}>6</button>
        <button className="item plus" onClick={() => {this.express('+')}}>+</button>
        <button className="item one" onClick={() => {this.express(1)}}>1</button>
        <button className="item two" onClick={() => {this.express(2)}}>2</button>
        <button className="item three" onClick={() => {this.express(3)}}>3</button>
        <button className="item minus" onClick={() => {this.express('-')}}>-</button>
        <button className="item dec" onClick={() => {this.express('.')}}>.</button>
        <button className="item zero" onClick={() => {this.express(0)}}>0</button>
        <button className="item pow" onClick={() => {this.express('**')}}>^</button>
        <button className="item equal" onClick={() => {this.calculate()}}>=</button>
        </div>
        );
    }
}

export default Calculator