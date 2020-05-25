import React from 'react';
//import connect
import { connect } from 'react-redux';
//import add feature action
import { addFeature } from '../actions';

const AdditionalFeature = (props) => {

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => props.addFeature(props.item)}>Add</button>
      {props.item.name} (+{props.item.price})
    </li>
  );
};

//map state to props for add feature
const mapStateToProps = state => {
  return { 
    additionalFeatures: state.additionalFeatures,
    car: state.car}
};
//export additionalFeatures as connect function
export default connect ( mapStateToProps, { addFeature })(AdditionalFeature);
