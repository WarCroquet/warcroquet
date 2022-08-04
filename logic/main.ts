import Ability from "./Ability"
import Class from "./Class"


function someLogic() : Promise<any> {
	return new Promise((resolve, reject) => resolve('did some logic work'))
}

function GetClasses() : Promise<Class[]> {
	



	return new Promise((resolve, reject) => resolve([]))
}

function GetWarrior() : Class {
	return new Class(
		"Warrior",
		new Ability("Dual wield", "Du slår to gange med én enkelt hånd på køllen."),
		new Ability("Enrage", "Resetter CD på dual wield, når du kommer igennem en gate, hvis den er på CD i forvejen."),
		"url"
	)

	// <u>Dual wield</u>. Du slår to gange med én enkelt hånd på køllen.
    //   </li>
    // </ul>
    // Passive:
    // <ul>
    //   <li>
    //     <u>Enrage</u>: Resetter CD på dual wield, når du kommer igennem en gate, hvis den er på CD i
    //     forvejen.<br /><br />
    //   </li>
}
function GetWarlock() : Class {
	// <li>
    //     <u>Demonic gateway</u>. Man skal sige “demonic gateway” hvis man bruger ability'en. Kan bruges hvis man er ¾
    //     køller eller mere fra en gate. Kommer du igennem gaten, må du rykke til den næste gate og det tæller som at du
    //     har været igennem dem begge. Kommer man ikke igennem gaten, er man stunned i 2 runder. <br /><br />
    //   </li>
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
	// <li>
    //     <u>Capacitator totem</u>. Du kan placere et totem og stunne alle inden for en hel kølles range af dette totem
    //     for 1 runde. Totem bliver stående, indtil ability'en bruges igen. <br /><br />
    //   </li>
	return new Class(
		"Shaman",
		new Ability("Capacitator totem", "Du kan placere et totem og stunne alle inden for en hel kølles range af " + 
					"dette totem for 1 runde. Totem bliver stående, indtil ability'en bruges igen."),
		null,
		"url"
	)
}
function GetRogue() : Class {
	// <u> Sabotage</u>. Du må skyde en valgfri kugle væk, som i normale kroket regler.
    //   </li>
    // </ul>
    // Passive:
    // <ul>
    //   <li>
    //     <u> Stealth</u>. Kan ikke blive rykket af andres almindelige skud. <br /><br />
    //   </li>
	return null
}
function GetPriest() : Class {
	// <u>Leap of Faith</u>. Du kan tage dit skud om. Tages skuddet om, gælder det andet skud. <br /><br />

	return null
}
function GetPaladin() : Class {
	// <u>Hammer of Justice</u>. Stun en valgfri spiller for 1 runde. Kan ikke bruges på den samme spiller to gange i
    //     streg.
    //   </li>
    // </ul>
    // Passive:
    // <ul>
    //   <li>
    //     <u>Divine Shield</u>. Du kan ikke blive stunned. <br /><br />
    //   </li>
	return null
}
function GetMage() : Class {
	// <li>
    //     <u> Blink</u>. 3 hele køllers range. Flyt din kugle op til 3 hele køller i en valgfri retning. Tæller som skud.
    //     Din kugle kan ikke blive rykket på indtil det er din tur igen. Du kan ikke blink igennem en gate. <br /><br />
    //   </li>
	return null
}
function GetHunter() : Class {
	// <u>Aimed shot</u>. Kan skyde en ekstra gang med den modsatte ende af staven (billiard skud). <br /><br />

	return null
}
function GetDeathKnight() : Class {
	// <u>Death grip</u>. 3 hele køllers range. Træk en modstanders kugle hen til dig. Kuglen skal placeres på den side
    //     som kuglen oprindeligt var i forhold til din kugle.
    //   </li>
    // </ul>
    // Passive:
    // <ul>
    //   <li>
    //     <u>Anti-magic zone</u>. Ingen kan bruge abilities hvis de er inden for lille ½ kølles range. <br /><br />
    //   </li>
	return null
}
function GetDruid() : Class {
	// <li> <u>Bear form: Charge</u>. Global range. Charge til en selvvalgt spiller. Man kan ikke gå igennem gates med
    //     den. </li>
    //   <li>
    //     <u>Moonkin form: Typhoon</u>. En hel kølles range. Alle inden for en kølles range af en selv bliver skubbet en
    //     kølle væk fra deres position i den vinkel de har i forhold til en selv. De deler CD. <br /><br />
    //   </li>
	return null
}


"Druid",
  "Death Knight",
  "Hunter",
  "Mage",
  "Paladin",
  "Priest",
  "Rogue",
  "Shaman",
  "Warlock",
  "Warrior"

export {
	someLogic, GetClasses
}

