import GameService from './game-service.js'



let _gameService = new GameService()

function draw() {
  let target = _gameService.Target
  document.getElementById('health').textContent = target.health
  document.getElementById('hits').textContent = target.hits.toString()
  document.getElementById('charName').textContent = target.name


}
// function update() {
//   document.getElementById('health').innerText = target.health
//   document.getElementById('hits').innerText = target.hits
//   document.getElementById('charName').innerText = target.name
// }

//update()

export default class GameController {
  constructor() {
    draw()

  }
  addItemToTarget(itemIndex) {
    _gameService.addItemToTarget(itemIndex)
  }
  attackTarget(attackName) {
    _gameService.attackTarget(attackName)
    draw()
  }
}