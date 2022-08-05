
import Ability from './Ability'

export class Class {
	Name: string;
	Ability: Ability;
	Passive: Ability;
	IconUrl: string;

	constructor(name : string, ability : Ability, passive : Ability, iconUrl : string) {
		this.Name = name;
		this.Ability = ability;
		this.Passive = passive;
		this.IconUrl = iconUrl;
	}

}

