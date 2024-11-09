import {Theme} from '@react-navigation/native';

export interface ThemeModel extends Theme {
  dark: boolean;
  colors: {
    primary: string;
    background: string;
    card: string;
    text: string;
    text_white: string;
    border: string;
    notification: string;
  };
  font: {
    xs: number;
    s: number;
    m: number;
    l: number;
    lg: number;
  };
}
