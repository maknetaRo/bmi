import React, { Component } from "react";
import "./BmiForm.css";

class BmiForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kilos: undefined,
      cm: undefined,
      score: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.setState({
      kilos: event.target.kilos,
      cm: event.target.cm,
    });
    this.state.score = (this.state.kilos / this.state.cm ** 2).toString();
    console.log(this.state.score);
    event.preventDefault();
  }

  render() {
    return (
      <section className="app-form">
        <div className="box">
          <form className="form" onSubmit={this.handleSubmit}>
            <label htmlFor="kilos" className="label-box">
              Your weight in kg
            </label>
            <input
              type="number"
              step="0.01"
              id="kilos"
              value={this.state.kilos}
              required
            />

            <label htmlFor="cm" className="label-box">
              Your height in meters
            </label>
            <input
              type="number"
              step="0.01"
              id="cm"
              value={this.state.cm}
              required
            />

            <input type="submit" className="submit-btn" value="Submit" />
          </form>
          <h3 className="score">{this.state.score}</h3>
        </div>
      </section>
    );
  }
}

export default BmiForm;
