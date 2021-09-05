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
var normal_distribution_1 = require("normal-distribution");
var lodash_1 = require("lodash");
function weightedRandom(weights) {
    var totalWeight = 0;
    var i = 0;
    var random;
    for (i; i < weights.length; i++)
        totalWeight += weights[i];
    random = Math.random() * totalWeight;
    for (i = 0; i < weights.length; i++) {
        if (random < weights[i])
            return i;
        random -= weights[i];
    }
    throw new Error('something went wrong');
}
;
var mean = 5;
var standardDeviation = 1.5; // 99% of values are between 0.5 and 9.5
var distribution = new normal_distribution_1["default"](mean, standardDeviation);
var weights = [];
var i = 0;
for (i; i < 10; i++) {
    weights.push(distribution.probabilityBetween(i, i + 1));
}
var numericProps = [
    'stamina',
    'speed',
    'agility',
    'strength',
    'creativity',
    'influence',
    'aggression',
    'teamwork',
];
var nonNumbericProps = ['height', 'weight'];
var heightLabels = ['Tiny', 'Small', 'Average', 'Tall', 'Giant'];
var weightLabels = ['Feather', 'Light', 'Average', 'Heavy', 'Very Heavy'];
var NFTcount = 1e1;
var generatedProps = {};
// Initialize props
numericProps.forEach(function (prop) { return generatedProps[prop] = []; });
generatedProps['height'] = [];
generatedProps['weight'] = [];
// Build numerical props
numericProps.forEach(function (prop) {
    for (var n = 0; n < NFTcount; n++) {
        generatedProps[prop].push(weightedRandom(weights) + 1);
    }
    // const grouped = groupBy(generatedProps[prop]);
    // const propCounts = fromPairs(keys(grouped).map((prop) => [prop, grouped[prop].length]));
    // console.log(prop + ' distribution', propCounts);
});
// Build height and weight
for (var n = 0; n < NFTcount; n++) {
    generatedProps['height'].push(heightLabels[weightedRandom((0, lodash_1.map)((0, lodash_1.chunk)(weights, 2), lodash_1.sum))]);
    generatedProps['weight'].push(weightLabels[weightedRandom((0, lodash_1.map)((0, lodash_1.chunk)(weights, 2), lodash_1.sum))]);
}
// Build rookies
var rookies = [];
var _loop_1 = function (n) {
    var newRookie = (0, lodash_1.fromPairs)(__spreadArray(__spreadArray([], numericProps, true), nonNumbericProps, true).map(function (propName) {
        return [propName, generatedProps[propName][n]];
    }));
    rookies.push(newRookie);
};
for (var n = 0; n < NFTcount; n++) {
    _loop_1(n);
}
console.log('rookies', rookies);
