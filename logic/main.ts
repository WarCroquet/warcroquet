

function someLogic() : Promise<any> {
	return new Promise((resolve, reject) => resolve('did some logic work'))
}

export {
	someLogic
}


interface IPlayer {
	Class : IClass;
    Name : string
    // Color : (Color or enum)
    Stun : number
    CD : number
}

interface IClass {
	Ability : IAbility
	Passive : IAbility
	Name : string
	IconUrl : string
}

interface IAbility {
	Name : string
	Description : string
	CD : number
}

class Player implements IPlayer {
	Name : string;
	Class : IClass;
	Stun : number;
	CD : number;

	constructor(name : string, _class : IClass) {
		this.Name = name;
		this.Class = _class;
		this.Stun = 0;
		this.CD = 0;
	}

	UpdateDecremantals () {
		if (this.Stun > 0) this.Stun--;
		if (this.CD > 0) this.CD--;
	}

	SetCD = () => this.CD = this.Class.Ability.CD;
	SetStun = (roundsStunned : number) => this.Stun = roundsStunned;
	
}

class Class implements IClass {
	Name: string;
	Ability: IAbility;
	Passive: IAbility;
	IconUrl: string;

	constructor(name : string, ability : IAbility, passive : IAbility, iconUrl : string) {
		this.Name = name;
		this.Ability = ability;
		this.Passive = passive;
		this.IconUrl = iconUrl;
	}

}

class Ability implements IAbility {
	Name: string;
	Description: string;
	CD: number;

	constructor(name : string, description : string) {
		this.Name = name;
		this.Description = description;
		this.CD = 0;
	}

}
