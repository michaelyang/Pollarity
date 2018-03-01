import { connect } from 'react-redux';
import HomePage from './HomePage';
import * as Actions from '../actions.js';

//question fetch placeholder
const ques = {
  id:1,
  ques:'Is Tim Bak a fast learner?',
  choiceA: {choice: 'A', text: "Yes."},
  choiceB: {choice: 'B', text: "No. He is terrible."}
 };

const mapStateToProps = (state) => {
  return {
    currentUser: state.authReducer.user,
    question: ques
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };

};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
