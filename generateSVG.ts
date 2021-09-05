import { template } from "./template";
import { writeFileSync } from "fs";
import { Rookie } from './types'
import { upperCase } from 'lodash'

interface params {
    height: string,
    weight: string
}

const idAttributes = {
    'font-weight': 'bold',
    'font-family': 'Arial, sans-serif',
    'font-size': '64px',
    fill: 'white'
}


const textAttributes = {
    class: 'text',
    fill: 'white'
}


export function generateSVG(rookie: Rookie): SVGElement {
    //ROOKIE ID
<<<<<<< HEAD
    template.text('#8569').attr({...idAttributes, x: 290, y: 130});


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

    const output = writeFileSync('./svgs/test.svg', template.svg())

=======
    template.text(`#${rookie.id}`).attr({...idAttributes, x: 290, y: 132});

    template.text(upperCase(rookie.height)).attr({...textAttributes, x: 280, y: 318});
    template.text(upperCase(rookie.weight)).attr({...textAttributes, x: 280, y: 366});
    template.text(rookie.stamina).attr({...textAttributes, x: 280, y: 412});
    template.text(rookie.speed).attr({...textAttributes, x: 280, y: 456});
    template.text(rookie.strength).attr({...textAttributes, x: 280, y: 504});
    template.text(rookie.agility).attr({...textAttributes, x: 280, y: 550});
    template.text(rookie.creativity).attr({...textAttributes, x: 280, y: 716});
    template.text(rookie.influence).attr({...textAttributes, x: 280, y: 764});
    template.text(rookie.aggression).attr({...textAttributes, x: 280, y: 808});
    template.text(rookie.teamwork).attr({...textAttributes, x: 280, y: 854});

    writeFileSync(`./output/${rookie.id}.svg`, template.svg())
>>>>>>> 12f346d (Generates svgs)
    return template;
}