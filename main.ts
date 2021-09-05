import { generateSVG } from './generateSVG';
import { generate } from './generator';


const rookies = generate(10);
const test = generateSVG();
console.log('rookies', rookies);
