"use strict";
exports.__esModule = true;
exports.generateRookies = void 0;
var normal_distribution_1 = require("normal-distribution");
var lodash_1 = require("lodash");
var utils_1 = require("./utils");
var constants_1 = require("./constants");
var Rookie = /** @class */ (function () {
    function Rookie(id, distribution) {
        this.id = id;
        var weights = [];
        var i = 0;
        for (i; i < 10; i++) {
            weights.push(distribution.probabilityBetween(i, i + 1));
        }
        this.buildNumbericProps(weights);
        this.qualitativeProps(weights);
    }
    Rookie.prototype.buildNumbericProps = function (weights) {
        var _this = this;
        constants_1.numericProps.forEach(function (prop) {
            _this[prop].push((0, utils_1.weightedRandom)(weights) + 1);
        });
    };
    Rookie.prototype.qualitativeProps = function (weights) {
        this.height = constants_1.heightLabels[(0, utils_1.weightedRandom)((0, lodash_1.map)((0, lodash_1.chunk)(weights, 2), lodash_1.sum))];
        this.weight = constants_1.weightLabels[(0, utils_1.weightedRandom)((0, lodash_1.map)((0, lodash_1.chunk)(weights, 2), lodash_1.sum))];
    };
    return Rookie;
}());
function generateRookies(count) {
    if (count === void 0) { count = constants_1.DEFAULT_COUNT; }
    var distribution = new normal_distribution_1["default"](constants_1.mean, constants_1.standardDeviation);
    var rookies = [];
    for (var n = 0; n < constants_1.DEFAULT_COUNT; n++) {
        var newRookie = new Rookie(n + 1, distribution);
        rookies.push(newRookie);
    }
    return rookies;
}
exports.generateRookies = generateRookies;
