import React, { Component } from "react";
import './RelatedItem.css'
class RelatedItems extends Component {
  constructor({ relate }) {
    super(relate);
    this.state = {
      relate,
    };
  }
  render() {
    return (
      <div className="footer">
        {this.state.relate.map((item) => {
          return (
            <div className="productSummary">
              <div className="__imageWrapper">
                <img src={item.img} alt="Image Loading" className="fluid"/>
              </div>
              <h4 className="__">{item.title}</h4>
              <h5 className="__productCode">
                  {item.productCode}
              </h5>
               <h6>Stars : {item.stars}</h6>
               <h4>Price : {item.price}</h4>
            </div>
          );
        })}
      </div>
    );
  }
}

export default RelatedItems;
//  {
//       img:
//         "https://www.epapoutsia.gr/media/catalog/product/cache/image/650x650/0/0/0000076522222_01_ts.jpg",
//       title: "Sparx Men's Canvas Sneakers",
//       productCode: "AHU6798",
//       stars: 4,
//       price: "$20",
//     },
