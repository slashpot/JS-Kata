import {decodeMorse} from "../src/DecodeTheMorseCode";

describe("DecodeTheMorseCode: ", function () {
    it('.... . -.--   .--- ..- -.. .', function () {
        expect(decodeMorse('.... . -.--   .--- ..- -.. .')).toBe('HEY JUDE')
    });
});