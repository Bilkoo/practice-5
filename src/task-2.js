import React from "react";
import Button from "./Button"
import Input from "./Input"

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftOperand: "",
      rightOperand: "",
      result: ""
    };

    this.handleClear = this.handleClear.bind(this);
    this.handleOperandChange = this.handleOperandChange.bind(this);
    this.handleOperationChoose = this.handleOperationChoose.bind(this);
  }

  handleClear() {
    this.setState(() => ({leftOperand: 0, rightOperand: 0, result: 0}));
  }

  handleOperandChange(e) {
    let value = e.target.value, res = "";
    const name = e.target.name;
    for (let i = 0; i < value.length; ++i) {
      if (value[i] >= "0" && value[i] <= "9")
        res += value[i];
    }
    this.setState({[name]: res});
  }

  handleOperationChoose(e) {
    const name = e.target.name;
    switch (name) {
      case "Add":
        this.setState(() => ({
          result: +this.state.leftOperand + +this.state.rightOperand
        }));
        break;
      case "Subtract":
        this.setState(() => ({
          result: +this.state.leftOperand - +this.state.rightOperand
        }));
        break;
      case "Multiply":
        this.setState(() => ({
          result: +this.state.leftOperand * +this.state.rightOperand
        }));
        break;
      case "Divide":
        if (+this.state.rightOperand === 0)
          return;
        this.setState(() => ({
          result: +this.state.leftOperand / +this.state.rightOperand
        }));
        break;
    }
  }

  render() {
    return (<div class="container">
      <div class="row">
        <div class="col-3">
          <Input name="leftOperand" value={`${this.state.leftOperand}`} onChange={this.handleOperandChange} placeholder="Operand 1"/>
        </div>
        <div class="col-3">
          <Input name="rightOperand" value={`${this.state.rightOperand}`} onChange={this.handleOperandChange} placeholder="Operand 2"/>
        </div>
        <div class="col-2"><Button styleName="btn btn-block btn-danger" text="Clear" onClick={this.handleClear}/></div>
      </div>
      <div class="row my-3">
        <div class="col-2"><Button styleName="btn btn-block btn-secondary" text="Add" onClick={this.handleOperationChoose}/></div>
        <div class="col-2"><Button styleName="btn btn-block btn-secondary" text="Subtract" onClick={this.handleOperationChoose}/></div>
        <div class="col-2"><Button styleName="btn btn-block btn-secondary" text="Multiply" onClick={this.handleOperationChoose}/></div>
        <div class="col-2"><Button styleName="btn btn-block btn-secondary" text="Divide" onClick={this.handleOperationChoose}/></div>
      </div>
      <div class="row">
        <div class="col-4">
          <Input name="Result" placeholder="Result" value={this.state.result}/>
        </div>
      </div>
    </div>);
  }
}

export default Calculator;
