import React, { Component } from "react";

export default class About extends Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.setState({});
  }

  render() {
    return (
      <div>
        <h2>About</h2>
        <h3>Hello World!</h3>
        <form className="inputContainer">

          <div className="input">
            <label>name:</label>
            <br/>
            <input type="text" name="name" />
          </div>

          <div className="input">
            <label>email:</label>
            <br/>
            <input type="text" name="email" />
          </div>

          <div className="input">
            <label>company:</label>
            <br/>
            <input type="text" name="company" />
          </div>

          <div className="input">
            <label>message:</label>
            <br/>
            <textarea type="text" name="message"/>
          </div>

          <div className="input">
          <button onSubmit={this.handleSubmit}>submit</button>
          </div>

        </form>
      </div>
    );
  }
}
