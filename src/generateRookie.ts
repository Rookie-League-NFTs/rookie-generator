import NormalDistribution from 'normal-distribution';
import {
	DEFAULT_COUNT,
	mean, 
	standardDeviation,
} from './constants';
import { Rookie as IRookie } from './types';
import { Rookie } from './Rookie';

export function generateRookies(count = DEFAULT_COUNT): IRookie[] {
	const distribution = new NormalDistribution(mean, standardDeviation);
	
	const rookies = [];
	for (let n = 0; n < DEFAULT_COUNT; n ++) {
		const newRookie = new Rookie(n + 1, distribution);
		rookies.push(newRookie);
	}
	
	return rookies;
}