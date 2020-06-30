import React from 'react';
import BmiDescription from '../BmiDescription/BmiDescription';
import { BMI_TEXT } from '../../const';
import './DescBox.css';

function DescBox(props) {
    return (
        <section className="text-box">
            <article className={props.class} >{BMI_TEXT}</article>
            <BmiDescription />


        </section>
    )
}

export default DescBox