import React from "react";
import { connect } from "react-redux";
import { formValueSelector } from "redux-form";

const renderScore = props => <th>{props.score}</th>;
const calcGreen = cards => {
  let score = 0;
  cards = Array.from({ length: 3 }, (_, i) => Number(cards[i]) || 0);

  cards.forEach(x => {
    score += x * x;
    console.log("x", x, x * x, score);
  });
  score += Math.min(...cards) * 7;

  return score;
};

const selector = formValueSelector("7wonders");
const mapStateToProps = (state, props) => {
  const scores = selector(state, `${props.member}.score`) || {};

  const cards = selector(state, `${props.member}.cards`) || [];
  const green = calcGreen(cards);

  let score = Object.values(scores).reduce(
    (acc, val) => acc + (Number(val) || 0),
    green
  );

  if (green > 0 && scores.green > 0) {
    score -= Number(scores.green);
  }

  return {
    score
  };
};

const FinalScore = connect(mapStateToProps)(renderScore);

export default props => (
  <React.Fragment>
    {props.fields.map(member => (
      <FinalScore member={member} />
    ))}
  </React.Fragment>
);
