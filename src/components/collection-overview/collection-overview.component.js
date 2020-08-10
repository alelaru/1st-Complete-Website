import React from "react";
import "./collection-overview.scss";
import PreviewCollection from "../preview-collection/preview-collection-component";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

function CollectionsOverview({ collections }) {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection
          key={id}
          {...otherCollectionProps}
        ></PreviewCollection>
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
