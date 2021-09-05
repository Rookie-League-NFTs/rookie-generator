"use strict";
exports.__esModule = true;
exports.IPFS_BASE_PATH = exports.standardDeviation = exports.mean = exports.DEFAULT_COUNT = exports.weightLabels = exports.heightLabels = exports.nonNumbericProps = exports.numericProps = void 0;
exports.numericProps = [
    'stamina',
    'speed',
    'agility',
    'strength',
    'creativity',
    'influence',
    'aggression',
    'teamwork',
];
exports.nonNumbericProps = ['height', 'weight'];
exports.heightLabels = ['Tiny', 'Small', 'Average', 'Tall', 'Giant'];
exports.weightLabels = ['Feather', 'Light', 'Average', 'Heavy', 'Whale'];
exports.DEFAULT_COUNT = 1e1;
exports.mean = 5;
exports.standardDeviation = 1.5; // 99% of values are between 0.5 and 9.5
exports.IPFS_BASE_PATH = 'ipfs://QmcJYkCKK7QPmYWjp4FD2e3Lv5WCGFuHNUByvGKBaytif4';
