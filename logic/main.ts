import {Ability} from "./Ability"
import {Class} from "./Class"

function someLogic() : Promise<any> {
	return new Promise((resolve, reject) => resolve('did some logic work'))
}

function GetClasses() : Promise<Class[]> {
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

function GetWarrior() : Class {
	return new Class(
		"Warrior",
		new Ability("Dual wield", "Du slår to gange med én enkelt hånd på køllen."),
		new Ability("Enrage", "Resetter CD på dual wield, når du kommer igennem en gate, hvis den er på CD i forvejen."),
		"url"
	)
}
function GetWarlock() : Class {
	return new Class(
		"Warlock",
		new Ability("Demonic gateway", "Man skal sige “demonic gateway” hvis man bruger ability'en. Kan bruges hvis man er 3/4" +
						"køller eller mere fra en gate. Kommer du igennem gaten, må du rykke til den næste gate og det" + 
						"tæller som at du har været igennem dem begge. Kommer man ikke igennem gaten, er man stunned i 2 runder."),
		null,
		"url"
	)
}
function GetShaman() : Class {
	return new Class(
		"Shaman",
		new Ability("Capacitator totem", "Du kan placere et totem og stunne alle inden for en hel kølles range af " + 
					"dette totem for 1 runde. Totem bliver stående, indtil ability'en bruges igen."),
		null,
		"url"
	)
}
function GetRogue() : Class {
	return new Class(
		"Rogue",
		new Ability("Sabotage", "Du må skyde en valgfri kugle væk, som i normale kroket regler."),
		new Ability("Stealth", "Kan ikke blive rykket af andres almindelige skud."),
		"url"
	)
}
function GetPriest() : Class {
		return new Class(
		"Priest",
		new Ability("Leap of Faith", "Du kan tage dit skud om. Tages skuddet om, gælder det andet skud."),
		null,
		"url"
	)
}
function GetPaladin() : Class {
	return new Class(
		"Paladin",
		new Ability("Hammer of Justice", "Stun en valgfri spiller for 1 runde. Kan ikke bruges på den samme spiller to gange i streg."),
		new Ability("Divine Shield", "Du kan ikke blive stunned."),
		"url"
	)
}
function GetMage() : Class {
	return new Class(
		"Mage",
		new Ability("Blink", "(3 hele køllers range.) Flyt din kugle op til 3 hele køller i en valgfri retning. Tæller som skud." +
                    " Din kugle kan ikke blive rykket på indtil det er din tur igen. Du kan ikke blink igennem en gate."),
        null,
        "url"
	)
}
function GetHunter() : Class {
    return new Class(
		"Hunter",
		new Ability("Aimed shot", "Kan skyde en ekstra gang med den modsatte ende af staven (billiard skud)."),
		new Ability("Anti-magic zone", "(lille 1/2 kølles range) Ingen kan bruge abilities hvis de er inde i zonen."),
		"url"
	)
}
function GetDeathKnight() : Class {
	return new Class(
		"Death Knight",
		new Ability("Death grip", "(3 hele køllers range) Træk en modstanders kugle hen til dig. Kuglen skal placeres" + 
                    " på den side som kuglen oprindeligt var i forhold til din kugle."),
		new Ability("Anti-magic zone", "(lille 1/2 kølles range) Ingen kan bruge abilities hvis de er inde i zonen."),
		"url"
	)
}
function GetDruid() : Class {
	return new Class(
		"Druid",
		new Ability("Bear form or Moonkin form", "Bear form: (Global range) Charge til en selvvalgt spiller. Man kan ikke gå igennem gates med den." + 
        " | Moonkin form: (En hel kølles range) Alle inden for en kølles range af en selv bliver skubbet en kølle væk fra deres position i den vinkel" + 
        " de har i forhold til en selv. De deler CD."),
		new Ability("Stealth", "Kan ikke blive rykket af andres almindelige skud."),
		"url"
	)
}

export {
	someLogic, GetClasses
}

