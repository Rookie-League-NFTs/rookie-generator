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

export function generateSVG(rookie: Rookie, template): SVGElement {
    //ROOKIE ID
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
    template.text(rookie.focus).attr({...textAttributes, x: 280, y: 854});

    writeFileSync(`./output/svg/${rookie.id}.svg`, template.svg())
    return template;
}