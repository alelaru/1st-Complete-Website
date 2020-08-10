import { connect } from "react-redux";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import CollectionPage from "../collection/collection.component";
import withSpinner from "../../components/with-spinner/with-spinner";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const CollectionsContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionPage);

export default CollectionsContainer;
