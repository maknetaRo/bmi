import React from "react";
import BmiDescription from "../BmiDescription/BmiDescription";
import { BMI_TEXT, BMI_TITLE, BMI_DESC } from "../../const";
import "./DescBox.css";

function DescBox(props) {
  const results = BMI_DESC.map((item) => (
    <BmiDescription class="range" key={item.id} data={item} />
  ));
  return (
    <section className="text-box">
      <article className="main-desc">
        <h2 className="title-desc">{BMI_TITLE}</h2>
        {BMI_TEXT}
      </article>
      <article className="result-desc">
        <h2 className="title-desc">Result</h2>
        {props.score}
        {results}
      </article>
    </section>
  );
}

export default DescBox;
