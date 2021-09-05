import NormalDistribution from 'normal-distribution';
import { chunk, groupBy, keys, fromPairs, map, sum } from 'lodash';

function weightedRandom(weights: number[]): number {
	let totalWeight = 0;
	let i = 0;
  let random: number;
	for (i; i < weights.length; i++) totalWeight += weights[i];

	random = Math.random() * totalWeight;

	for (i = 0; i < weights.length; i++) {
		if (random < weights[i]) return i;
		random -= weights[i];
	}

	throw new Error('something went wrong');
};

const mean = 5;
const standardDeviation = 1.5; // 99% of values are between 0.5 and 9.5
const distribution = new NormalDistribution(mean, standardDeviation);

const weights = [];
let i = 0
for (i; i < 10; i++) {
	weights.push(distribution.probabilityBetween(i, i+1));
}

const numericProps = [
	'stamina', 
	'speed', 
	'agility', 
	'strength', 
	'creativity', 
	'influence', 
	'aggression', 
	'teamwork',
];
const nonNumbericProps = ['height', 'weight']
const heightLabels = ['Tiny', 'Small', 'Average', 'Tall', 'Giant']
const weightLabels = ['Feather', 'Light', 'Average', 'Heavy', 'Whale']


const NFTcount = 1e1;
const generatedProps = {};

// Initialize props
numericProps.forEach(prop => generatedProps[prop] = []);
generatedProps['height'] = []
generatedProps['weight'] = []


// Build numerical props
numericProps.forEach(prop => {
	for (let n = 0; n < NFTcount; n ++) {
		generatedProps[prop].push(weightedRandom(weights) + 1);
	}
	
	// const grouped = groupBy(generatedProps[prop]);
	// const propCounts = fromPairs(keys(grouped).map((prop) => [prop, grouped[prop].length]));
	// console.log(prop + ' distribution', propCounts);
})


// Build height and weight
for (let n = 0; n < NFTcount; n ++) {
	generatedProps['height'].push(heightLabels[weightedRandom(map(chunk(weights, 2), sum))]);
	generatedProps['weight'].push(weightLabels[weightedRandom(map(chunk(weights, 2), sum))]);
}

// Build rookies
const rookies = [];
for (let n = 0; n < NFTcount; n ++) {
	const newRookie = fromPairs([...numericProps, ...nonNumbericProps].map(propName => {
		return [propName, generatedProps[propName][n]];
	}))
	rookies.push(newRookie);
}

console.log('rookies', rookies);