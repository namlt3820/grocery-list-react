import React, { Component } from "react";
import EditableProduct from "../EditableProduct";

class EditableProductList extends Component {
  render() {
    const products = this.props.products.map((product, index, products) => (
      <EditableProduct
        key={product.id}
        {...product}
        order={`${index + 1} / ` + products.length}
        onDeleteClick={this.props.onDeleteClick}
        onFormSubmit={this.props.onFormSubmit}
      />
    ));
    return <div>{products}</div>;
  }
}

export default EditableProductList;
