import React from 'react';
//import connect from react-redux
import { connect } from 'react-redux';
import { removeFeature } from "../actions"

//import actions
const AddedFeature = (props) => {
  console.log(props)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => props.removeFeature(props.item)}>X</button>
      {props.item.name} (+{props.item.price})
    </li>
  );
};
//map props to state for feature to remove a feature
const mapStateToProps = state => {
  return {
    car: state.car,
  }
}
//export addedFrature as connect 
export default connect(mapStateToProps, {removeFeature})(AddedFeature); 
