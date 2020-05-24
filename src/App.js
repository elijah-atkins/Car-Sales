import React from 'react';
// import connect from react-redux
import { connect } from react-redux;

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
//import any called actions
const App = () => {
  //state data 
  const state = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };


  return (
    <div className="boxes">
      <div className="box">      
        <Header car={state.car} />
        <AddedFeatures car={state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={state.additionalFeatures} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};
// map state to props - car, additionalPrice and additionalFeatures

const mapStateToProps = state => {
  return {
    // whatWillBeSentToProps: state.stateVariableWeWantForThisApp

  };
}; 

//use connect to connect state to App
export default connect(
  mapStateToProps,
  { }
)(App);

// export default App;
