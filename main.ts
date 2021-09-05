import { generateSVG } from './generateSVG';
import { generateRookies } from './generateRookie';
import { writeFileSync } from 'fs';

const rookies = generateRookies(10);

// DEBUG: 
// console.log(rookies);

// Write metadata to file
writeFileSync('./output/metadata.json', JSON.stringify(rookies.map(r => r.buildMetadata()), null, 2));

// Build unique svg's
rookies.forEach(rookie => generateSVG(rookie))
