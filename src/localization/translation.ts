import {en, mm} from '.';

export enum LanguageType {
  Myanmar = 'MM',
  English = 'EN',
}
export interface LanguageModel {
  language_name: string;
  home: {
    name: string;
    theme: string;
    toggle_theme: string;
  };
}

export const mm_language: LanguageModel = mm;
export const en_language: LanguageModel = en;
