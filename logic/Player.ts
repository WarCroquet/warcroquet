import { Class } from './Class'

export class Player {
	Name: string;
	Class: Class;
	Stun: number;
	CD: number;
	Color: string;

	constructor(name: string, _class: Class, color: string) {
		this.Name = name;
		this.Class = _class;
		this.Stun = 0;
		this.CD = 0;
		this.Color = color;
	}

	UpdateDecremantals() {
		if (this.Stun > 0) this.Stun--;
		if (this.CD > 0) this.CD--;
	}

	SetCD = () => this.CD = this.Class.Ability.CD;
	SetStun = (roundsStunned: number) => this.Stun = roundsStunned;

}

