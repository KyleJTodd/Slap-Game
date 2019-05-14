

export default class Target {
  constructor(name, health, slap, punch, kick) {
    this.name = name
    this.health = health
    this.hits = 0
    this.attacks = {
      'slap': slap,
      'punch': punch,
      'kick': kick

    }
    this.items = []
  }
}
