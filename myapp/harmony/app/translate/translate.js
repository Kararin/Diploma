import UALang from './locales/locale-ua';
import RULang from './locales/locale-ru';
import USLang from './locales/locale-us';

var translates = {
    'us': USLang,
    'ru': RULang,
    'ua': UALang
};

export default (key, text) => {
    var lang = translates[key],
        translate;

    if (!lang) {
        throw new Error(`Language ${key} doesn't exist`);
    }

    translate = lang[text];

    !translate && (console.warn(`key for ${key}${text} didn't specify`));

    return translate ? translate : `${key}.${text}`;
};