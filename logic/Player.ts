import { Class } from './Class'
import { Color } from './Color'

export class Player {
	Name: string;
	Class: Class;
	Stun: number;
	CD: number;
	Color: Color;

	constructor(name: string, _class: Class, color: Color) {
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

	ColorHex(): string {
		switch (this.Color) {
			case Color.Red:
				return "#ED5252"
			case Color.Yellow:
				return "#ED9C52"
			case Color.Green:
				return "#52ED6B"
			case Color.Black:
				return "#000000"
		}
	}
}