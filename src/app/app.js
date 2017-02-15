//this file will pass out state and actions to the children in main
//they will be available via props

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions/actionCreators';
import Main from './components/Main';

function mapStateToProps(state) {
  return{
    posts: state.posts,
    comments: state.comments
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}



const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;


