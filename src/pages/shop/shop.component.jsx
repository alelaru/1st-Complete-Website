import React, { Component } from "react";
import SHOPDATA from "./shop.data";
import PreviewCollection from "../../components/preview-collection/preview-collection-component";

class ShopPage extends Component {
  state = { collections: SHOPDATA };

  render() {
    // console.log("Hey here");
    // console.log(this.state.collections);
    return (
      <div className="shop-page">
        {this.state.collections.map(({ id, ...otherCollectionProps }) => (
          <PreviewCollection
            key={id}
            {...otherCollectionProps}
          ></PreviewCollection>
        ))}
      </div>
    );
  }
}

export default ShopPage;
