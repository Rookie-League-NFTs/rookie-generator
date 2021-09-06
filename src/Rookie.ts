import NormalDistribution from 'normal-distribution';
import { capitalize, chunk, map, sum } from 'lodash';
import { weightedRandom } from './utils';
import {
	numericProps,
	IPFS_BASE_PATH,
	heightLabels,
	weightLabels,
} from './constants';
import { Rookie as IRookie } from './types';

export class Rookie implements IRookie {
	id: number;
	height: string;
	weight: string;
	stamina: number;
	speed: number;
	strength: number;
	agility: number;
	creativity: number;
	influence: number;
	aggression: number;
	focus: number;

	constructor(id: number, distribution: NormalDistribution, ratio: number = 1) {
		this.id = id;

		const weights = [];
		let i = 0
		for (i; i < 10; i++) {
			weights.push(distribution.probabilityBetween(i, i+1) * ratio);
		}

		this.buildNumbericProps(weights);
		this.qualitativeProps(weights);
	}

	private buildNumbericProps(weights: number[]) {
		numericProps.forEach(prop => {
			this[prop] = weightedRandom(weights) + 1;
		})
	}

	private qualitativeProps(weights: number[]) {
		this.height = heightLabels[weightedRandom(map(chunk(weights, 2), sum))];
		this.weight = weightLabels[weightedRandom(map(chunk(weights, 2), sum))];
	}

	allAttributes() {
		return [
			'height',
			'weight',
			'stamina',
			'speed',
			'strength',
			'agility',
			'creativity',
			'influence',
			'aggression',
			'focus',
		];
	}

	buildMetadata() {
		return {
			image: `${IPFS_BASE_PATH}/${this.id}`,
			attributes: this.allAttributes().map((propName) => ({
				"trait_type": capitalize(propName),
				"value": this[propName],
			})),
		}
	}
}