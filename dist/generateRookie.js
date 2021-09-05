"use strict";
exports.__esModule = true;
exports.generateRookies = void 0;
var normal_distribution_1 = require("normal-distribution");
var constants_1 = require("./constants");
var Rookie_1 = require("./Rookie");
function generateRookies(count) {
    if (count === void 0) { count = constants_1.DEFAULT_COUNT; }
    var distribution = new normal_distribution_1["default"](constants_1.mean, constants_1.standardDeviation);
    var rookies = [];
    for (var n = 0; n < constants_1.DEFAULT_COUNT; n++) {
        var newRookie = new Rookie_1.Rookie(n + 1, distribution);
        rookies.push(newRookie);
    }
    return rookies;
}
exports.generateRookies = generateRookies;
