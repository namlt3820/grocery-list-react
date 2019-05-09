import React, { Component } from "react";
import Product from "../Product";
import ProductForm from "../ProductForm";

class EditableProduct extends Component {
  state = {
    isFormOpen: false
  };
  handleUpdateClick = () => this.setState({ isFormOpen: true });
  handleCancelClick = () => this.setState({ isFormOpen: false });
  render() {
    return this.state.isFormOpen ? (
      <ProductForm {...this.props} onCancelClick={this.handleCancelClick} />
    ) : (
      <Product {...this.props} onUpdateClick={this.handleUpdateClick} />
    );
  }
}

export default EditableProduct;
