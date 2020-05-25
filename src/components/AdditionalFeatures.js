import React from 'react';
import AdditionalFeature from './AdditionalFeature';
//import connect
import { connect } from 'react-redux';
//import state for additionalFeatures
const AdditionalFeatures = (props) => {

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature item={item}/>
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {

  return{
    additionalFeatures: state.additionalFeatures
  }
}

//export as connect function
export default connect(mapStateToProps, {})(AdditionalFeatures);
