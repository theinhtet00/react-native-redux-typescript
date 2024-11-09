import {darkTheme} from './darkTheme';
import {lightTheme} from './lightTheme';
import {ThemeModel} from './themeModel';

export enum THEMETYPE {
  LIGHT = 'light',
  DARK = 'dark',
}
export const getTheme = (themetype: THEMETYPE): ThemeModel => {
  return themetype === THEMETYPE.DARK ? darkTheme : lightTheme;
};
