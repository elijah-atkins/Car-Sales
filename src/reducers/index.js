import { ADD_FEATURE, REMOVE_FEATURE } from '../actions';

export const initialState = {
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
}

export const carReducer = (state = initialState, action) => {
  switch(action.type) {

    case REMOVE_FEATURE:
      let removedPrice = 0;
      for(let i = 0; i < initialState.additionalFeatures.length; i++) {
        if(action.payload.removedFeature === initialState.additionalFeatures[i].name) {
          removedPrice = initialState.additionalFeatures[i].price;
        }
      }
      const newFeatures = state.car.features.filter(item => {
        if(item !== action.payload.removedFeature) {
          return item
        } else return null
      })
      return {
        ...state,
        car: {
          ...state.car,
          features: newFeatures
        },
        additionalPrice: state.additionalPrice - removedPrice
      }


    case ADD_FEATURE:
      let shouldAdd = true;
      for(let i = 0; i < state.car.features.length; i++) {
        if(state.car.features[i] === action.payload.additionalFeature) {
          shouldAdd = false;
        }
      }
      if(shouldAdd === true) {
        return {
          ...state,
          car: {
            ...state.car,
            features: [
              ...state.car.features,
              action.payload.additionalFeature
            ]
          },
          additionalPrice: state.additionalPrice + action.payload.additionalPrice
        }
      } else if (shouldAdd === false) {
        return state
      } else return state

    default:
      return state;
  }
};