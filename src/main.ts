import { generateSVG } from './generateSVG';
import { generateRookies } from './generateRookie';

const rookies = generateRookies();

console.log(rookies)

// DEBUG: 
// console.log(rookies);

// Build unique svg's
rookies.forEach((rookie, index) => {
  console.log('generating svg #', index + 1);
  generateSVG(rookie);
})
