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
var lodash_1 = require("lodash");
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
<<<<<<< HEAD
    template_1.template.text('#8569').attr(__assign(__assign({}, idAttributes), { x: 290, y: 128 }));
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
=======
    template_1.template.text("#" + rookie.id).attr(__assign(__assign({}, idAttributes), { x: 290, y: 132 }));
    template_1.template.text((0, lodash_1.upperCase)(rookie.height)).attr(__assign(__assign({}, textAttributes), { x: 280, y: 318 }));
    template_1.template.text((0, lodash_1.upperCase)(rookie.weight)).attr(__assign(__assign({}, textAttributes), { x: 280, y: 366 }));
    template_1.template.text(rookie.stamina).attr(__assign(__assign({}, textAttributes), { x: 280, y: 412 }));
    template_1.template.text(rookie.speed).attr(__assign(__assign({}, textAttributes), { x: 280, y: 456 }));
    template_1.template.text(rookie.strength).attr(__assign(__assign({}, textAttributes), { x: 280, y: 504 }));
    template_1.template.text(rookie.agility).attr(__assign(__assign({}, textAttributes), { x: 280, y: 550 }));
    template_1.template.text(rookie.creativity).attr(__assign(__assign({}, textAttributes), { x: 280, y: 716 }));
    template_1.template.text(rookie.influence).attr(__assign(__assign({}, textAttributes), { x: 280, y: 764 }));
    template_1.template.text(rookie.aggression).attr(__assign(__assign({}, textAttributes), { x: 280, y: 808 }));
    template_1.template.text(rookie.teamwork).attr(__assign(__assign({}, textAttributes), { x: 280, y: 854 }));
    (0, fs_1.writeFileSync)("./output/" + rookie.id + ".svg", template_1.template.svg());
>>>>>>> 12f346d (Generates svgs)
    return template_1.template;
}
exports.generateSVG = generateSVG;
