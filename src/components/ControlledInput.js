import React, { Component } from 'react';

export default class ControlledInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: 'John',
      lastName: 'Bellweather',
      submissions: [],
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = {...this.state};
    const submittedData = this.state.submissions.concat(formData);
    this.setState({ submissions: submittedData });
  }

  addFormData = () => (
    this.state.submissions.map((data, idx) => <div key={idx}>{data.firstName} {data.lastName}</div>)
  )

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} value={this.state.firstName} name="firstName"></input>
        <input type="text" onChange={this.handleChange} value={this.state.lastName} name="lastName"></input>
        <input type="submit"></input>
        <div>{this.addFormData()}</div>
      </form>
    )
  }
}
