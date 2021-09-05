"use strict";
exports.__esModule = true;
exports.template = void 0;
var templateObject_1 = require("./templateObject");
var createSVGWindow = require('svgdom').createSVGWindow;
var window = createSVGWindow();
var document = window.document;
var _a = require('@svgdotjs/svg.js'), SVG = _a.SVG, registerWindow = _a.registerWindow;
// register window and document
registerWindow(window, document);
exports.template = SVG(document.documentElement).size(1000, 1000);
var FILL_COLOR = 'white';
var BACKGROUND_FILL_COLOR = '#1F1C1C';
// Background
var background = exports.template.rect({ width: 1000, height: 1000 });
background.fill(BACKGROUND_FILL_COLOR);
// Lines
var line0 = exports.template.line({ x1: 72, y1: 954.5, x2: 302, y2: 954.5, stroke: FILL_COLOR });
var line1 = exports.template.line({ x1: 698, y1: 954.5, x2: 928, y2: 954.5, stroke: FILL_COLOR });
// Circle 
var circle = exports.template.circle({ cx: 870, cy: 799, r: 32.5, fill: FILL_COLOR, stroke: FILL_COLOR, strokeWidth: 5 });
// Logo 
var logo = exports.template.path({ fill: BACKGROUND_FILL_COLOR, d: 'M867.787 782.345C867.696 782.344 867.606 782.345 867.516 782.346C866.443 782.366 865.445 782.575 864.774 782.902L857.877 786.905C858.128 786.961 858.378 787.028 858.624 787.113C860.395 787.72 862.017 788.981 863.707 790.671L885.9 812.563L894.204 808.007L872.371 783.869C871.484 783.065 870.065 782.545 868.609 782.393C868.334 782.364 868.059 782.348 867.787 782.345ZM870.705 784.36L876.694 790.684C871.969 790.168 870.871 792.038 869.616 794.191L863.737 788.11L870.705 784.36ZM856.494 788.57C856.421 788.568 856.348 788.568 856.274 788.57C855.559 788.589 854.817 788.781 853.992 789.174C853.681 789.408 853.378 789.706 853.079 790.081C850.436 793.39 849.956 796.145 850.466 798.641C850.975 801.137 852.571 803.425 854.353 805.455C855.719 807.01 857.313 807.915 859.324 808.319C861.335 808.723 863.778 808.597 866.704 807.963C870.113 807.224 873.473 808.826 876.529 810.799C879.207 812.529 881.725 814.603 883.807 815.921L884.708 813.98L862.404 791.978L862.402 791.976C860.81 790.384 859.37 789.319 858.025 788.858C857.51 788.682 857.007 788.582 856.494 788.57ZM894.134 810.15L886.603 814.283L885.528 816.597L892.792 812.658L894.134 810.15Z' });
// Rectangles
var rect0 = exports.template.rect({ x: 713, y: 84, height: 62, width: 216, fill: BACKGROUND_FILL_COLOR, stroke: FILL_COLOR, strokeWidth: 2 });
var rect1 = exports.template.rect({ x: 73, y: 243, height: 4, width: 150, fill: FILL_COLOR });
var rect2 = exports.template.rect({ x: 73, y: 642, height: 4, width: 123, fill: FILL_COLOR });
// Paths
templateObject_1.templateObject.children.map(function (pathItem) {
    var pathCoordinates = pathItem.attributes.d;
    var path = exports.template.path(pathCoordinates);
    path.fill(FILL_COLOR);
});
