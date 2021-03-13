import React, { Component } from "react";
import "./productImg.css"
class ProductImg extends Component {
  constructor(props) {
    super(props);
    this.state = {
        image : this.props.image
    };
  }
  render() {
    return (
      <div className="prodImage">
        <img src={this.state.image} alt="Image Loading" className="fluid" />
      </div>
    );
  }
}

export default ProductImg;
