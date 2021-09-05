import { template } from "./template";
import { writeFileSync } from "fs";

interface params {
    height: string,
    weight: string
}

// variable for the namespace 
const svgns = "http://www.w3.org/2000/svg";


export function generateSVG(): SVGElement {
    // const test: SVGElement = document.createElement("svg");
    const test = template.svg();
    
    const output = writeFileSync('./output/test.svg', template.svg())

    return template;
}