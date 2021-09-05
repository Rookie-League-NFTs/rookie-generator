import { generateSVG } from './generateSVG';
import { generate } from './generator';

const rookies = generate(10);

rookies.forEach(rookie => generateSVG(rookie))
