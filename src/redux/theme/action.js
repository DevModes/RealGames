import {SWITCH_THEME, SWITCH_THEME_ERROR} from '../constants';

export const switchTheme = data => {
  return {
    type: SWITCH_THEME,
    data,
  };
};
export const switchThemeError = () => {
  return {
    type: SWITCH_THEME_ERROR,
  };
};
