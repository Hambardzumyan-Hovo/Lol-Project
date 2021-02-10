import { getChampInfoApi } from "../Api/Api";

const GET_CHAMP_INFO = "GET_CHAMP_INFO";

let initialState = {};

const champInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHAMP_INFO:
      return {
        ...action.champInfo,
      };

    default:
      return state;
  }
};

//thunks

export const getChampInfo = champName => {
  return dispatch => {
    getChampInfoApi(champName).then(res => {
      let champInfo = res;
      dispatch({ type: GET_CHAMP_INFO, champInfo });
    });
  };
};

export default champInfoReducer;
