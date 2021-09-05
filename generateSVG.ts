import { template } from "./template";
import { writeFileSync } from "fs";


interface params {
    height: string,
    weight: string
}

const idAttributes = {
    'font-weight': 'bold',
    'font-family': 'Arial, sans-serif',
    'font-size': '72px',
    fill: 'white'
}


const textAttributes = {
    class: 'text',
    fill: 'white'
}

// Just to Test
const stats = {
    height: 'TALL',
    weight: 'HEAVY',
    stamina: 4,
    speed: 3,
    strength: 5,
    agility: 5,
    creativity: 5,
    influence: 4,
    aggression: 3,
    teamwork: 9 
}

export function generateSVG(): SVGElement {
    //ROOKIE ID
    template.text('#69').attr({...idAttributes, x: 290, y: 132});


    template.text(stats.height).attr({...textAttributes, x: 280, y: 318});
    template.text(stats.weight).attr({...textAttributes, x: 280, y: 366});
    template.text(stats.stamina).attr({...textAttributes, x: 280, y: 412});
    template.text(stats.speed).attr({...textAttributes, x: 280, y: 456});
    template.text(stats.strength).attr({...textAttributes, x: 280, y: 504});
    template.text(stats.agility).attr({...textAttributes, x: 280, y: 550});
    template.text(stats.creativity).attr({...textAttributes, x: 280, y: 716});
    template.text(stats.influence).attr({...textAttributes, x: 280, y: 764});
    template.text(stats.aggression).attr({...textAttributes, x: 280, y: 808});
    template.text(stats.teamwork).attr({...textAttributes, x: 280, y: 854});

    const output = writeFileSync('./output/test.svg', template.svg())

    return template;
}