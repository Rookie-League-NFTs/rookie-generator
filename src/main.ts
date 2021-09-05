import { generateSVG } from './generateSVG';
import { generateRookies } from './generateRookie';
import { writeFileSync } from 'fs';
import { generateTemplate } from './template';


const rookies = generateRookies(10);
const template = generateTemplate();


// DEBUG: 
// console.log(rookies);

// Build unique svg's
rookies.forEach(rookie => {
    generateSVG(rookie, template)
})
