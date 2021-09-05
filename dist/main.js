"use strict";
exports.__esModule = true;
var generateSVG_1 = require("./generateSVG");
var generator_1 = require("./generator");
var rookies = (0, generator_1.generate)(10);
rookies.forEach(function (rookie) { return (0, generateSVG_1.generateSVG)(rookie); });
