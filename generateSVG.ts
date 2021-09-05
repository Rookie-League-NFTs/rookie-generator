import { template } from "./template";
import { writeFileSync } from "fs";


interface params {
    height: string,
    weight: string
}

export function generateSVG(): SVGElement {
    // const test: SVGElement = document.createElement("svg");
    const test = template.svg();
    const output = writeFileSync('./output/test.svg', template.svg())

    return template;
}