export const ADD_FEAT = "ADD_FEAT";
export const REMOVE_FEAT = "REMOVE_FEAT";


export const addFeat = feature => {
    return {type: ADD_FEAT, payload: feature};
  };
  
  export const removeFeat = feature => {
    return {type: REMOVE_FEAT, payload: feature};
  }; 