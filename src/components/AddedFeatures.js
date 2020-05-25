import React from 'react';
import { connect } from 'react-redux';
import AddedFeature from './AddedFeature';

const AddedFeatures = (props) => {

  return (
    <div className="content">
      <h6>Added feature</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature feature={item}/>
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    car: state.car
  }
}

export default connect(mapStateToProps, {})(AddedFeatures);
