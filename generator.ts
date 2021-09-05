import NormalDistribution from 'normal-distribution';
import { chunk, groupBy, keys, fromPairs, map, sum } from 'lodash';
import { weightedRandom } from './utils';
import {
	numericProps,
	nonNumbericProps,
	heightLabels,
	weightLabels,
	DEFAULT_COUNT,
	mean, 
	standardDeviation,
} from './constants';
import { Rookie } from './types';

export function generate(count = DEFAULT_COUNT): Rookie[] {
	const distribution = new NormalDistribution(mean, standardDeviation);
	
	const weights = [];
	let i = 0
	for (i; i < 10; i++) {
		weights.push(distribution.probabilityBetween(i, i+1));
	}
	
	const generatedProps = {};
	
	// Initialize props
	numericProps.forEach(prop => generatedProps[prop] = []);
	generatedProps['height'] = []
	generatedProps['weight'] = []
	
	
	// Build numerical props
	numericProps.forEach(prop => {
		for (let n = 0; n < DEFAULT_COUNT; n ++) {
			generatedProps[prop].push(weightedRandom(weights) + 1);
		}
		// Log out the distribution to take a look
		// const grouped = groupBy(generatedProps[prop]);
		// const propCounts = fromPairs(keys(grouped).map((prop) => [prop, grouped[prop].length]));
		// console.log(prop + ' distribution', propCounts);
		
		// There are only 5 props for height and weight, so we combine the 10 weights in pairs
		generatedProps['height'].push(heightLabels[weightedRandom(map(chunk(weights, 2), sum))]);
		generatedProps['weight'].push(weightLabels[weightedRandom(map(chunk(weights, 2), sum))]);
	})
	
	// Build rookies
	const rookies = [];
	for (let n = 0; n < DEFAULT_COUNT; n ++) {
		const allProps = [...numericProps, ...nonNumbericProps];
		const newRookie = fromPairs(allProps.map(propName => {
			return [propName, generatedProps[propName][n]];
		}))
		newRookie.id = n + 1;
		rookies.push(newRookie);
	}

	return rookies;
}