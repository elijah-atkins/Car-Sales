import React from 'react';
//import connect from react-redux

//import actions
const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {props.feature.name}
    </li>
  );
};
//map props to state for feature to remove a feature

//export addedFrature as connect 
export default AddedFeature;
