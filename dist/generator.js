"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.generate = void 0;
var normal_distribution_1 = require("normal-distribution");
var lodash_1 = require("lodash");
var utils_1 = require("./utils");
var constants_1 = require("./constants");
function generate(count) {
    if (count === void 0) { count = constants_1.DEFAULT_COUNT; }
    var distribution = new normal_distribution_1["default"](constants_1.mean, constants_1.standardDeviation);
    var weights = [];
    var i = 0;
    for (i; i < 10; i++) {
        weights.push(distribution.probabilityBetween(i, i + 1));
    }
    var generatedProps = {};
    // Initialize props
    constants_1.numericProps.forEach(function (prop) { return generatedProps[prop] = []; });
    generatedProps['height'] = [];
    generatedProps['weight'] = [];
    // Build numerical props
    constants_1.numericProps.forEach(function (prop) {
        for (var n = 0; n < constants_1.DEFAULT_COUNT; n++) {
            generatedProps[prop].push((0, utils_1.weightedRandom)(weights) + 1);
        }
        // Log out the distribution to take a look
        // const grouped = groupBy(generatedProps[prop]);
        // const propCounts = fromPairs(keys(grouped).map((prop) => [prop, grouped[prop].length]));
        // console.log(prop + ' distribution', propCounts);
    });
    // Build height and weight
    for (var n = 0; n < constants_1.DEFAULT_COUNT; n++) {
        // There are only 5 props for height and weight, so we combine the 10 weights in pairs
        generatedProps['height'].push(constants_1.heightLabels[(0, utils_1.weightedRandom)((0, lodash_1.map)((0, lodash_1.chunk)(weights, 2), lodash_1.sum))]);
        generatedProps['weight'].push(constants_1.weightLabels[(0, utils_1.weightedRandom)((0, lodash_1.map)((0, lodash_1.chunk)(weights, 2), lodash_1.sum))]);
    }
    // Build rookies
    var rookies = [];
    var _loop_1 = function (n) {
        var newRookie = (0, lodash_1.fromPairs)(__spreadArray(__spreadArray([], constants_1.numericProps, true), constants_1.nonNumbericProps, true).map(function (propName) {
            return [propName, generatedProps[propName][n]];
        }));
        rookies.push(newRookie);
    };
    for (var n = 0; n < constants_1.DEFAULT_COUNT; n++) {
        _loop_1(n);
    }
    return rookies;
}
exports.generate = generate;
