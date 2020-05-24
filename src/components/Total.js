import React from 'react';
//import connect
//declare variables
const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};
//export with connect
export default Total;
