import React, { Component } from "react";
import { actFetchProductsRequest, AddCart } from "../actions";
import { connect } from "react-redux";

import { IncreaseQuantity, DecreaseQuantity, DeleteCart } from "../actions";

import "../App.css";

export class Product extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actFetchProductsRequest();
  }

  render() {
    const { _products } = this.props._products;
    if (_products.length > 0) {
      return (
        <>
          <div className="main-div">
            <h1 className="main-heading">Shopping Cart</h1>
          </div>
          <div className="row " style={{ marginTop: "10px" }}>
            <div className="col-md-12">
              <div className="row flex column ">
                {_products.map((item, index) => (
                  <div
                    key={index}
                    className=" flex justify-center align-center border-bottom padding"
                    style={{ marginBottom: "10px" }}
                  >
                    <img
                      src={"/images/chair.jpg"}
                      className="img-resposive "
                      style={{ width: "30%", height: "300px" }}
                    />
                    <h5 className="margin-left left">{item.title}</h5>
                    <span className="margin-left left">${item.price}</span>
                    <button
                      className="add-cart margin-left left"
                      style={{ cursor: "pointer" }}
                      onClick={() => this.props.AddCart(item)}
                    >
                      Add Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      );
    }
    return (
      <div className="row">
        <h2>Loading...!</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    _products: state._todoProduct,
  };
};
function mapDispatchToProps(dispatch) {
  return {
    actFetchProductsRequest: () => dispatch(actFetchProductsRequest()),
    AddCart: (item) => dispatch(AddCart(item)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Product);
