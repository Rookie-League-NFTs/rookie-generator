"use strict";
exports.__esModule = true;
exports.generateSVG = void 0;
var template_1 = require("./template");
var fs_1 = require("fs");
// variable for the namespace 
var svgns = "http://www.w3.org/2000/svg";
function generateSVG() {
    // const test: SVGElement = document.createElement("svg");
    var test = template_1.template.svg();
    var output = (0, fs_1.writeFileSync)('./output/test.svg', template_1.template.svg());
    return template_1.template;
}
exports.generateSVG = generateSVG;
