
export class Ability {
	Name: string;
	Description: string;
	CD: number;

	constructor(name : string, description : string) {
		this.Name = name;
		this.Description = description;
		this.CD = 0;
	}

}
