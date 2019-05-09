import React, { Component } from "react";
import ProductCalculate from "../ProductCalculate";

class ProductCalculateList extends Component {
  state = {
    products: [],
    budget: "0",
    productsWithUserInput: {}
  };
  defineMinMaxOutput = (product, budget) => {
    let nextProduct = { ...product };
    let { min, max, unitPrice, unitPrecision } = nextProduct;
    let minOutput = min ? min : unitPrecision;
    let maxOutput =
      Math.floor((budget / unitPrice) * (1 / unitPrecision)) /
      (1 / unitPrecision);
    if (maxOutput > unitPrecision && maxOutput >= minOutput) {
      maxOutput = max ? (maxOutput >= max ? max : maxOutput) : maxOutput;
      nextProduct.maxOutput = maxOutput.toString();
      nextProduct.minOutput = minOutput.toString();
      return nextProduct;
    } else {
      return null;
    }
  };
  componentDidMount() {
    let { products, budget } = this.props,
      calculatedProducts = [];
    for (let i = 0; i < products.length; i++) {
      let minMaxProduct = this.defineMinMaxOutput(products[i], budget);
      if (minMaxProduct) {
        let { maxOutput, unitPrice } = minMaxProduct;
        calculatedProducts.push(minMaxProduct);
        budget -= maxOutput * unitPrice;
      } else {
        break;
      }
    }
    this.setState({ products: calculatedProducts });
  }
  handleChangeUserInput = ({ userInput, id }) => {
    let productsWithUserInput = Object.assign(
      {},
      this.state.productsWithUserInput,
      {
        [id]: userInput
      }
    );
    let { products, budget } = this.props,
      calculatedProducts = [];
    for (let i = 0; i < products.length; i++) {
      let minMaxProduct = this.defineMinMaxOutput(products[i], budget);
      let productId = products[i].id;
      if (minMaxProduct) {
        let { maxOutput, unitPrice } = minMaxProduct;
        if (
          productsWithUserInput.hasOwnProperty(productId) &&
          productId !== id
        ) {
          minMaxProduct.userInput = productsWithUserInput[productId];
          budget -= productsWithUserInput[productId] * unitPrice;
        } else if (productId === id) {
          minMaxProduct.userInput = userInput;
          budget -= userInput * unitPrice;
        } else {
          budget -= maxOutput * unitPrice;
        }
        calculatedProducts.push(minMaxProduct);
      } else {
        break;
      }
    }
    this.setState({
      products: calculatedProducts,
      productsWithUserInput: productsWithUserInput
    });
  };
  render() {
    const products = this.state.products.map((product, index, products) => (
      <ProductCalculate
        key={product.id}
        {...product}
        order={`${index + 1} / ` + products.length}
        onChange={this.handleChangeUserInput}
      />
    ));

    return <div>{products}</div>;
  }
}

export default ProductCalculateList;
