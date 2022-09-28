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

	private GetColorHex(): string {
		switch (this.Color) {
			case Color.Red:
				return "#ED5252"
			case Color.Orange:
				return "#FFA500";
			case Color.Yellow:
				return "#FFD700"
			case Color.Green:
				return "#52ED6B"
			case Color.Blue:
				return "#4169E1";
			case Color.Purple:
				return "#7F00FF";
			case Color.Brown:
				return "#80461B";
			case Color.Black:
				return "#191919"
		}
	}
}

export function UpdateDecremantals(player: Player) {
	if (player.RoundsStunned > 0) player.RoundsStunned--;
	if (player.Cooldown > 0) player.Cooldown--;
}

export function SetCooldown(player: Player) {
	if (player.Cooldown == 0 && player.RoundsStunned == 0) {
		player.Cooldown = player.Class.Ability.Cooldown;
	}
}

export function SetRoundsStunned(player: Player, roundsStunned: number) {
	player.RoundsStunned += roundsStunned;
} 