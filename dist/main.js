"use strict";
exports.__esModule = true;
var generateSVG_1 = require("./generateSVG");
var generateRookie_1 = require("./generateRookie");
var fs_1 = require("fs");
var rookies = (0, generateRookie_1.generateRookies)(10);
// DEBUG: 
// console.log(rookies);
// Write metadata to file
(0, fs_1.writeFileSync)('./output/metadata.json', JSON.stringify(rookies.map(function (r) { return r.buildMetadata(); }), null, 2));
// Build unique svg's
rookies.forEach(function (rookie) { return (0, generateSVG_1.generateSVG)(rookie); });
