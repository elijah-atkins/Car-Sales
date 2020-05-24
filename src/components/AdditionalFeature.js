import React from 'react';
//import connect

//import add feature action

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

//map state to props for add feature
//export additionalFeatures as connect function
export default AdditionalFeature;
