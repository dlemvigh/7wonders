import React from "react";
import { connect } from "react-redux";
import { formValueSelector } from "redux-form";

const renderScore = props => <th>{props.score}</th>;

const selector = formValueSelector("7wonders");
const mapStateToProps = (state, props) => {
  const scores = selector(state, `${props.member}.score`) || {};
  const score = Object.values(scores).reduce(
    (acc, val) => acc + (Number(val) || 0),
    0
  );
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
