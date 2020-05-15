import React from "react";

export default class Second extends React.Component {
  state = {
    name: null,
    email: null
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.dispVal(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" onChange={this.handleChange} />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={this.handleChange}
        />
        <br />
        <button>Submit</button>
      </form>
    );
  }
}
