export class GameSettings {
    PlayerCount: number;
    AllowDuplicateClasses: boolean;

    constructor(playerCount: number, allowDuplicateClasses: boolean) {
        this.PlayerCount = playerCount;
        this.AllowDuplicateClasses = allowDuplicateClasses;
    }
}