import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {THEMETYPE} from '../../model/theme';
import {mmkvStorage} from '../../utils/storage/mmkvStorage';

interface AppState {
  theme: string;
}
const currentTheme = mmkvStorage.getString('theme') as THEMETYPE;
const initialState: AppState = {
  theme: THEMETYPE.LIGHT || currentTheme,
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
  },
});

export const {toggleTheme} = appSlice.actions;
export default appSlice.reducer;
