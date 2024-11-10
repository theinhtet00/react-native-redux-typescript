import {
  en_language,
  LanguageType,
  mm_language,
} from '../localization/translation';

const languagePicker = (payload: string) => {
  switch (payload) {
    case LanguageType.English:
      return en_language;
    case LanguageType.Myanmar:
      return mm_language;
    default:
      return en_language;
  }
};

export default languagePicker;
