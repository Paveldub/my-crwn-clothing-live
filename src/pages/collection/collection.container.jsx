import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import { compose } from 'redux';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from './collection.component';

const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !selectIsCollectionsLoaded(state)
});

const collectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default collectionPageContainer;
