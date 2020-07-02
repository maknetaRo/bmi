import React, { Component } from "react";
import "./BmiForm.css";

class BmiForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kilos: "",
      meters: "",
      score: "",
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
    event.preventDefault();
    let bmi = Math.round(
      ((this.state.kilos / this.state.meters ** 2) * 10) / 10
    );
    this.setState({ score: bmi });

  };
  resetForm = (event) => {
    this.setState({ kilos: "", meters: "", score: "" })
  }



  render() {

    return (
      <section className="app-form" >
        <div className="box">
          <form className="form" id="form" >
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
            <div className="btn-row">
              <input
                type="submit"
                className="submit-btn"
                onClick={this.countBmi}
                value="Count"
              />
              <input type="reset" className="reset-btn" value="Reset" onClick={this.resetForm} />
            </div>


            <input type="text" value={this.state.score} readOnly />

          </form>
        </div>
      </section>
    );
  }
}

export default BmiForm;
