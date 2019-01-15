import React from "react";
import { connect } from "react-redux";
import { change, Field } from "redux-form";

export default connect(null)(props => (
  <React.Fragment>
    {props.fields.map(member => (
      <td>
        <Field
          name={`${member}.cards[0]`}
          component="input"
          type="number"
          pattern="\\d*"
          min="0"
        />
        <br />
        <Field
          name={`${member}.cards[1]`}
          component="input"
          type="number"
          pattern="\\d*"
          min="0"
        />
        <br />
        <Field
          name={`${member}.cards[2]`}
          component="input"
          type="number"
          pattern="\\d*"
          min="0"
        />
      </td>
    ))}
  </React.Fragment>
));
