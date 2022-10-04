import { Ability } from "./Ability"
import { Class } from "./Class"

function GetClasses(): Promise<Class[]> {
	var classes = [
		GetWarrior(),
		GetWarlock(),
		GetShaman(),
		GetRogue(),
		GetPriest(),
		GetPaladin(),
		GetMage(),
		GetHunter(),
		GetDeathKnight(),
		GetDruid()
	]

	return new Promise((resolve, reject) => resolve(classes))
}

function GetWarrior(): Class {
	return new Class(
		"Warrior",
		new Ability(3, false, "Dual wield", "The player can hit two times with only one hand on the club."),
		new Ability(0, true, "Enrage", "If Dual wield is on cooldown and the player gets through a gate, the cooldown on Dual Wield is reset.")
	)
}
function GetWarlock(): Class {
	return new Class(
		"Warlock",
		new Ability(0, false, "Demonic gateway", "The player can use this ability, if they are 3/4 clubs or more away from a gate. If the player succeeds in shooting their own ball through the gate, the player can move their ball to the next gate, and it counts as having shot through both gates. If the player is unsuccessful, they are instead stunned for two rounds. To use this ability, the player needs to say \"DEMONIC GATEWAY\" before taking the shot."),
		null
	)
}
function GetShaman(): Class {
	return new Class(
		"Shaman",
		new Ability(2, false, "Capacitator totem", "The player can place a totem and stun all opponents within a whole clubs range of the totem. The stun lasts for one round. After the ability is used, the totem remains as an obstacle, until the ability is used again."),
		null
	)
}
function GetRogue(): Class {
	return new Class(
		"Rogue",
		new Ability(2, false, "Sabotage", "The player can shoot an opponent away. This is done in the same manner as when two balls a touching in the standard game of croquet."),
		new Ability(0, true, "Stealth", "The player cannot be moved by opponent's shots.")
	)
}
function GetPriest(): Class {
	return new Class(
		"Priest",
		new Ability(0, false, "Leap of Faith", "The player can retake their shot. If a player retakes a shot, the first shot is disregarded."),
		null
	)
}
function GetPaladin(): Class {
	return new Class(
		"Paladin",
		new Ability(1, false, "Hammer of Justice", "Stun an opponent for one turn. This ability cannot be used on the same player twice in a row."),
		new Ability(0, true, "Divine Shield", "This player cannot be stunned.")
	)
}
function GetMage(): Class {
	return new Class(
		"Mage",
		new Ability(2, false, "Blink", "Three whole clubs range. The player can move their ball up to three whole clubs in any direction. The player's ball cannot be affected by any opponents until the next turn. You cannot blink through a gate. This ability counts as a shot."),
		null
	)
}
function GetHunter(): Class {
	return new Class(
		"Hunter",
		new Ability(2, false, "Aimed shot", "The player is able to shoot an extra time with the opposite end of the club, also known as a billiard shot."),
		null
	)
}
function GetDeathKnight(): Class {
	return new Class(
		"Death Knight",
		new Ability(2, false, "Death grip", "Three whole clubs range. Pull an opponent to the player. The opponent is placed beside the player, on the same side as the opponent's original position."),
		new Ability(0, true, "Anti-magic zone", "All opponents within a small 1/2 club range of the player, are unable to use any abilities.")
	)
}
function GetDruid(): Class {
	return new Class(
		"Druid",
		new Ability(2, false, "Bear form or Moonkin form", "Bear Form - Charge. Global range. Charge to any opponent of your choice. The player cannot pass through a gate doing so. Shares cooldown with Moonkin Form." +
			" | Moonkin Form - Typhoon. One whole club range. All balls within a whole club's range of the player are moved one whole club away from their current position such that the angle to the player stays the same. Shares cooldown with Bear Form."),
		null
	)
}

export {
	GetClasses,
}

