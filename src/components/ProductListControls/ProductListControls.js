import React, { Component } from "react";
import "../ProductForm";
import ProductForm from "../ProductForm";

class ProductListControls extends Component {
  state = {
    isFormOpen: false
  };
  openForm = () => this.setState({ isFormOpen: true });
  closeForm = () => this.setState({ isFormOpen: false });
  render() {
    return (
      <div>
        {this.state.isFormOpen ? (
          <ProductForm
            onCancelClick={this.closeForm}
            onFormSubmit={this.props.onFormSubmit}
          />
        ) : (
          <div
            className="btn-group btn-block"
            role="group"
            aria-label="Basic example"
          >
            <button
              type="button"
              className="btn btn-outline-primary w-25"
              onClick={this.openForm}
            >
              Create Product
            </button>
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={this.props.onCalculateClick}
            >
              Calculate
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default ProductListControls;
