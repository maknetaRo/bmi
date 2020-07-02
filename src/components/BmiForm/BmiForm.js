import React, { Component } from "react";
import "./BmiForm.css";

class BmiForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kilos: undefined,
      meters: undefined,
      score: null,
    };

    this.handle1Change = this.handle1Change.bind(this);
    this.handle2Change = this.handle2Change.bind(this);
  }

  handle1Change(event) {
    this.setState({ kilos: event.target.value });
  }
  handle2Change(event) {
    this.setState({ meters: event.target.value });
  }

  countBmi = (event) => {
    let bmi = Math.round(
      ((this.state.kilos / this.state.meters ** 2) * 10) / 10
    );
    this.setState({ score: bmi });
    event.preventDefault();
  };
  handleFormReset = () => {
    this.setState(() => this.state);
  };

  render() {
    return (
      <section className="app-form">
        <div className="box">
          <form className="form" id="form">
            <label htmlFor="kilos" className="label-box">
              Your weight in kg
            </label>
            <input
              type="number"
              step="0.01"
              id="kilos"
              required
              onChange={this.handle1Change}
            />

            <label htmlFor="kilos" className="label-box">
              Your height in meters
            </label>
            <input
              type="number"
              step="0.01"
              id="meters"
              required
              onChange={this.handle2Change}
            />

            <input
              type="submit"
              className="submit-btn"
              onClick={this.countBmi}
              value="Submit"
            />
            <input type="text" value={this.state.score} readOnly />
          </form>
        </div>
      </section>
    );
  }
}

export default BmiForm;
