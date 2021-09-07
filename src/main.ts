import { generateSVG } from './generateRookieSVG';
import { generateRookies } from './generateRookie';

//Generate Rookies
const rookies = generateRookies();

// Build unique svg's
rookies.forEach((rookie, index) => {
  generateSVG(rookie);
})
