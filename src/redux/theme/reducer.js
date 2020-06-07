import {SWITCH_THEME} from '../constants';
import {lightTheme} from '../../utils/themeProvider';

const initialState = {
  theme: {...lightTheme},
};

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_THEME:
      let newState = {
        ...state,
        theme: {...state.theme, ...action.data},
      };
      return newState;
    default:
      return state;
  }
};

export default themeReducer;
