export class Ability {
	CD: number;
	Name: string;
	Description: string;
	Passive: boolean;

	constructor(cooldown: number, passive: boolean, name: string, description: string) {
		this.CD = cooldown;
		this.Name = name;
		this.Description = description;
		this.Passive = passive;
	}
}
