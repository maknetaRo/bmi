import React, { Component } from 'react';
import './BmiForm.css';

class BmiForm extends Component {
    render() {
        return (
            <section className="app-form">
                <form className="form">
                    <label for="kilos" class="label-box">Your weight in kg</label>
                    <input type="number" id="kilos" required />

                    <label for="cm" class="label-box">Your height in cm</label>
                    <input type="number" id="cm" required />

                    <input type="submit" class="submit-btn" />
                </form>
            </section>

        )
    }
}

export default BmiForm