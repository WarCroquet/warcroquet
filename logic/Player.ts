import { Class } from './Class'
import { Color } from './Color'

export class Player {
	Name: string;
	Class: Class;
	RoundsStunned: number;
	StunnedThisRound: boolean;
	StunIcon: string;
	Cooldown: number;
	CooldownThisRound: boolean;
	CooldownIcon: string;
	Color: Color;
	ColorHex: string;

	constructor(name: string, _class: Class, color: Color) {
		this.Name = name;
		this.Class = _class;
		this.RoundsStunned = 0;
		this.StunIcon = "stun-icons/stun.png";
		this.Cooldown = 0;
		this.CooldownIcon = "cooldown-icons/ability.png";
		this.Color = color;
		this.ColorHex = this.GetColorHex();
	}

	// Kan det virkelig passe man ikke kan definere metoder på en klasse som kan blive kaldt fra en vue component?

	private GetColorHex(): string {
		switch (this.Color) {
			case Color.Red:
				return "#ED5252";
			case Color.Orange:
				return "#ED9C52";
			case Color.Yellow:
				return "#EAED52";
			case Color.Green:
				return "#52ED6B";
			case Color.Blue:
				return "#37B5EB";
			case Color.Purple:
				return "#C552ED";
			case Color.Brown:
				return "#A5764C";
			case Color.Black:
				return "#252422";
		}
	}
}

export function UpdateDecremantals(player: Player) {
	if (player.RoundsStunned > 0 && !player.StunnedThisRound) {
		player.RoundsStunned--;
		UpdateStunIcon(player);
	}

	if (player.Cooldown > 0 && !player.CooldownThisRound) {
		player.Cooldown--;
		UpdateCooldownIcon(player);
	}

	player.StunnedThisRound = false;
	player.CooldownThisRound = false;
}

export function SetCooldown(player: Player) {
	if (player.Cooldown == 0 && player.RoundsStunned == 0) {
		player.Cooldown = player.Class.Ability.Cooldown;
		player.CooldownThisRound = true;
		UpdateCooldownIcon(player);
	}
}

function UpdateCooldownIcon(player: Player) {
	switch (player.Cooldown) {
		case 0:
			player.CooldownIcon = "cooldown-icons/ability.png";
			break;
		case 1:
			player.CooldownIcon = "cooldown-icons/1.png";
			break;
		case 2:
			player.CooldownIcon = "cooldown-icons/2.png";
			break;
		case 3:
			player.CooldownIcon = "cooldown-icons/3.png";
			break;
		case 4:
			player.CooldownIcon = "cooldown-icons/4.png";
			break;
		case 5:
			player.CooldownIcon = "cooldown-icons/5.png";
			break;
		case 6:
			player.CooldownIcon = "cooldown-icons/6.png";
			break;
		case 7:
			player.CooldownIcon = "cooldown-icons/7.png";
			break;
		case 8:
			player.CooldownIcon = "cooldown-icons/8.png";
			break;
		case 9:
			player.CooldownIcon = "cooldown-icons/9.png";
			break;
		default:
			player.CooldownIcon = "cooldown-icons/ability.png";
			break;
	}
}

export function SetRoundsStunned(player: Player, roundsStunned: number) {
	player.RoundsStunned += roundsStunned;
	player.StunnedThisRound = true;
	UpdateStunIcon(player);
}

function UpdateStunIcon(player: Player) {
	switch (player.RoundsStunned) {
		case 0:
			player.StunIcon = "stun-icons/stun.png";
			break;
		case 1:
			player.StunIcon = "stun-icons/1.png";
			break;
		case 2:
			player.StunIcon = "stun-icons/2.png";
			break;
		case 3:
			player.StunIcon = "stun-icons/3.png";
			break;
		case 4:
			player.StunIcon = "stun-icons/4.png";
			break;
		case 5:
			player.StunIcon = "stun-icons/5.png";
			break;
		case 6:
			player.StunIcon = "stun-icons/6.png";
			break;
		case 7:
			player.StunIcon = "stun-icons/7.png";
			break;
		case 8:
			player.StunIcon = "stun-icons/8.png";
			break;
		case 9:
			player.StunIcon = "stun-icons/9.png";
			break;
		default:
			player.StunIcon = "stun-icons/stun.png";
			break;
	}
}