import React, { Component } from "react";

class Product extends Component {
  handleDeleteClick = e => {
    const { id, onDeleteClick } = this.props;
    onDeleteClick(id);
  };
  render() {
    const {
      name,
      unit,
      unitPrecision,
      unitPrice,
      min,
      max,
      onUpdateClick,
      order
    } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-body">
          <p className="mb-2">
            Order:
            <span className="font-weight-bold"> {order} </span>
          </p>
          <p className="mb-2">
            Name:
            <span className="font-weight-bold"> {name}</span>
          </p>
          <p className="mb-2">
            Unit:
            <span className="font-weight-bold"> {unit}</span>
          </p>
          <p className="mb-2">
            Unit Precision:
            <span className="font-weight-bold"> {unitPrecision}</span>
          </p>
          <p className="mb-2">
            Unit Price:
            <span className="font-weight-bold"> {unitPrice}</span>
            $
          </p>
          <p className="mb-2">
            Min:
            <span className="font-weight-bold"> {min}</span>
          </p>
          <p className="mb-2">
            Max:
            <span className="font-weight-bold"> {max}</span>
          </p>
          <div
            className="btn-group btn-block"
            role="group"
            aria-label="Basic example"
          >
            <button
              type="button"
              className="btn btn-outline-primary w-25"
              onClick={onUpdateClick}
            >
              Change
            </button>
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={this.handleDeleteClick}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
