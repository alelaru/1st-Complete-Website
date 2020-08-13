import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectioFetching } from "../../redux/shop/shop.selectors";
import withSpinner from "../with-spinner/with-spinner";
import { compose } from "redux";
import CollectionsOverview from "../../components/collection-overview/collection-overview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectioFetching,
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
