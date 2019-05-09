import React, { Component } from "react";
import uuid from "uuid";
import BudgetForm from "../BudgetForm";
import EditableProductList from "../EditableProductList";
import ProductListControls from "../ProductListControls";
import ProductCalculateList from "../ProductCalculateList";

const AdjustAmountGuide = () => (
  <div className="card my-3">
    <div className="card-body">
      <p className="card-text">
        Now you can adjust the amount of each product to your choosing, start
        with the most important one. Notice that changing one's amount affects
        the minimum and maximum amount of the following product.
      </p>
    </div>
  </div>
);

const RegisterProductGuide = () => (
  <div>
    <div className="card my-3">
      <div className="card-body">
        <p className="card-text">
          Register your products with detail information, according to their
          importance or your priority list. This is very important. Notice the "Unit Precision" field. You can only select value "1" for products like egg, pencil, but can choose "0.1" for meat (0.1kg).
        </p>
      </div>
    </div>
  </div>
);

const ChangeMyInput = props => (
  <button className="btn btn-block btn-outline-primary" onClick={props.onChangeClick}>
    Change My Data
  </button>
);

class App extends Component {
  state = {
    budget: "0",
    showCalculation: false,
    products: [
      
    ]
  };
  handleChangeBudget = e => {
    const value = e.target.value,
      budget = value.includes(".") ? value : parseFloat(value) || 0;
    this.setState({ budget: budget });
  };
  handleDeleteClick = id => {
    const newProducts = this.state.products.filter(
      product => product.id !== id
    );
    this.setState({ products: newProducts });
  };
  handleFormSubmit = newProduct => {
    if ("id" in newProduct) {
      const newProducts = this.state.products.map(product => {
        if (product.id === newProduct.id) {
          return Object.assign({}, product, newProduct);
        }
        return product;
      });
      this.setState({ products: newProducts });
    } else {
      newProduct.id = uuid.v4();
      this.setState({ products: this.state.products.concat(newProduct) });
    }
  };
  openCalculation = () => this.setState({ showCalculation: true });
  closeCalculation = () => this.setState({ showCalculation: false });
  render() {
    const { budget, showCalculation, products } = this.state;
    return (
      <div className="container py-3">
        <h1 className="display-4 text-center mb-4">Calculate Grocery List</h1>
        <hr className="mb-4" />
        <div className="row justify-content-center">
          <div className="col-lg-4">
            {!showCalculation ? (
              <div>
                <BudgetForm value={budget} onChange={this.handleChangeBudget} />
                <RegisterProductGuide />
                <EditableProductList
                  products={products}
                  onDeleteClick={this.handleDeleteClick}
                  onFormSubmit={this.handleFormSubmit}
                />
                <ProductListControls
                  onFormSubmit={this.handleFormSubmit}
                  onCalculateClick={this.openCalculation}
                />
              </div>
            ) : (
              <div>
                <AdjustAmountGuide />
                <ProductCalculateList budget={budget} products={products} />
                <ChangeMyInput onChangeClick={this.closeCalculation} />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
