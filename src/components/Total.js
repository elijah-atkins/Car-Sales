import React from 'react';
//import connect
import { connect } from 'react-redux';
//declare variables
const Total = (props) => {

  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};
//export with connect
const mapStateToProps = (state) => {

  return{
    car: state.car,
    additionalPrice: state.additionalPrice
  }
}
export default connect(mapStateToProps, {})(Total);
