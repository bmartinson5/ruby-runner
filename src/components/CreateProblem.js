import React, {Component} from 'react';
import '../css/ProblemForm.css';
import Grid from '@material-ui/core/Grid';

export default class CreateProblem extends Component {
  constructor(props){
    super(props)

    this.state = {
      functionName: "",
      name: "",
      description: "",
      params: "",
      testInputs: "",
      testDescriptions: "",
      expectedOutputs: "",
    }
  }

  handleChange = (evt) => {
    this.setState({[evt.target.name]: evt.target.value });
  }

  render(){
    return (
      <div className="problem-form-container">
            Create a custom problem to Solve! <br/>
            <input type="number" value={this.state.functionName} name="functionName" onChange={this.handleChange} placeholder="Name of the main function called"/><br/>
            <input type="text" value={this.state.name} name="name" onChange={this.handleChange} placeholder="Problem Name"/><br/>
            <input type="text" value={this.state.description} name="description" onChange={this.handleChange} placeholder="Description"/><br/>
            <input type="text" value={this.state.params} name="params" onChange={this.handleChange} placeholder="Function Parameters"/><br/>
            <input type="text" value={this.state.testDescription} name="testDescription" onChange={this.handleChange} placeholder="Test Descriptions"/><br/>
            <input type="text" value={this.state.testInputs} name="testInputs" onChange={this.handleChange} placeholder="Test Inputs"/><br/>
            <input type="text" value={this.state.expectedOutputs} name="expectedOutputs" onChange={this.handleChange} placeholder="Expected Outputs"/><br/>
            <button onClick={() => this.props.addProblem(this.state)}>Add Problem</button><br/>
      </div>
    );
  }
}
