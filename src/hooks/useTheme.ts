import {useSelector} from 'react-redux';
import {getTheme} from '../model/theme';
import {THEMETYPE} from '../model/theme';
import {RootState} from '../redux/store';

export const useAppTheme = () => {
  const theme = useSelector(
    (app: RootState) => app.AppReducer.theme as THEMETYPE,
  );
  const currentTheme = getTheme(theme);
  return {theme, currentTheme};
};
