import React from "react";
import { reduxForm, Field, FieldArray } from "redux-form";

import FinalScore from "./FinalScore";
import Row from "./Row";
import Players from "./Players";

const renderName = props => (
  <React.Fragment>
    {props.fields.map(member => (
      <td>
        <Field name={`${member}.name`} component="input" />
      </td>
    ))}
  </React.Fragment>
);

const Wonders = props => (
  <form>
    <h2>7 Wonders</h2>
    <table>
      <thead>
        <tr>
          <td />
          <FieldArray
            name="participants"
            component={Row}
            field="name"
            type="text"
          />
        </tr>
      </thead>
      <tbody>
        <tr className="red">
          <td>Military</td>
          <FieldArray name="participants" component={Row} field="military" />
        </tr>
        <tr>
          <td>Gold</td>
          <FieldArray name="participants" component={Row} field="gold" />
        </tr>
        <tr>
          <td>Wonder</td>
          <FieldArray name="participants" component={Row} field="wonder" />
        </tr>
        <tr className="blue">
          <td>Blue</td>
          <FieldArray name="participants" component={Row} field="blue" />
        </tr>
        <tr className="yellow">
          <td>Yellow</td>
          <FieldArray name="participants" component={Row} field="yellow" />
        </tr>
        <tr className="purple">
          <td>Purple</td>
          <FieldArray name="participants" component={Row} field="purple" />
        </tr>
        <tr className="green">
          <td>Green</td>
          <FieldArray name="participants" component={Row} field="green" />
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td />
          <FieldArray name="participants" component={FinalScore} />
        </tr>
      </tfoot>
    </table>
    <Players />
    <button type="button" onClick={props.reset}>
      reset
    </button>
  </form>
);

export default reduxForm({
  form: "7wonders",
  initialValues: {
    participants: [{}, {}, {}, {}]
  }
})(Wonders);
