import { getChampsApi } from "../Api/Api";

const SET_ALL_CHAMPIONS = "SET_ALL_CHAMPIONS";
const SET_ALL_TAGS = "SET_ALL_TAGS";
const FILTER_CHAMPS = "FILTER_CHAMPS";
const FILTER_BY_NAME = "FILTER_BY_NAME";

let initialState = {
  champsList: [],
  tags: [],
};
const championsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_CHAMPIONS:
      return {
        ...state,
        champsList: action.champs,
      };
    case SET_ALL_TAGS:
      return {
        ...state,
        tags: action.arr,
      };
    case FILTER_CHAMPS:
      return {
        ...state,
        champsList: action.filteredChamps,
      };
    case FILTER_BY_NAME:
      return {
        ...state,
        champsList: action.filteredChampName,
      };
    default:
      return state;
  }
};

//thunks
export const filterChamps = tagName => {
  return dispatch => {
    getChampsApi().then(res => {
      let filteredChamps = {};
      Object.values(res).map(champ => {
        if (champ.tags.includes(tagName)) {
          Object.assign(filteredChamps, { [champ.name]: champ });
        }
        return filteredChamps;
      });
      dispatch({ type: FILTER_CHAMPS, filteredChamps });
    });
  };
};

export const filterByName = champName => {
  return dispatch => {
    getChampsApi().then(res => {
      let filteredChampName = {};
      Object.values(res).map(champ => {
        if (champ.name === champName) {
          Object.assign(filteredChampName, { [champ.name]: champ });
        }
        if (champName === null) {
          filteredChampName = { ...res };
        }
        return filteredChampName;
      });
      dispatch({ type: FILTER_BY_NAME, filteredChampName });
    });
  };
};

export const getChamps = () => {
  return dispatch => {
    getChampsApi().then(res => {
      const champs = res;
      const arr = [];
      Object.values(res).map(champ => {
        if (!arr.includes(champ.tags[0])) {
          arr.push(champ.tags[0]);
        }
        return arr;
      });
      dispatch({ type: SET_ALL_TAGS, arr });
      dispatch({ type: SET_ALL_CHAMPIONS, champs });
    });
  };
};

export default championsReducer;
