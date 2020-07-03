// TODO: Add your tests here
// Starting from Node 10.x, [Mocha](https://mochajs.org) is used instead of our custom test framework.
// [Codewars' assertion methods](https://github.com/Codewars/codewars.com/wiki/Codewars-JavaScript-Test-Framework)
// are still available for now.
//
// For new tests, using [Chai](https://chaijs.com/) is recommended.
// You can use it by requiring:
//     const assert = require("chai").assert;
// If the failure output for deep equality is truncated, `chai.config.truncateThreshold` can be adjusted.

import {anagrams} from "../src/WhereMyAnagramsAt";

describe("WhereMyAngramsAt: ", function() {
    it(`case 1`, function() {
        const expected = ['aabb', 'bbaa'];
        expect(anagrams('abba',['aabb', 'abcd', 'bbaa', 'dada'])).toEqual(expected);
    });

    it(`case 2`, function() {
        const expected = ['carer', 'racer'];
        expect(anagrams('racer',['crazer', 'carer', 'racar', 'caers', 'racer'])).toEqual(expected);
    });

    it(`case 3`, function() {
        const expected = [];
        expect(anagrams('laser',['lazing', 'lazy',  'lacer'])).toEqual(expected);
    });
});
