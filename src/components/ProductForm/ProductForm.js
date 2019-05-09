import React, { Component } from "react";
import FormGroup from "../FormGroup";

class ProductForm extends Component {
  state = {
    name: this.props.name || "",
    unit: this.props.unit || "",
    unitPrecision: this.props.unitPrecision || "1",
    unitPrice: this.props.unitPrice || "",
    min: this.props.min || "",
    max: this.props.max || ""
  };
  handleFormSubmit = () => {
    let { id, onFormSubmit, onCancelClick } = this.props
    if (id) { 
      onFormSubmit({ ...this.state, id })
    } else {
      onFormSubmit({ ...this.state })
    }
    onCancelClick()
  };
  handleChangeName = e => this.setState({ name: e.target.value });
  handleChangeUnit = e => this.setState({ unit: e.target.value });
  handleChangeUnitPrecision = e =>
    this.setState({ unitPrecision: e.target.value });
  handleChangeUnitPrice = e => this.setState({ unitPrice: e.target.value })
  handleChangeMin = e => this.setState({ min: e.target.value });
  handleChangeMax = e => this.setState({ max: e.target.value });
  render() {
    const {
      name,
      unit,
      unitPrecision,
      unitPrice,
      min,
      max,
      id
    } = this.state
    const { onCancelClick } = this.props
    const button = name ? "Confirm" : "Create";
    return (
      <div className="card mb-3">
        <div className="card-body">
          <FormGroup
            type="text"
            extra="Name"
            id={id}
            value={name}
            onChange={this.handleChangeName}
          />
          <FormGroup
            type="text"
            extra="Unit"
            id={id}
            value={unit}
            onChange={this.handleChangeUnit}
            placeHolder="Item, kg, ..."
          />
          <FormGroup
            type="select"
            extra="Unit Precision"
            id={id}
            value={unitPrecision}
            onChange={this.handleChangeUnitPrecision}
          />
          <FormGroup
            type="text"
            extra="Unit Price"
            id={id}
            value={unitPrice}
            onChange={this.handleChangeUnitPrice}
            placeHolder="$"
          />
          <FormGroup
            type="text"
            extra="Min"
            id={id}
            value={min}
            onChange={this.handleChangeMin}
            placeHolder="Expected minimum amount, optional"
          />
          <FormGroup
            type="text"
            extra="Max"
            id={id}
            value={max}
            onChange={this.handleChangeMax}
            placeHolder="Expected maximum amount, optional"
          />
          <div
            className="btn-group btn-block"
            role="group"
            aria-label="Basic example"
          >
            <button
              type="button"
              className="btn btn-outline-primary w-25"
              onClick={this.handleFormSubmit}
            >
              {button}
            </button>
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={onCancelClick}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductForm;
