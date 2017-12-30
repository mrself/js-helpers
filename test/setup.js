var chai = require('chai');
global.expect = chai.expect;
global.assert = chai.assert;
global.h = require('../src/main');
global.l = function (x) {
    console.log(x);
};