import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {THEMETYPE} from '../../model/theme';
import {mmkvStorage} from '../../utils/storage/mmkvStorage';
import RNRrestart from 'react-native-restart';
import {LanguageModel, LanguageType} from '../../localization/translation';
import languagePicker from '../../utils/languagePicker';

interface AppState {
  theme: string;
  language: string;
  languageObject: LanguageModel;
}
const currentTheme = mmkvStorage.getString('theme') as THEMETYPE;

const initialState: AppState = {
  theme: currentTheme ? currentTheme : THEMETYPE.LIGHT,
  language: mmkvStorage.getString('language') || LanguageType.English,
  languageObject: languagePicker(mmkvStorage.getString('language') || ''),
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.theme =
        state.theme === THEMETYPE.LIGHT ? THEMETYPE.DARK : THEMETYPE.LIGHT;
      mmkvStorage.set('theme', state.theme);
      return state;
    },
    languageControl: (state, action: PayloadAction<LanguageType | string>) => {
      state.language = action.payload;
      console.log(action.payload);
      mmkvStorage.set('language', action.payload);
      RNRrestart.restart();
      return state;
    },
  },
});

export const {toggleTheme, languageControl} = appSlice.actions;
export default appSlice.reducer;
