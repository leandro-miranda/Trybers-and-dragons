import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  public _monsters: SimpleFighter[];

  constructor(player: Fighter, monsters: SimpleFighter[]) {
    super(player);
    this._monsters = monsters;
  }

  public aPlayerIsDead(): boolean {
    const playerIsAlive = this.player.lifePoints !== -1;
    const playerLiveMonsters = this._monsters
      .some((monster) => monster.lifePoints !== -1);

    if (playerIsAlive && playerLiveMonsters) return false;

    return true;
  }

  public fight(): number {
    while (!this.aPlayerIsDead()) {
      this._monsters.forEach((monster) => {
        this.player.attack(monster);
        monster.attack(this.player);
      });
    }

    return super.fight();
  }
}