export interface Rookie {
  id: number;
	height: string; // TODO: enum
	weight: string; // TODO: enum
	stamina: number;
	speed: number;
	strength: number;
	agility: number;
	creativity: number;
	influence: number;
	aggression: number;
	focus: number;

  buildMetadata: () => ({
    image: string;
    attributes: Record<string, string | number>[];
  });
}