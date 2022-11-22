import Race from './Race';

export default class Halfling extends Race {
  maxLifePoints: number;
  static instance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 60;
    Halfling.instance += 1;
  }

  static createdRacesInstances(): number {
    return Halfling.instance;
  }
}