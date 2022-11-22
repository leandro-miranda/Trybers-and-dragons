import Race from './Race';

export default class Elf extends Race {
  maxLifePoints: number;
  static instance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.maxLifePoints = 99;
    Elf.instance += 1;
  }

  static createdRacesInstances(): number {
    return Elf.instance;
  }
}