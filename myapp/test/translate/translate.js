import translate from '../../harmony/app/translate/translate';
import expect from 'expect';

describe ('translate', () => {
    it('should return ua', () => {
        var lang = 'ua',
            text = 'TEACHERS',
            result = 'Викладачі';

        expect(translate(lang, text)).toEqual(result);
    });

    it('should return us', () => {
        var lang = 'us',
            text = 'TEACHERS',
            result = 'Teachers';

        expect(translate(lang, text)).toEqual(result);
    });

    it('should return ru', () => {
        var lang = 'ru',
            text = 'TEACHERS',
            result = 'Преподаватели';

        expect(translate(lang, text)).toEqual(result);
    });

    it('should return key', () => {
        var lang = 'ua',
            text = 'TEA',
            result = 'ua.TEA';

        expect(translate(lang, text)).toEqual(result);
    });

    // it('should throw error', () => {
    //     var lang = 'ui',
    //         text = 'TEA';

    //     expect(translate(lang, text)).toThrow(/Language/);
    // });
});