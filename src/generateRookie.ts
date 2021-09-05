import NormalDistribution from 'normal-distribution';
import {
	DEFAULT_COUNT,
	mean, 
	standardDeviation,
} from './constants';
import { Rookie as IRookie } from './types';
import { Rookie } from './Rookie';
import { writeFileSync } from 'fs';

export function generateRookies(count = DEFAULT_COUNT): IRookie[] {
	const distribution = new NormalDistribution(mean, standardDeviation);
	
	// Generate rookie instances
	const rookies = [];
	for (let n = 0; n < DEFAULT_COUNT; n ++) {
		const newRookie = new Rookie(n + 1, distribution);
		rookies.push(newRookie);
	}

	// Write metadata to file
	rookies.forEach(rookie => {
		writeFileSync(`./output/json/${rookie.id}.json`, JSON.stringify(rookie.buildMetadata(), null, 2));
	});
	
	return rookies;
}