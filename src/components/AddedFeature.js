import React from 'react';
//import connect from react-redux
import { connect } from 'react-redux';
import { removeFeature } from "../actions"

//import actions
const AddedFeature = (props) => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => removeFeature(props.feature)}>X</button>
      {props.feature}
    </li>
  );
};
//map props to state for feature to remove a feature
const mapStateToProps = state => {
  return {
    feature: state.feature,
  }
}
//export addedFrature as connect 
export default connect(mapStateToProps, {removeFeature})(AddedFeature); 
