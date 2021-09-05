"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.generateSVG = void 0;
var template_1 = require("./template");
var fs_1 = require("fs");
var idAttributes = {
    'font-weight': 'bold',
    'font-family': 'Arial, sans-serif',
    'font-size': '64px',
    fill: 'white'
};
var textAttributes = {
    "class": 'text',
    fill: 'white'
};
function generateSVG(rookie) {
    //ROOKIE ID
    template_1.template.text('#8569').attr(__assign(__assign({}, idAttributes), { x: 290, y: 130 }));
    template_1.template.text(stats.height).attr(__assign(__assign({}, textAttributes), { x: 280, y: 318 }));
    template_1.template.text(stats.weight).attr(__assign(__assign({}, textAttributes), { x: 280, y: 366 }));
    template_1.template.text(stats.stamina).attr(__assign(__assign({}, textAttributes), { x: 280, y: 412 }));
    template_1.template.text(stats.speed).attr(__assign(__assign({}, textAttributes), { x: 280, y: 456 }));
    template_1.template.text(stats.strength).attr(__assign(__assign({}, textAttributes), { x: 280, y: 504 }));
    template_1.template.text(stats.agility).attr(__assign(__assign({}, textAttributes), { x: 280, y: 550 }));
    template_1.template.text(stats.creativity).attr(__assign(__assign({}, textAttributes), { x: 280, y: 716 }));
    template_1.template.text(stats.influence).attr(__assign(__assign({}, textAttributes), { x: 280, y: 764 }));
    template_1.template.text(stats.aggression).attr(__assign(__assign({}, textAttributes), { x: 280, y: 808 }));
    template_1.template.text(stats.teamwork).attr(__assign(__assign({}, textAttributes), { x: 280, y: 854 }));
    var output = (0, fs_1.writeFileSync)('./svgs/test.svg', template_1.template.svg());
    return template_1.template;
}
exports.generateSVG = generateSVG;
