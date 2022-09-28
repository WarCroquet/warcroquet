import { Class } from './Class'
import { Color } from './Color'

export class Player {
	Name: string;
	Class: Class;
	RoundsStunned: number;
	Cooldown: number;
	Color: Color;
	ColorHex: string;

	constructor(name: string, _class: Class, color: Color) {
		this.Name = name;
		this.Class = _class;
		this.RoundsStunned = 0;
		this.Cooldown = 0;
		this.Color = color;
		this.ColorHex = this.GetColorHex();
	}

	// Kan det virkelig passe man ikke kan definere metoder på en klasse som kan blive kaldt fra en vue component?
	// public UpdateDecremantals() {
	// 	if (this.RoundsStunned > 0) this.RoundsStunned--;
	// 	if (this.Cooldown > 0) this.Cooldown--;
	// }

	// public SetCooldown = () => this.Cooldown = this.Class.Ability.Cooldown;
	// public SetRoundsStunned = (roundsStunned: number) => this.RoundsStunned = roundsStunned;

	private GetColorHex(): string {
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

export function UpdateDecremantals(player: Player) {
	if (player.RoundsStunned > 0) player.RoundsStunned--;
	if (player.Cooldown > 0) player.Cooldown--;
}

export function SetCooldown(player: Player) {
	player.Cooldown = player.Class.Ability.Cooldown;
}

export function SetRoundsStunned(player: Player, roundsStunned: number) {
	player.RoundsStunned += roundsStunned;
} 