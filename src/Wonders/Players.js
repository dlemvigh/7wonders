import React from "react";
import { connect } from "react-redux";
import { arrayPop, arrayPush, formValueSelector } from "redux-form";

const Players = props => (
  <React.Fragment>
    <button
      type="button"
      onClick={props.addPlayer}
      disabled={props.players >= 7}
    >
      add player
    </button>
    <button
      type="button"
      onClick={props.removePlayer}
      disabled={props.players <= 3}
    >
      remove player
    </button>
  </React.Fragment>
);

const selector = formValueSelector("7wonders");
const mapStateToProps = state => ({
  players: selector(state, "participants").length
});

const mapDispatchToProps = dispatch => ({
  addPlayer: () => dispatch(arrayPush("7wonders", "participants", {})),
  removePlayer: () => dispatch(arrayPop("7wonders", "participants"))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Players);
