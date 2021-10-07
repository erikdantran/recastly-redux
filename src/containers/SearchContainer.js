import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';

const mapStateToProps = (state) => {
  return {
    videoList: state.videoList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearchInputChange: (q) => { dispatch(handleSearchChange(q)); }
  };
};

var SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default SearchContainer;
