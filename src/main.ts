import { generateSVG } from './generateSVG';
import { generateRookies } from './generateRookie';
import { writeFileSync } from 'fs';

const rookies = generateRookies();

console.log(rookies)

// DEBUG: 
// console.log(rookies);

// Build unique svg's
rookies.forEach(rookie => generateSVG(rookie))