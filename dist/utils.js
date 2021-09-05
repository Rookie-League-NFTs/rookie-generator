"use strict";
exports.__esModule = true;
exports.weightedRandom = void 0;
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
exports.weightedRandom = weightedRandom;
;
