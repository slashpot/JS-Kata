import {decodeMorse} from "../src/DecodeTheMorseCode";

describe("DecodeTheMorseCode: ", function () {
    it('.... . -.--   .--- ..- -.. .', function () {
        expect(decodeMorse('.... . -.--   .--- ..- -.. .')).toBe('HEY JUDE')
    });

    it('SOS has space', function () {
        expect(decodeMorse('... --- ...')).toBe('SOS')
    });

    it('SOS has no space', function () {
        expect(decodeMorse('...---...')).toBe('SOS')
    });

    it('single code with space', function () {
        expect(decodeMorse(' . ')).toBe('E')
    });
});