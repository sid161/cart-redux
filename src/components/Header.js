import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../App.css";

export class Header extends Component {
  render() {
    return (
      <>
        <div className="row">
          <div className="col-md-12">
            {/* <nav class="navbar navbar-light bg-light"> */}
            <div class=" container-fluid d-flex flex-row-reverse bd-highlight margin-top ">
              <i className="fas fa-search margin-left"></i>
              <i className="far fa-user margin-left"></i>
              <Link to="/carts">
                <i class="fas fa-shopping-cart margin-left margin-top">
                  {" "}
                  {this.props.numberCart}
                </i>
              </Link>
            </div>

            {/* </nav> */}
          </div>
        </div>
        <div className="row">
          <nav className=" shadow">
            <div className="">
              <div className="" id="">
                <ul className="flex justify-center ul-nav">
                  <li class="nav-item">
                    <Link to="/" className="nav-link active">
                      Products
                    </Link>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      Store
                    </a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      Skin Assesment
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      Ingredients
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    numberCart: state._todoProduct.numberCart,
  };
};
export default connect(mapStateToProps, null)(Header);
