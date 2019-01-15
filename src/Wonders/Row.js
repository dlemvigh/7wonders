import React from "react";
import { Field } from "redux-form";

export default props => (
  <React.Fragment>
    {props.fields.map(member => (
      <td>
        <Field
          name={`${member}.score.${props.field}`}
          component="input"
          type={props.type || "number"}
          pattern={props.type ? null : "\\d*"}
          min={props.min}
          max={props.max}
        />
      </td>
    ))}
  </React.Fragment>
);
