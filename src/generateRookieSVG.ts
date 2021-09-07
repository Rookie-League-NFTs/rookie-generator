import { buildTemplate } from "./template";
import { writeFileSync } from "fs";
import { Rookie } from './types'
import { forEach, upperCase } from 'lodash'

interface params {
    height: string,
    weight: string
}

const LIGHT_BLUE = '#D6E1FF';
  const MEDIUM_BLUE = '#9BB7FF';
  const DARK_BLUE = '#0047FF';
  const WHITE = '#FFFFFF'
  const RED = '#BF3333'

const idAttributes = {
    'font-weight': 'bold',
    'font-family': 'Monospace',
    'font-size': '42px',
    fill: DARK_BLUE,
    stroke: WHITE
}

const textAttributes = {
    'font-family': 'Monospace',
    'font-size': '20px',
}

const circleAttributes = {
    stroke: DARK_BLUE,
    'stroke-width': 2,
    r: 8.5
}

export function generateSVG(rookie: Rookie) {
    const template = buildTemplate();

    //ROOKIE ID
    template.text(`Rookie #${rookie.id}`).attr({...idAttributes, x: 30, y: 64});

    //ROOKIE HEIGHT + WEIGHT
    template.text(`HEIGHT: ${upperCase(rookie.height)}, WEIGHT: ${upperCase(rookie.weight)}`).attr({...textAttributes, x: 30, y: 122, fill: DARK_BLUE
    });

    // This was to populate the avgs. on Rookies, we should add it to the generateRookie file

    // @ts-ignore
    // template.text(`AVG: ${rookie.attributes[10].value}`).attr({...textAttributes, x: 364, y: 164, fill: WHITE})

    // // @ts-ignore
    // template.text(`AVG: ${rookie.attributes[11].value}`).attr({...textAttributes, x: 364, y: 339, fill: WHITE});

    const stamina = rookie.stamina;
    const speed = rookie.speed;
    const strength = rookie.strength;
    const agility = rookie.agility;
    const creativity = rookie.creativity;
    const influence = rookie.influence; 
    const focus = rookie.focus;
    const aggression = rookie.aggression; 


    for(let i= 0; i < 10; i++) {
        const margin = 26;
        const totalMargin = margin * i;

        if(i < stamina) {
            template.circle({...circleAttributes, cx: 226.5 + totalMargin, cy: 193.5, fill: DARK_BLUE});
        } else {
            template.circle({...circleAttributes, cx: 226.5 + totalMargin, cy: 193.5, fill: 'none'});
        };
    }

    for(let i= 0; i < 10; i++) {
        const margin = 26;
        const totalMargin = margin * i;

        if(i < speed) {
            template.circle({...circleAttributes, cx: 226.5 + totalMargin, cy: 228.5, fill: DARK_BLUE});
        } else {
            template.circle({...circleAttributes, cx: 226.5 + totalMargin, cy: 228.5, fill: 'none'});
        };
    }

    for(let i= 0; i < 10; i++) {
        const margin = 26;
        const totalMargin = margin * i;

        if(i < strength) {
            template.circle({...circleAttributes, cx: 226.5 + totalMargin, cy: 263.5, fill: DARK_BLUE});
        } else {
            template.circle({...circleAttributes, cx: 226.5 + totalMargin, cy: 263.5, fill: 'none'});
        };
    }

    for(let i= 0; i < 10; i++) {
        const margin = 26;
        const totalMargin = margin * i;

        if(i < agility) {
            template.circle({...circleAttributes, cx: 226.5 + totalMargin, cy: 298.5, fill: DARK_BLUE});
        } else {
            template.circle({...circleAttributes, cx: 226.5 + totalMargin, cy: 298.5, fill: 'none'});
        };
    }
    
    
    for(let i= 0; i < 10; i++) {
        const margin = 26;
        const totalMargin = margin * i;

        
        if(i < creativity) {
            template.circle({...circleAttributes, cx: 226.5 + totalMargin, cy: 367.5, fill: DARK_BLUE});
        } else {
            template.circle({...circleAttributes, cx: 226.5 + totalMargin, cy: 367.5, fill: 'none'});
        };
    }

    for(let i= 0; i < 10; i++) {
        const margin = 26;
        const totalMargin = margin * i;

        if(i < influence) {
            template.circle({...circleAttributes, cx: 226.5 + totalMargin, cy: 402.5, fill: DARK_BLUE});
        } else {
            template.circle({...circleAttributes, cx: 226.5 + totalMargin, cy: 402.5, fill: 'none'});
        };
    }

    for(let i= 0; i < 10; i++) {
        const margin = 26;
        const totalMargin = margin * i;

        
        if(i < aggression) {
            template.circle({...circleAttributes, cx: 226.5 + totalMargin, cy: 437.5, fill: DARK_BLUE});
        } else {
            template.circle({...circleAttributes, cx: 226.5 + totalMargin, cy: 437.5, fill: 'none'});
        };
    }

    for(let i= 0; i < 10; i++) {
        const margin = 26;
        const totalMargin = margin * i;

        
        if(i < focus) {
            template.circle({...circleAttributes, cx: 226.5 + totalMargin, cy: 472.5, fill: DARK_BLUE});
        } else {
            template.circle({...circleAttributes, cx: 226.5 + totalMargin, cy: 472.5, fill: 'none'});
        };
    }

    writeFileSync(`./output/svg/${rookie.id}.svg`, template.svg())
}