import React, { Component } from "react";

export default class SudokuField extends Component {
  render() {
    const { field } = this.props;
    return (
      <input className="field" value={field.value} readOnly={field.readonly} />
    );
  }
}
