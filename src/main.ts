import { generateSVG } from './generateSVG';
import { generateRookies } from './generateRookie';
import { writeFileSync } from 'fs';

const rookies = generateRookies(10);

// DEBUG: 
// console.log(rookies);

// Build unique svg's
rookies.forEach(rookie => generateSVG(rookie))
