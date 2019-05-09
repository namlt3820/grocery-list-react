import React, { Component } from "react";

class ProductCalculate extends Component {
  handleChangeInputValue = e => {
    const userInput = e.target.value,
      { onChange, id } = this.props;

    onChange({ userInput, id });
  };
  render() {
    let {
      name,
      unit,
      unitPrecision,
      unitPrice,
      order,
      minOutput,
      maxOutput,
      userInput
    } = this.props;
    minOutput = parseFloat(minOutput)
    maxOutput = parseFloat(maxOutput)
    userInput = parseFloat(userInput)

    return (
      <div className="card mb-3">
        <div className="card-body">
          <p className="mb-2">
            Order:
            <span className="font-weight-bold"> {order} </span>
          </p>
          <p className="mb-2">
            Name:
            <span className="font-weight-bold"> {name} </span>
          </p>
          <p className="mb-2">
            Unit price:
            <span className="font-weight-bold">
              {" "}
              {unitPrice}$ / {unit}
            </span>
          </p>
          <span>{minOutput} </span>
          <input
            type="range"
            max={maxOutput}
            min={minOutput}
            step={unitPrecision}
            value={
              userInput
                ? userInput > maxOutput
                  ? maxOutput
                  : userInput
                : maxOutput
            }
            onChange={this.handleChangeInputValue}
          />
          <span> {maxOutput}</span>
          <p className="mb-2">
            Amount:
            <span className="font-weight-bold">
              {" "}
              {userInput
                ? userInput > maxOutput
                  ? maxOutput
                  : userInput
                : maxOutput}
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default ProductCalculate;
