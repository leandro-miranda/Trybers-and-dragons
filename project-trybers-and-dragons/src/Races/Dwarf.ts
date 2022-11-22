import Race from './Race';

export default class Dwarf extends Race {
  maxLifePoints: number;
  static instance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 80;
    Dwarf.instance += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf.instance;
  }
}
