export class Ability {
	Cooldown: number;
	Name: string;
	Description: string;
	Passive: boolean;

	constructor(cooldown: number, passive: boolean, name: string, description: string) {
		this.Cooldown = cooldown;
		this.Name = name;
		this.Description = description;
		this.Passive = passive;
	}
}
